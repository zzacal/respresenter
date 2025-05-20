<script lang="ts">
  import type { Segment } from "$lib/details";
  import Card from "../Card.svelte";
  import Diel from "../Diel.svelte";
  import CollapsibleCard from "../CollapsibleCard.svelte";
  import { faPlane } from "@fortawesome/free-solid-svg-icons";
  type SegmentsProp = {
    segments: Segment[];
  };

  let { segments }: SegmentsProp = $props();
</script>

<h2>Segments</h2>
{#each segments as { departureAirport, arrivalAirport, operatingAirlineShortName, operatingAirlineCode, operatingFlightNumber, operatingClassOfService, seats, hiddenStops, serviceRequests, ...segment }}
  <CollapsibleCard
    icon={faPlane}
    title={`${departureAirport} -> ${arrivalAirport} | ${operatingAirlineShortName} ${operatingAirlineCode}${operatingFlightNumber} | ${operatingClassOfService}`}
  >
    <Diel keyvals={segment} />
  </CollapsibleCard>
{/each}
