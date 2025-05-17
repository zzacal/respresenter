<script lang="ts">
  import type { Emd } from "$lib/tickets";
    import { faBookmark, faCreditCardAlt, faFileText } from "@fortawesome/free-regular-svg-icons";
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

<CollapsibleCard icon={faFileText} title={`EMD - ${coupons.map((c) => c.fee.description).join(", ")}`}>
  <Card icon={faBookmark} title="Coupons">
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
  <Card icon={faCreditCardAlt} title="Card">
    {#each payment as pay}
    <PaymentDetails payment={pay} />
    {/each}
  </Card>
</CollapsibleCard>
