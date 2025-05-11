<script lang="ts">
	import BookingDetails from "$lib/components/BookingDetails.svelte";
	import CollapsibleCard from "$lib/components/CollapsibleCard.svelte";
	import Nest from "$lib/components/Nest.svelte";
	import Passengers from "$lib/components/Passengers.svelte";
	import Remarks from "$lib/components/Remarks.svelte";
	import SearchForm from "$lib/components/SearchForm.svelte";
	import Segments from "$lib/components/Segments.svelte";
	import type { ReservationDetail } from "$lib/details";
  import "@aurodesignsystem/auro-button";
  let details: ReservationDetail[] = [];
  function handleResult(result: ReservationDetail[]){
    details = result
  };
</script>

<h1>Reservation Search</h1>
<div class="form-container">
  <SearchForm onResult={handleResult} />
</div>

{#each details as {bookingDetails, segments, passengers, remarks, ...detail}}
<div class="result">
    <BookingDetails data={bookingDetails} />
    <Segments segments={segments}/>
    <Passengers passengers={passengers} />
    <Remarks remarks={remarks} />

    <h2>Extra Info</h2>
    <CollapsibleCard title={"Remainder"}>
      <Nest value={detail}/>
    </CollapsibleCard>
</div>
{/each}

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

    .card-row {
      margin-bottom: 2rem;
    }
  }
</style>
