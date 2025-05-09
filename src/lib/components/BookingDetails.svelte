<script lang="ts">
	import type { BookingDetails } from "$lib/details";
	import Card from "./Card.svelte";
	import Diel from "./Diel.svelte";

  export let data: BookingDetails;
  let {recordLocator, ...rest} = data;
</script>

<h2>{recordLocator}</h2>
<Card>
  <Diel keyvals={rest} />
</Card>
