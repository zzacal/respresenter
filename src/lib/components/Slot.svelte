<script lang="ts">
	import type { Snippet } from "svelte";

  let {name, children}: {name: string, children?: Snippet} = $props();
</script>

<span {...({ slot: name } as any)}>
  {@render children?.()}
</span>