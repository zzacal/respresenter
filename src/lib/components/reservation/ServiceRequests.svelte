<script lang="ts">
  import type { GenericServiceRequest, ServiceRequest } from "$lib/details";
    import { faComments, faIdBadge } from "@fortawesome/free-regular-svg-icons";
    import CollapsibleCard from "../CollapsibleCard.svelte";
    import Diel from "../Diel.svelte";

  export let genericRequests: GenericServiceRequest[];
  export let passengerRequests:  ServiceRequest[];
</script>

<h2>Generic Service Requests</h2>
{#each genericRequests as request }
  <CollapsibleCard icon={faComments} title={`${request.type} - ${request.freeText}`}>
    <Diel keyvals={request} />
  </CollapsibleCard>
{/each}
<h2>Passenger Service Requests</h2>
{#each passengerRequests as request }
  <CollapsibleCard icon={faIdBadge} title={`${request.type} - ${request.freeText}`}>
    <Diel keyvals={request} />
  </CollapsibleCard>
{/each}