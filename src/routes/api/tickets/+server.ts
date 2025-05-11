import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { reservationClient } from "$lib/server/reservations/reservationClient";
type TicketRequest = {
	env: string;
	ticketNums: string[];
};
export const POST: RequestHandler = async ({ url, request }) => {
	const { env, ticketNums } = (await request.json()) as TicketRequest;

	const result = (await reservationClient(env).getTickets(ticketNums)).ticketDetails;
	return json(result);
};
