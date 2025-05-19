<script lang="ts">
  import CustomInput from "$lib/components/CustomInput.svelte";
  import Slot from "$lib/components/Slot.svelte";
  import type { ReservationDetail } from "$lib/details";
  import { onMount } from "svelte";
  import type { TicketDetail } from "$lib/tickets";
  import BigButton from "./BigButton.svelte";
  import type { ChangeEventHandler } from "svelte/elements";
  import { evaluate } from "$lib/http-response-helpers";

  export let onReservationResult: (result: ReservationDetail[]) => void;
  export let onTicketsResult: (tickets: TicketDetail[]) => void;

  export let onReservationSearchEvent: ((isSearching: boolean) => void) | undefined = undefined;
  export let onTicketSearchEvent: ((isSearching: boolean) => void) | undefined = undefined;

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
    onReservationResult([]);
    onTicketsResult([]);
    searching = true;
    if (env && conf) {
      onReservationSearchEvent && onReservationSearchEvent(true);
      const reservationResponse = await fetch("/api/reservation/", {
        method: "POST",
        body: JSON.stringify({ env, conf }),
        headers: {
          "content-type": "application/json"
        }
      });
      onReservationSearchEvent && onReservationSearchEvent(false);

      const reservationResult = await evaluate<ReservationDetail[]>(await reservationResponse);
      if (reservationResult.success) {
        onReservationResult(reservationResult.body);
        const ticketNums = reservationResult.body
          .flatMap((r) => r.ticketingInfo.ticketDetails)
          .map((d) => d.ticketNumber);
        
        onTicketSearchEvent && onTicketSearchEvent(true);
        const ticketResponse = await fetch("/api/tickets/", {
          method: "POST",
          body: JSON.stringify({ env, ticketNums }),
          headers: {
            "content-type": "application/json"
          }
        });
        onTicketSearchEvent && onTicketSearchEvent(false);

        const ticketResult = await evaluate<TicketDetail[]>(ticketResponse);
        if (ticketResult.success) {
          onTicketsResult(ticketResult.body);
        }
      }
    }
    searching = undefined;
  }

  async function handleKeypress(e: KeyboardEvent) {
    if (e.code === "Enter") {
      await handleSearch();
    }
  }

  const onEnvChange: ChangeEventHandler<HTMLSelectElement> = ({ currentTarget: { value } }) => {
    env = value;
  };

  onMount(getEnvironments);
</script>

{#if envs !== undefined && envs.length > 0}
  <form>
    <select name="envs" onchange={onEnvChange}>
      {#each envs as environment}
        <option value={environment} selected={env === environment}>{environment}</option>
      {/each}
    </select>

    <CustomInput
      required
      placeholder="CONFIRMATION CODE"
      bind:value={conf}
      onkeydown={handleKeypress}
    >
      <Slot name="label">CONF CODE</Slot>
      <Slot name="helptext">Enter the confirmation code</Slot>
    </CustomInput>

    <BigButton
      label="Search"
      loading={searching}
      disabled={searching}
      onclick={handleSearch}
      onkeydown={handleKeypress}
    />
  </form>
{/if}

<style lang="scss">
  @use "../../colors.scss" as colors;
  @use "../../shapes.scss" as shapes;

  form {
    display: flex;
    justify-content: center;
    gap: 0.3rem;

    select {
      height: 55px;
      padding: 0 1rem;
      border-radius: shapes.$border-radius;
      background-color: colors.$input-background-color;
      border: 1px solid colors.$input-border-color;
    }
  }
</style>
