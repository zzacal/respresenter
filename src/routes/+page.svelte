<script lang="ts">
  import Passengers from "$lib/components/reservation/Passengers.svelte";
  import SearchForm from "$lib/components/SearchForm.svelte";
  import Segments from "$lib/components/reservation/Segments.svelte";
  import TicketDetails from "$lib/components/tickets/TicketDetails.svelte";
  import type { ReservationDetail } from "$lib/details";
  import type { TicketDetail } from "$lib/tickets";
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
<div class="form-container">
  <SearchForm onReservationResult={handleReservationResult} onTicketsResult={handleTicketResult} />
</div>

{#each details as { segments, passengers }}
  <div class="result">
    <Segments {segments} />
    <Passengers {passengers} />
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
  .form-container {
    text-align: center;
    margin: 3rem auto 1rem auto;
    width: max(20vw, 30rem);
  }

  .result {
    padding: 1rem;
  }
</style>
