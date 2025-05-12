<script lang="ts">
  import type { Emd } from "$lib/tickets";
  import Card from "../Card.svelte";
  import CollapsibleCard from "../CollapsibleCard.svelte";
  import Diel from "../Diel.svelte";
    import PaymentDetails from "./PaymentDetails.svelte";

  export let emd: Emd;
  const {
    amounts,
    customers,
    details,
    coupons,
    history,
    indicators,
    payment,
    relatedDocument,
    taxes,
    ...emdDeets
  } = emd;
</script>

<CollapsibleCard title={`EMD - ${coupons.map((c) => c.fee.description).join(", ")}`}>
  <Card>
    <h3>Coupons</h3>
    {#each coupons as coupon}
      {@const {
        fee: {
          description,
          total: { amount: {currencyCode, value } }
        }
      } = coupon}
      <Diel keyvals={{ description, currencyCode, value }} />
    {/each}
  </Card>
  <Card>
    <h3>Card</h3>
    {#each payment as pay}
    <PaymentDetails payment={pay} />
    {/each}
  </Card>
</CollapsibleCard>
