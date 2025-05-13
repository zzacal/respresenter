<script lang="ts">
  import Passengers from "$lib/components/reservation/Passengers.svelte";
  import SearchForm from "$lib/components/SearchForm.svelte";
  import Segments from "$lib/components/reservation/Segments.svelte";
  import TicketDetails from "$lib/components/tickets/TicketDetails.svelte";
  import type { ReservationDetail } from "$lib/details";
  import type { TicketDetail } from "$lib/tickets";
    import ServiceRequests from "$lib/components/reservation/ServiceRequests.svelte";
  let details: ReservationDetail[] = [];

  let tickets: TicketDetail[];

  function handleReservationResult(result: ReservationDetail[]) {
    details = result;
  }

  function handleTicketResult(result: TicketDetail[]) {
    tickets = result;
  }
</script>

<h1>Reservation Search</h1>
<SearchForm onReservationResult={handleReservationResult} onTicketsResult={handleTicketResult} />

{#each details as { segments, passengers, genericServiceRequests }}
  <div class="result">
    <Segments {segments} />
    <Passengers {passengers} />
    <ServiceRequests genericRequests={genericServiceRequests} passengerRequests={passengers.flatMap(p => p.serviceRequests)}/>
    <!-- <CollapsibleCard title={`Itinerary - ${bookingDetails.recordLocator}`}>
      <BookingDetails data={bookingDetails} />
      <Remarks {remarks} />

      <h2>Extra Info</h2>
      <CollapsibleCard title={"Remainder"}>
        <Nest value={detail} />
      </CollapsibleCard>
    </CollapsibleCard> -->
  </div>
{/each}

{#if tickets}
  <div class="result">
    <h2>Tickets</h2>
    <TicketDetails details={tickets} />
  </div>
{/if}

<style lang="scss">
  h1 {
    text-align: center;
  }
  .result {
    padding: 1rem;
  }
</style>
