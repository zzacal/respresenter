<script lang="ts">
  type DielValueable = string | number | boolean | null | undefined;
  type Dielable = { [key: string]: DielValueable | Array<DielValueable> };
  type DielProps = { keyvals: Dielable; };
  let { keyvals }: DielProps = $props();

  function toCapitalizedWords(name: string) {
    var words = name.match(/[A-Za-z][a-z]*/g) || [];

    return words.map(capitalize).join(" ");
  }

  function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  }
</script>

<dl>
  {#each Object.entries(keyvals) as [key, val]}
    <dt>{toCapitalizedWords(key)}</dt>
    <dd>
      {#if Array.isArray(val)}
        {#each val as ival, i}
          {ival}
          <br />
        {/each}
      {:else}
        {val}
      {/if}
    </dd>
  {/each}
</dl>

<style lang="scss">
  dt {
    font-size: 0.8rem;
  }
  dd {
    margin: 0 0 0.35rem;
    font-size: 1.2rem;
  }
</style>
