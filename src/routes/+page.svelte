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
    import Skeleton from "$lib/components/Skeleton.svelte";
    import Card from "$lib/components/Card.svelte";

  let reservations: ReservationDetail[] = [];
  let reservationIsLoading: boolean = false;

  let tickets: TicketDetail[] = [];
  let isTicketsLoading: boolean = false;

  function handleReservationResult(result: ReservationDetail[]) {
    reservations = result;
  }

  function handleTicketResult(result: TicketDetail[]) {
    tickets = result;
  }
</script>

<h1>Sabr&eacute;</h1>
<SearchForm 
  onReservationResult={handleReservationResult}
  onTicketsResult={handleTicketResult}
  onReservationSearchEvent={(isSearching) => reservationIsLoading = isSearching} 
  onTicketSearchEvent={(isSearching) => isTicketsLoading = isSearching} />

{#if reservationIsLoading}
  <br />
  {#each [1,2,3] as num}    
    <Skeleton style="height: 2.7rem;"/>
    <Card>
      <Skeleton style="width: 40%; height: 1.5rem;"/>
    </Card>
  {/each}
{:else}
  {#each reservations as { segments, passengers, genericServiceRequests, bookingDetails }}
    <BookingDetails details={bookingDetails} />
    <Segments {segments} />
    <Passengers {passengers} />
    <Seats seats={segments.flatMap((s) => s.seats)} {passengers} />
    <ServiceRequests
      genericRequests={genericServiceRequests}
      passengerRequests={passengers.flatMap((p) => p.serviceRequests)}
    />
  {/each}
{/if}

{#if isTicketsLoading}
  <br />
  <Skeleton style="height: 2.7rem;"/>
  <Card>
    <Skeleton style="width: 10%; height: .5rem;"/><br />
    <Skeleton style="width: 41%;"/>
  </Card>
{:else if tickets.length > 0}
  <h2>Tickets</h2>
  <TicketDetails details={tickets} />
{/if}

<style lang="scss">
  h1 {
    text-align: center;
  }
</style>
