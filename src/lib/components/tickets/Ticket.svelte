<script lang="ts">
  import type { Ticket } from "$lib/tickets";
    import { faCalendarCheck, faCreditCard, faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
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

<CollapsibleCard icon={faCalendarCheck} title={`Ticket - ${originCity} -> ${destinationCity} - ${firstName} ${lastName}`}>
  <Card icon={faMoneyBill1} title="Amount">
      <Diel keyvals={{currencyCode, value}} />
  </Card>
  <Card icon={faCreditCard} title="Card">
    {#each payment as pay}
      <PaymentDetails payment={pay} />
    {/each}
  </Card>
</CollapsibleCard>
