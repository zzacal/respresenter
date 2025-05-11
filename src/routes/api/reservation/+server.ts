import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { reservationClient } from '$lib/server/reservations/reservationClient';
type ReservationRequest = {
  env: string,
  conf: string;
}
export const POST: RequestHandler = async ({ url, request }) => {
  const {env, conf} = await request.json() as ReservationRequest;
  const get = reservationClient(env);

  const result = await get(conf, true);
  return json(result.reservationDetails);
};
