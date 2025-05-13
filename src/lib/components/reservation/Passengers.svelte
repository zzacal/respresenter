<script lang="ts">
	import type { Passenger } from "$lib/details";
	import CollapsibleCard from "../CollapsibleCard.svelte";
	import Diel from "../Diel.svelte";

  type PassengersProps = {
    passengers: Passenger[]
  }

  let { passengers }: PassengersProps = $props();

</script>

<h2>Passengers</h2>

{#each passengers as { firstName, lastName, serviceRequests, apisDocuments, ancillaryServices, ...passenger }}
  <CollapsibleCard title={`${firstName} ${lastName}`}>
    <Diel keyvals={passenger} />
    <h4>Ancillary Services</h4>
    {#each ancillaryServices as service}    
      <Diel keyvals={service} />
    {/each}
  </CollapsibleCard>
{/each}
