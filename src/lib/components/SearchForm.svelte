<script lang="ts">
  import CustomInput from "$lib/components/CustomInput.svelte";
  import Slot from "$lib/components/Slot.svelte";
  import type { ReservationDetail } from "$lib/details";
  import { onMount } from "svelte";
  import type { TicketDetail } from "$lib/tickets";
  import BigButton from "./BigButton.svelte";
    import type { ChangeEventHandler } from "svelte/elements";

  export let onReservationResult: (result: ReservationDetail[]) => void;
  export let onTicketsResult: (tickets: TicketDetail[]) => void;

  let env: string = "";
  let conf: string = "OWAOCC";
  let searching: boolean | undefined;
  let envs: string[] | undefined;

  async function getEnvironments() {
    const response = await fetch("/api/envs");
    envs = await response.json();
    if (envs && envs.length > 0) {
      env = envs[0];
    }
  }

  async function handleSearch() {
    searching = true;
    if (env && conf) {
      const reservationResponse = await fetch("/api/reservation/", {
        method: "POST",
        body: JSON.stringify({ env, conf }),
        headers: {
          "content-type": "application/json"
        }
      });

      const reservationResult = (await reservationResponse.json()) as ReservationDetail[];
      onReservationResult(reservationResult);

      const ticketNums = reservationResult
        .flatMap((r) => r.ticketingInfo.ticketDetails)
        .map((d) => d.ticketNumber);

      const ticketResponse = await fetch("/api/tickets/", {
        method: "POST",
        body: JSON.stringify({ env, ticketNums }),
        headers: {
          "content-type": "application/json"
        }
      });

      const ticketResult = (await ticketResponse.json()) as TicketDetail[];

      onTicketsResult(ticketResult);
    }
    searching = undefined;
  }

  async function handleKeypress(e: KeyboardEvent) {
    if (e.code === "Enter") {
      await handleSearch();
    }
  }

  const onEnvChange:  ChangeEventHandler<HTMLSelectElement> = ({ currentTarget: {value}}) => {
    env = value;
  }

  onMount(getEnvironments);
</script>

{#if envs !== undefined && envs.length > 0}
  <form>
    <select name="envs" onchange={onEnvChange}>
      {#each envs as environment}
        <option value={environment} selected={env === environment}>{environment}</option>
      {/each}
    </select>

    <CustomInput bordered required placeholder="CONFIRMATION CODE" bind:value={conf}>
      <Slot name="label">CONF CODE</Slot>
      <Slot name="helptext">Enter the confirmation code</Slot>
    </CustomInput>

    <BigButton
      label="Search"
      loading={searching}
      onclick={handleSearch}
      onkeydown={handleKeypress}
    />
  </form>
{/if}

<style lang="scss">
  form {
    display: flex;
    align-items: start;
    gap: 0.3rem;

    select {
      height: 55px;
      padding: 0 1rem;
    }
  }
</style>
