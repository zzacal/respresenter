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

    <Card>  
      <h3>{departureAirport} -> {arrivalAirport} | {operatingAirlineShortName} {operatingAirlineCode}{operatingFlightNumber} | {operatingClassOfService}</h3>
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
    </Card>
  {/each}
<style lang="scss">
  .seats {
    display: flex;
  }
</style>