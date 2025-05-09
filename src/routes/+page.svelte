<script lang="ts">
	import Nest from "$lib/components/Nest.svelte";
	import type { ReservationDetail } from "$lib/details";

  let conf: string = "QWUGCS";
  let details: ReservationDetail[] = [];
  
  async function handleSearch() {
    const response = await fetch("/api/reservation/", {
      method: "POST",
      body: JSON.stringify({conf}),
			headers: {
				'content-type': 'application/json'
			}
    });
    details = await response.json() as ReservationDetail[];
  }
</script>
<form>
  Conirmation Code <br />
  <input type="text" bind:value={conf}/> 
  <button type="submit" on:click={handleSearch}>🔍</button>
</form>

{#each details as detail}
  <div class="result">
    <Nest value={detail}/>
  </div>
{/each}

<style lang="scss">
  form {
    text-align: center;
    margin: 1rem 0;
  }
  .result {
    background-color: bbb;
    border: 1px solid black;
    border-radius: 1rem;
    padding: .5rem .5rem .5rem 0;
  }
</style>
