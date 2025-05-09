<script lang="ts">
	import NestKey from "./NestKey.svelte";

  export let key: string = "";
  export let value: Array<object | unknown> | object | unknown;
</script>

{#if value && Array.isArray(value)}
  <NestKey label={key} />
  {#each value as v}
    <svelte:self value={v}></svelte:self>
  {/each}
{:else if value && typeof value === "object"}
  <NestKey label={key} />
  <div class="obj">
    {#each Object.entries(value) as [k, v] }
      <svelte:self key={k} value={v}></svelte:self>
    {/each}
  </div>
{:else}
  <div><NestKey label={key} /> <span>{value}</span></div>
{/if}

<style lang="scss">
  .obj {
    padding-left: 1rem;
  }
</style>
