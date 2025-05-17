<script lang="ts">
  import Card from "./Card.svelte";
  import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
  import Icon from "./Icon.svelte";
  import type { Snippet } from "svelte";

  type CollapsibleCardProps = {
    title: string;
    icon?: IconDefinition;
    children?: Snippet;
  };

  let { title, icon, children }: CollapsibleCardProps = $props();
</script>

<Card padding="none">
  <details>
    <summary>
      {#if icon}
        <Icon {icon} />
      {/if}
      {title}
    </summary>
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
