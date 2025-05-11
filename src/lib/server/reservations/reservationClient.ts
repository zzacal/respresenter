import type { ReservationDetail } from "$lib/details";
import fs from "fs";
import { getAppSettings } from "../appsettings";

export const reservationClient = (env: string) => async (conf: string, isDcsIncluded: boolean): Promise<ReservationResponse> => {
  const settings = await getAppSettings();
  const {baseUrl, key, appid} = (settings).envs[env].apim;
  const url = `${baseUrl}/aag/3/guestServices/reservations/reservation/${conf}?withDCSPassengerData=${isDcsIncluded}`;
  const response = await fetch(
    url, 
    {
      headers: {
        "Ocp-Apim-Subscription-Key": key,
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
