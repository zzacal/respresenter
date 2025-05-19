import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { reservationClient } from "$lib/server/reservations/reservationClient";
import { log } from "$lib/server/logger";
type ReservationRequest = {
	env: string;
	conf: string;
};
export const POST: RequestHandler = async ({ request }) => {
	const { env, conf } = (await request.json()) as Partial<ReservationRequest>;

	if(!env || !conf) {
		log.error(`env: ${env}`, `conf: ${conf}`)
		return error(400, {message: "env and conf are required."})
	} else {
		const result = await reservationClient(env).getReservation(conf, true);

		if(!result || !result.reservationDetails) {
			log.error("reservation not found", conf);
			return error(404, {message: conf ?? ""});
		} else {
			log.info("reservation found", conf);
			return json(result.reservationDetails);
		}
	}
};
