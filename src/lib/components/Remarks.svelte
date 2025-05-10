<script lang="ts">
	import type { Remark } from "$lib/details";
	import Card from "./Card.svelte";
	import Diel from "./Diel.svelte";

  type RemarksProps = {
    remarks: Remark[]
  };

  let { remarks }: RemarksProps = $props();
</script>

<h2>Remarks</h2>
<Card>

  <div class="remark-cards">
    {#each remarks as { remarkLines, ...remark } }
    <div class="card-container">
      <Card>
        <h3>{remarkLines}</h3>
        <Diel keyvals={remark} />
      </Card>
    </div>
    {/each}
  </div>
</Card>

<style lang="scss">
  .remark-cards {
    // flex-wrap: wrap;
    // display: flex;
    // gap: 1rem;

    vertical-align: text-top;

    .card-container {
      display: inline-block;
      width: max(32%, 25rem);
      overflow-wrap: anywhere;
      margin: 0 1rem 1rem 0;
    }
  }
</style>
