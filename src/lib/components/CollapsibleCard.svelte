<script lang="ts">
	import type { Snippet } from "svelte";
  import Card from "./Card.svelte";

  type CollapsibleCardProps = {
    title: string,
    children?: Snippet
  };

  let { title, children }: CollapsibleCardProps = $props();
</script>

<Card>
  <details>
    <summary>{title}</summary>
    <div class="body">
      {@render children?.()}
    </div>
  </details>
</Card>
