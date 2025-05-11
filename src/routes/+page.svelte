<script lang="ts">
  import BookingDetails from "$lib/components/BookingDetails.svelte";
  import CollapsibleCard from "$lib/components/CollapsibleCard.svelte";
  import Nest from "$lib/components/Nest.svelte";
  import Passengers from "$lib/components/Passengers.svelte";
  import Remarks from "$lib/components/Remarks.svelte";
  import SearchForm from "$lib/components/SearchForm.svelte";
  import Segments from "$lib/components/Segments.svelte";
  import TicketDetails from "$lib/components/TicketDetails.svelte";
  import type { ReservationDetail } from "$lib/details";
  import type { TicketDetail } from "$lib/tickets";
  import "@aurodesignsystem/auro-button";
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

{#each details as { bookingDetails, segments, passengers, remarks, ...detail }}
  <div class="result">
    <BookingDetails data={bookingDetails} />
    <Segments {segments} />
    <Passengers {passengers} />
    <Remarks {remarks} />

    <h2>Extra Info</h2>
    <CollapsibleCard title={"Remainder"}>
      <Nest value={detail} />
    </CollapsibleCard>
  </div>
{/each}

{#if tickets}
  <div class="result">
    <h2>Tickets</h2>
    <CollapsibleCard title={"Tickets"}>
      <TicketDetails details={tickets} />
    </CollapsibleCard>
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
