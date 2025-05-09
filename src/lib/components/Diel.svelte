<script lang="ts">
  type DielProps = {
    keyvals: {[key: string]: string | number | boolean | Array<string | number | boolean>}
  }
  let {keyvals}: DielProps = $props();

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
    font-size: .8rem;
  }
  dd {
    margin: 0 0 .35rem;
    font-size: 1.2rem;
  }
</style>
