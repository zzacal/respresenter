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
  let envs: string[] | undefined;

  async function getEnvironments() {
    const response = await fetch("/api/envs");
    envs = await response.json();
  };
  
  async function handleSearch() {
    searching = true;
    if(env && conf) {
      const response = await fetch("/api/reservation/", {
        method: "POST",
        body: JSON.stringify({env, conf}),
        headers: {
          'content-type': 'application/json'
        }
      });
      onResult(await response.json() as ReservationDetail[]);
    }
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

{#if envs !== undefined} 
  <form>
    <auro-select required>
      <span slot="label">Env</span>
      <auro-menu on:auroMenu-selectedOption={(e: any) => env = e.target.optionActive.value}>
        {#each envs as environment}
          <auro-menuoption value="{environment}">{environment}</auro-menuoption>
        {/each}
      </auro-menu>
    </auro-select>
    <CustomInput bordered required placeholder="CONFIRMATION CODE" bind:value={conf}>
      <Slot name="label">CONF CODE</Slot>
      <Slot name="helptext">Enter the confirmation code</Slot>
    </CustomInput>
    
    <div class="button-fix">
      <auro-button 
        loading={searching}
        on:click={handleSearch}
        on:keydown={handleKeypress}
        aria-label="search"
        role="button"
        tabindex="0"
      >
         🔍
      </auro-button>
    </div>
  </form>
{/if}

<style lang="scss">
  form {
    display: flex;
    align-items:start;
    gap: .3rem;
    
    .button-fix {
      padding: .3rem 0;
    }
  }
</style>
