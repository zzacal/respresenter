<script lang="ts">
	import type { Remark } from "$lib/details";
	import CollapsibleCard from "../CollapsibleCard.svelte";
	import Diel from "../Diel.svelte";

  type RemarksProps = {
    remarks: Remark[]
  };

  let { remarks }: RemarksProps = $props();
</script>

<h2>Remarks</h2>
{#each remarks as { remarkLines, ...remark } }
<div class="card-container">
  <CollapsibleCard title={remarkLines.join(" ")}>
    <Diel keyvals={remark} />
  </CollapsibleCard>
</div>
{/each}

<style lang="scss">
  .card-container {
    margin-bottom: 1rem;
  }
</style>
