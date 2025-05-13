<script lang="ts">
	import type { Snippet } from "svelte";
  import Card from "./Card.svelte";

  type CollapsibleCardProps = {
    title: string,
    children?: Snippet
  };

  let { title, children }: CollapsibleCardProps = $props();
</script>

<Card padding="none">
  <details>
    <summary>{title}</summary>
    <div class="body">
      {@render children?.()}
    </div>
  </details>
</Card>

<style lang="scss">
  summary {
    cursor: pointer;
    padding: 1rem;
  }
  .body {
    padding: 0 1rem 1rem;
  }
</style>
