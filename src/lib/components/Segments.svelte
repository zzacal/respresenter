<script lang="ts">
	import type { Segment } from "$lib/details";
	import { json } from "@sveltejs/kit";
	import Nest from "./Nest.svelte";
	import Card from "./Card.svelte";
	import Diel from "./Diel.svelte";

  type SegmentsProp = {
    segments: Segment[]
  }

  let {segments}: SegmentsProp = $props();

</script>

<h2>Segments</h2>
{#each segments as 
  {
    id, 
    departureAirport, 
    arrivalAirport, 
    operatingAirlineShortName, 
    operatingAirlineCode, 
    operatingFlightNumber, 
    operatingClassOfService, 
    seats,
    hiddenStops,
    serviceRequests,
    ...segment}
  }

  <h3>{departureAirport} -> {arrivalAirport} | {operatingAirlineShortName} {operatingAirlineCode}{operatingFlightNumber} | {operatingClassOfService}</h3>
  <strong>ID: {id}</strong>
  <Diel keyvals={segment}/>

  <div class="seats">
    {#each seats as {seatNumber, ...seat}}
    <div class="seat">
      <Card>
        <h5>{seatNumber}</h5>
        <Diel keyvals={seat}/>
      </Card>
    </div>
    {/each}
  </div>
{/each}

<style lang="scss">
  .seats {
    display: flex;
  }
</style>