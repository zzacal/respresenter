import type { ReservationDetail } from "$lib/details";

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

    return await response.json();
};

export interface ReservationResponse {
  actionResult: ActionResult
  reservationDetails: ReservationDetail[]
}

export interface ActionResult {
  code: number
  messages: string[]
}
