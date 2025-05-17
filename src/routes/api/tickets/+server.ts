import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { reservationClient } from "$lib/server/reservations/reservationClient";
type TicketRequest = {
	env: string;
	ticketNums: string[];
};
export const POST: RequestHandler = async ({ request }) => {
	const { env, ticketNums } = (await request.json()) as Partial<TicketRequest>;
	if(!env || !ticketNums || ticketNums.length < 1) {
		return error(400, "env and ticket numbers required;");
	}
	const response = (await reservationClient(env).getTickets(ticketNums));
	if(!response || !response.ticketDetails) {
		return error(404, ticketNums.join(","))
	}
	return json(response.ticketDetails);
};
