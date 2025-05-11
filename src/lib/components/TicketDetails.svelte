<script lang="ts">
  import type { TicketDetail } from "$lib/tickets";
  import Card from "./Card.svelte";
    import CollapsibleCard from "./CollapsibleCard.svelte";
  import Diel from "./Diel.svelte";
    import Nest from "./Nest.svelte";
  export let details: TicketDetail[];
</script>

{#each details as { agent: {session, ticketingProvider, ...agentDetails}, ticket, emd, transactionInfo, ...detail }}
  <Card>
    {#if emd}
    <!-- {JSON.stringify(emd)} -->
    {@const {amounts, customers, details, coupons, history, indicators, payment, relatedDocument, taxes, ...emdDeets} = emd}
    <CollapsibleCard title="EMD">
      <Nest value={amounts} />
      <Diel keyvals={emdDeets} />
    </CollapsibleCard>
    {/if}
    
    <CollapsibleCard title={`Agent ${ticketingProvider.name}`}>
      <CollapsibleCard title={`Ticketing Provider ${ticketingProvider.name}`}>
        <Diel keyvals={ticketingProvider} />
      </CollapsibleCard>
      <CollapsibleCard title={`Agent Details {${agentDetails.companyName}}`}>
        <Diel keyvals={agentDetails} />
      </CollapsibleCard>
      <CollapsibleCard title={`session`}>
        <Diel keyvals={session} />
      </CollapsibleCard>
    </CollapsibleCard>
    
    <CollapsibleCard title="Other Information">
      <Diel keyvals={detail} />
    </CollapsibleCard>
  </Card>
{/each}
<!-- <Card>
  {JSON.stringify(details)}
</Card> -->