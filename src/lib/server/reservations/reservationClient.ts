import type { ReservationDetail } from "$lib/details";
import fs from "fs";

export const reservationClient = (baseUrl: string, apimKey: string, appid: string) => async (conf: string, isDcsIncluded: boolean): Promise<ReservationResponse> => {
  const url = `${baseUrl}/aag/3/guestServices/reservations/reservation/${conf}?withDCSPassengerData=${isDcsIncluded}`;
  const response = await fetch(
    url, 
    {
      headers: {
        "Ocp-Apim-Subscription-Key": apimKey,
        "asgds-appid": appid
      } 
    });
    const content = await response.json();
    fs.writeFileSync(`./sample_data/reservation/${conf}.json`, JSON.stringify(content));
    return content;
};

export interface ReservationResponse {
  actionResult: ActionResult
  reservationDetails: ReservationDetail[]
}

export interface ActionResult {
  code: number
  messages: string[]
}
