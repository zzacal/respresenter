import type { ReservationDetail } from "$lib/details";
import { hoard } from "../data-hoarder";
import { getApimSettings } from "../appsettings";
import pkg from "lodash";
import type { TicketResponse } from "$lib/tickets";
const { camelCase } = pkg;

const getReservation =
  (env: string) =>
  async (conf: string, isDcsIncluded: boolean): Promise<ReservationResponse> => {
    const { baseUrl, key, appid } = await getApimSettings(env);
    const url = `${baseUrl}/aag/3/guestServices/reservations/reservation/${conf}?withDCSPassengerData=${isDcsIncluded}`;
    const response = await fetch(url, {
      headers: {
        "Ocp-Apim-Subscription-Key": key,
        "asgds-appid": appid
      }
    });
    const content = await response.json();
		await hoard(`reservation/${conf}.json`, JSON.stringify(content));
    return content;
  };

const getTickets =
  (env: string) =>
  async (ticketsNums: string[]): Promise<TicketResponse> => {
    const { baseUrl, key, appid } = await getApimSettings(env);
    const ticketParam = ticketsNums.map((t) => `ticketNumbers=${t.split("-")[0]}`).join("&");
    const url = `${baseUrl}/aag/1/guestServices/ticketing/reservations/tickets?ticketingProvider=AS&${ticketParam}`;
    const response = await fetch(url, {
      headers: {
        "Ocp-Apim-Subscription-Key": key,
        "asgds-appid": appid
      }
    });
    const content = await response.json();
		await hoard(`tickets/${ticketParam}.json`, JSON.stringify(content));

    const camelized = camelizeKeys(content);
    return camelized as TicketResponse;
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

type KeyValuable =
  | {
      [key: string]: KeyValuable;
    }
  | Array<KeyValuable>;

const camelizeKeys = (obj: KeyValuable): any => {
  if (Array.isArray(obj)) {
    return obj.map((v) => camelizeKeys(v));
  } else if (obj != null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [camelCase(key)]: camelizeKeys(obj[key])
      }),
      {}
    );
  }
  return obj;
};
