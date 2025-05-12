<script lang="ts">
  import type { TicketDetail } from "$lib/tickets";
  import Emd from "./Emd.svelte";
    import Ticket from "./Ticket.svelte";
  export let details: TicketDetail[];
</script>

{#each details as { ticket, emd, transactionInfo }}
    {#if emd}
      <Emd {emd} />
    {/if}

    {#if ticket}
      <Ticket {ticket} />
    {/if}
{/each}
