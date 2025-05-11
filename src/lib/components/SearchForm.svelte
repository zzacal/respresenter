<script lang="ts">
	import CustomInput from "$lib/components/CustomInput.svelte";
	import Slot from "$lib/components/Slot.svelte";
	import type { ReservationDetail } from "$lib/details";
  import "@aurodesignsystem/auro-button";
  import '@aurodesignsystem/auro-formkit/auro-select';
  import '@aurodesignsystem/auro-formkit/auro-menu';
	import { onMount } from "svelte";

  export let onReservationResult: (result: ReservationDetail[]) => void;
  export let onTicketsResult: (tickets: string) => void;

  let env: string = "";
  let conf: string = "OWAOCC";
  let searching: boolean | undefined;
  let envs: string[] | undefined;

  async function getEnvironments() {
    const response = await fetch("/api/envs");
    envs = await response.json();
    if(envs && envs.length > 0) {
      env = envs[0];
    }
  };
  
  async function handleSearch() {
    searching = true;
    if(env && conf) {
      const reservationResponse = await fetch("/api/reservation/", {
        method: "POST",
        body: JSON.stringify({env, conf}),
        headers: {
          'content-type': 'application/json'
        }
      });

      const reservationResult = await reservationResponse.json() as ReservationDetail[];
      onReservationResult(reservationResult);

      const ticketNums = reservationResult.flatMap(r => r.ticketingInfo.ticketDetails).map(d => d.ticketNumber);

      const ticketResponse = await fetch("/api/tickets/", {
        method: "POST",
        body: JSON.stringify({env, ticketNums}),
        headers: {
          'content-type': 'application/json'
        }
      });

      const ticketResult = await ticketResponse.json() as string;

      onTicketsResult(ticketResult);
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

{#if envs !== undefined && envs.length > 0} 
  <form>
    <auro-select required>
      <span slot="label">Env</span>
      <auro-menu on:auroMenu-selectedOption={(e: any) => env = e.target.optionActive.value} value={[envs[0]]}>
        {#each envs as environment}
          <auro-menuoption value="{environment}" selected>{environment}</auro-menuoption>
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
