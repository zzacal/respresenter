import type { ReservationDetail } from "$lib/details";
import { hoard } from "../data-hoarder";
import { getApimSettings } from "../appsettings";
import type { TicketResponse } from "$lib/tickets";
import { isSuccessStatus } from "$lib/http-response-helpers";
import { recase } from "$lib/recase";

const camelize = recase("camel");

const getReservation =
  (env: string) =>
  async (conf: string, isDcsIncluded: boolean): Promise<ReservationResponse | undefined> => {
    const { baseUrl, key, appid } = await getApimSettings(env);
    const url = `${baseUrl}/aag/3/guestServices/reservations/reservation/${conf}?withDCSPassengerData=${isDcsIncluded}`;
    const response = await fetch(url, {
      headers: {
        "Ocp-Apim-Subscription-Key": key,
        "asgds-appid": appid
      }
    });

    if(isSuccessStatus(response.status)) {
      const content = await response.json();
      await hoard(`reservation/${(new Date()).toISOString().slice(0,10)}-${conf}.json`, JSON.stringify(content));
      return content;
    }
  };

const getTickets =
  (env: string) =>
  async (ticketsNums: string[]): Promise<TicketResponse | undefined> => {
    const { baseUrl, key, appid } = await getApimSettings(env);
    const ticketParam = ticketsNums.map((t) => `ticketNumbers=${t.split("-")[0]}`).join("&");
    const url = `${baseUrl}/aag/1/guestServices/ticketing/reservations/tickets?ticketingProvider=AS&${ticketParam}`;
    const response = await fetch(url, {
      headers: {
        "Ocp-Apim-Subscription-Key": key,
        "asgds-appid": appid
      }
    });

    if(isSuccessStatus(response.status)) {
      const content = await response.json();
      await hoard(`tickets/${(new Date()).toISOString().slice(0,10)}-${ticketParam}.json`, JSON.stringify(content));
  
      const camelized = camelize(content);
      return camelized as TicketResponse;
    }
  };

export interface ReservationResponse {
  actionResult: ActionResult;
  reservationDetails: ReservationDetail[];
}

export interface ActionResult {
  code: number;
  messages: string[];
}

export const reservationClient = (env: string) => ({
  getReservation: getReservation(env),
  getTickets: getTickets(env)
});
