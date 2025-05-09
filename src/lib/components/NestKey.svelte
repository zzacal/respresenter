<script lang="ts">
  export let label: string;
</script>

{#if label}
  <span>{label}</span>
{/if}

<style lang="scss">
  span {
    font-weight: bold;
  }
</style>
