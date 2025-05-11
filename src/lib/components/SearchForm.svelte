<script lang="ts">
	import CustomInput from "$lib/components/CustomInput.svelte";
	import Slot from "$lib/components/Slot.svelte";
	import type { ReservationDetail } from "$lib/details";
  import "@aurodesignsystem/auro-button";
  import '@aurodesignsystem/auro-formkit/auro-select';
  import '@aurodesignsystem/auro-formkit/auro-menu';
	import { onMount } from "svelte";

  export let onResult: (result: ReservationDetail[]) => void;

  let env: string = "";
  let conf: string = "OWAOCC";
  let searching: boolean | undefined;
  let envs: string[];

  async function getEnvironments() {
    const response = await fetch("/api/envs");
    envs = await response.json();
  };
  
  async function handleSearch() {
    searching = true;
    const response = await fetch("/api/reservation/", {
      method: "POST",
      body: JSON.stringify({env: "qa", conf}),
			headers: {
				'content-type': 'application/json'
			}
    });
    onResult(await response.json() as ReservationDetail[]);
    searching = undefined;
  }

  async function handleKeypress(e: KeyboardEvent) {
    console.log(e);
    if(e.code === "Enter") {
      await handleSearch()
    }
  }

  onMount(getEnvironments);
</script>

<form>
  <auro-select required>
    <span slot="bib.fullscreen.headline">Bib Headline</span>
    <span slot="label">Environment</span>
    <auro-menu on:auroMenu-selectedOption={(e: any) => env = e.target.optionActive.value}>
      {#each envs as environment, i}
        <auro-menuoption value="{environment}">{environment}</auro-menuoption>
      {/each}
    </auro-menu>
  </auro-select>
  <CustomInput bordered required placeholder="CONFIRMATION CODE" bind:value={conf} >
    <Slot name="label">CONF CODE</Slot>
    <Slot name="helptext">Enter the confirmation code</Slot>
  </CustomInput>
  
  <auro-button 
    loading={searching}
    on:click={handleSearch}
    on:keydown={handleKeypress}
    aria-label="search"
    role="button"
    tabindex="0"
  >
    Search
    <auro-icon customColor category="in-flight" name="wifi" slot="icon"></auro-icon>
  </auro-button>  
</form>
