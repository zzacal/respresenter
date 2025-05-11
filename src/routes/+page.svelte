<script lang="ts">
	import BookingDetails from "$lib/components/BookingDetails.svelte";
	import CollapsibleCard from "$lib/components/CollapsibleCard.svelte";
	import CustomInput from "$lib/components/CustomInput.svelte";
	import Nest from "$lib/components/Nest.svelte";
	import Passengers from "$lib/components/Passengers.svelte";
	import Remarks from "$lib/components/Remarks.svelte";
	import Segments from "$lib/components/Segments.svelte";
	import Slot from "$lib/components/Slot.svelte";
	import type { ReservationDetail } from "$lib/details";
  import "@aurodesignsystem/auro-button";

  let conf: string = "OWAOCC";
  let details: ReservationDetail[] = [];
  let searching: boolean | undefined;
  
  async function handleSearch() {
    searching = true;
    const response = await fetch("/api/reservation/", {
      method: "POST",
      body: JSON.stringify({conf}),
			headers: {
				'content-type': 'application/json'
			}
    });
    details = await response.json() as ReservationDetail[];
    searching = undefined;
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
    
    <auro-button 
      loading={searching}
      on:click={handleSearch}
      on:keydown={handleKeypress}
      aria-label="search"
      role="button"
      tabindex="0"
    >
      Search
      <auro-icon customColor category="in-flight" name="wifi" slot="icon"></auro-icon>
    </auro-button>  
  </form>
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
