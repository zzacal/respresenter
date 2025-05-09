<script lang="ts">
	import type { Passenger } from "$lib/details";
	import Card from "./Card.svelte";
	import Diel from "./Diel.svelte";

  type PassengersProps = {
    passengers: Passenger[]
  }

  let { passengers }: PassengersProps = $props();

</script>

<h2>Passengers</h2>

{#each passengers as { firstName, lastName, serviceRequests, apisDocuments, ancillaryServices, ...passenger }}
  <Card>
    <h3>{firstName} {lastName}</h3>
    <Diel keyvals={passenger} />
    <h4>Ancillary Services</h4>
    {#each ancillaryServices as service}    
      <Diel keyvals={service} />
    {/each}
    <h4>Service Requests</h4>
    <div class="detail-row">
      {#each serviceRequests as request }
        <Card>
          <Diel keyvals={request} />
        </Card>
      {/each}
    </div>
    <h4>Travel Docs</h4>
    <div class="detail-row">
      {#each apisDocuments.travelDocuments as doc }
        <Card >
          <Diel keyvals={doc} />
        </Card>
      {/each}
    </div>
  </Card>
{/each}

<style lang="scss">
  .detail-row {
    display: flex;
    gap: 1rem
  }
</style>
