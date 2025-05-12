<script lang="ts">
	import type { Segment } from "$lib/details";
	import Card from "../Card.svelte";
	import Diel from "../Diel.svelte";
	import CollapsibleCard from "../CollapsibleCard.svelte";

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

    <CollapsibleCard title={`${departureAirport} -> ${arrivalAirport} | ${operatingAirlineShortName} ${operatingAirlineCode}${operatingFlightNumber} | ${operatingClassOfService}`}>
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
    </CollapsibleCard>
  {/each}
<style lang="scss">
  .seats {
    display: flex;
  }
</style>