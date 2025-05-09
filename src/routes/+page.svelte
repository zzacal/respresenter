<script lang="ts">
	import BookingDetails from "$lib/components/BookingDetails.svelte";
	import Card from "$lib/components/Card.svelte";
	import CustomInput from "$lib/components/CustomInput.svelte";
	import Nest from "$lib/components/Nest.svelte";
	import Passengers from "$lib/components/Passengers.svelte";
	import Segments from "$lib/components/Segments.svelte";
	import Slot from "$lib/components/Slot.svelte";
	import type { ReservationDetail } from "$lib/details";
  import "@aurodesignsystem/auro-button";

  let conf: string = "PRRJVR";
  let details: ReservationDetail[] = [];
  
  async function handleSearch() {
    const response = await fetch("/api/reservation/", {
      method: "POST",
      body: JSON.stringify({conf}),
			headers: {
				'content-type': 'application/json'
			}
    });
    details = await response.json() as ReservationDetail[];
  }

  async function handleKeypress(e: KeyboardEvent) {
    console.log(e);
    if(e.code === "Enter") {
      await handleSearch()
    }
  }

</script>

<h1>Reservation Search</h1>

<div class="form-container">
  <form>
    <CustomInput bordered required placeholder="CONFIRMATION CODE" bind:value={conf} >
      <Slot name="label">CONF CODE</Slot>
      <Slot name="helptext">Enter the confirmation code</Slot>
    </CustomInput>
    
    <auro-button aria-label="wifi" role="button" tabindex="0" on:click={handleSearch} on:keydown={handleKeypress}>
      Search
      <auro-icon customColor category="in-flight" name="wifi" slot="icon"></auro-icon>
    </auro-button>  
  </form>
</div>

{#each details as {bookingDetails, segments, passengers, ...detail}}
<div class="result">
  <div class="card-row">
      <BookingDetails data={bookingDetails} />
  </div>

  <div class="card-row">
      <Segments segments={segments}/>
  </div>

  <div class="card-row">
      <Passengers passengers={passengers} />
  </div>

  <Card>
    <Nest value={detail}/>
  </Card>
</div>
{/each}

<style lang="scss">
  h1 {
    text-align: center;
  }
  .form-container {
    text-align: center;
    margin: 3rem 0 1rem;
    form {
      display: inline-block;
    }
  }

  .result {
    padding: 1rem;

    .card-row {
      margin-bottom: 2rem;
    }
  }
</style>
