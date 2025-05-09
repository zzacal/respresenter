<script lang="ts">
	import type { BookingDetails } from "$lib/details";
	import Diel from "./Diel.svelte";

  export let data: BookingDetails;
  let {recordLocator, ...rest} = data;
</script>

<div>
  <h2>{recordLocator}</h2>
  <Diel keyvals={rest} />
</div>
