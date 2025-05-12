<script lang="ts">
  import type { Ticket } from "$lib/tickets";
  import Card from "../Card.svelte";
  import CollapsibleCard from "../CollapsibleCard.svelte";
  import Diel from "../Diel.svelte";
    import PaymentDetails from "./PaymentDetails.svelte";

  export let ticket: Ticket;
  const {
    amounts: {new: {total: {amount: {currencyCode, value}}}},
    customer: {traveler : {firstName, lastName}},
    details: { originCity, destinationCity},
    history,
    indicators,
    payment,
    relatedDocument,
    taxes,
    ...emdDeets
  } = ticket;
</script>

<CollapsibleCard title={`Ticket - ${originCity} -> ${destinationCity} - ${firstName} ${lastName}`}>
  <Card>
    <h3>Amount</h3>
      <Diel keyvals={{currencyCode, value}} />
  </Card>
  <Card>
    <h3>Card</h3>
    {#each payment as pay}
      <PaymentDetails payment={pay} />
    {/each}
  </Card>
</CollapsibleCard>
