<script lang="ts">
  import type { Payment } from "$lib/tickets";
  import Diel from "../Diel.svelte";

  export let payment: Payment;

  const {
    card,
    total: {
      amount: { decimalPlace, ...amountDetails }
    }
  } = payment;
</script>

<Diel
  keyvals={{
    ...amountDetails,
    maskedCardNumber: card?.maskedCardNumber,
    cardType: card?.cardType
  }}
/>
