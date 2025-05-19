<script lang="ts">
	import type { BookingDetails } from "$lib/details";
    import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
	import CollapsibleCard from "../CollapsibleCard.svelte";
	import Diel from "../Diel.svelte";

  export let details: BookingDetails;
  let {recordLocator, ...rest} = details;
</script>

<h2>Booking Details</h2>
<CollapsibleCard icon={faCalendarCheck} title={recordLocator}>
  <Diel keyvals={rest} />
</CollapsibleCard>
