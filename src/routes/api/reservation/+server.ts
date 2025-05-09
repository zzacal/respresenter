import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { reservationClient } from '$lib/server/reservations/reservationClient';
type ReservationRequest = {
  conf: string;
}
export const POST: RequestHandler = async ({ url, request }) => {
  const get = reservationClient(
    "https://apis.qa.alaskaair.com",
    "583e90d9aae34511aac85f603bbf0404",
    "mobile");

  const body = await request.json() as ReservationRequest;
  const result = await get(body.conf, true);
  return json(result.reservationDetails);
};
