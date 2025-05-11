import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getAppSettings } from "../../../lib/server/appsettings";
type ReservationRequest = {
  env: string,
  conf: string;
}
export const GET: RequestHandler = async () => {

  const result = await getAppSettings();
  const envs = Object.keys(result.envs);
  return json(envs);
};
