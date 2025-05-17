<script lang="ts">
  import type { Passenger } from "$lib/details";
  import CollapsibleCard from "../CollapsibleCard.svelte";
  import Diel from "../Diel.svelte";
  import { faUser } from "@fortawesome/free-regular-svg-icons";

  type PassengersProps = {
    passengers: Passenger[];
  };
  

  let { passengers }: PassengersProps = $props();
</script>

<h2>Passengers</h2>

{#each passengers as { firstName, lastName, serviceRequests, apisDocuments, ancillaryServices, loyaltyInfo, ...passenger }}
  <CollapsibleCard title={`${firstName} ${lastName}`} icon={faUser}>
    <Diel keyvals={passenger} />
    <h3>Loyalty Info</h3>
    {#each loyaltyInfo as loyalty}
      <Diel keyvals={loyalty} />
    {/each}
    <h3>Ancillary Services</h3>
    {#each ancillaryServices as service}
      <Diel keyvals={service} />
    {/each}
  </CollapsibleCard>
{/each}
