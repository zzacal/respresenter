import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { reservationClient } from "$lib/server/reservations/reservationClient";
import { log } from "$lib/server/logger";
type TicketRequest = {
	env: string;
	ticketNums: string[];
};
export const POST: RequestHandler = async ({ request }) => {
	const { env, ticketNums } = (await request.json()) as Partial<TicketRequest>;
	if(!env || !ticketNums || ticketNums.length < 1) {
		log.error(`env: ${env}`, `conf: ${JSON.stringify(ticketNums)}`);
		return error(400, "env and ticket numbers required;");
	}
	const response = (await reservationClient(env).getTickets(ticketNums));
	if(!response || !response.ticketDetails) {
		log.error("tickets not found", ...ticketNums);
		return error(404, ticketNums.join(","))
	}
	log.info("tickets found", ...ticketNums);
	return json(response.ticketDetails);
};
