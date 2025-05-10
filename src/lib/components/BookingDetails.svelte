<script lang="ts">
	import type { BookingDetails } from "$lib/details";
	import Card from "./Card.svelte";
	import CollapsibleCard from "./CollapsibleCard.svelte";
	import Diel from "./Diel.svelte";

  export let data: BookingDetails;
  let {recordLocator, ...rest} = data;
</script>

<h2>Itinerary</h2>
<CollapsibleCard title={recordLocator}>
  <Diel keyvals={rest} />
</CollapsibleCard>
