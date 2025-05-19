<script lang="ts">
  import Passengers from "$lib/components/reservation/Passengers.svelte";
  import SearchForm from "$lib/components/SearchForm.svelte";
  import Segments from "$lib/components/reservation/Segments.svelte";
  import TicketDetails from "$lib/components/tickets/TicketDetails.svelte";
  import type { ReservationDetail } from "$lib/details";
  import type { TicketDetail } from "$lib/tickets";
  import ServiceRequests from "$lib/components/reservation/ServiceRequests.svelte";
  import BookingDetails from "$lib/components/reservation/BookingDetails.svelte";
  import Seats from "$lib/components/reservation/Seats.svelte";
  let details: ReservationDetail[] = [];

  let tickets: TicketDetail[];

  function handleReservationResult(result: ReservationDetail[]) {
    details = result;
  }

  function handleTicketResult(result: TicketDetail[]) {
    tickets = result;
  }
</script>

<h1>Sabr&eacute;</h1>
<SearchForm onReservationResult={handleReservationResult} onTicketsResult={handleTicketResult} />

{#each details as { segments, passengers, genericServiceRequests, bookingDetails }}
  <BookingDetails details={bookingDetails} />
  <Segments {segments} />
  <Passengers {passengers} />
  <Seats seats={segments.flatMap((s) => s.seats)} {passengers} />
  <ServiceRequests
    genericRequests={genericServiceRequests}
    passengerRequests={passengers.flatMap((p) => p.serviceRequests)}
  />
{/each}

{#if tickets && tickets.length > 1}
  <h2>Tickets</h2>
  <TicketDetails details={tickets} />
{/if}

<style lang="scss">
  h1 {
    text-align: center;
  }
</style>
