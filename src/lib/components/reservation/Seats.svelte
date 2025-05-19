<script lang="ts">
  import type { Passenger, Seat } from "$lib/details";
  import { faCouch } from "@fortawesome/free-solid-svg-icons";
  import Diel from "../Diel.svelte";
  import CollapsibleCard from "../CollapsibleCard.svelte";
  export let seats: Seat[];
  export let passengers: Passenger[];

  function zip(seat: Seat[], passengers: Passenger[]): [Seat, Passenger | undefined][] {
    return seat.map((s) => [
      s,
      passengers.find((p) => p.nameAssociationId === s.nameAssociationId)
    ]);
  }
</script>

{#each zip(seats, passengers) as [{ seatNumber, nameAssociationId, boardPoint, offPoint, ...seat }, passenger]}
  <CollapsibleCard
    icon={faCouch}
    title={`${seatNumber} ${boardPoint} - ${offPoint} ${passenger?.firstName} ${passenger?.lastName}`}
  >
    <Diel keyvals={{ ...seat }} />
  </CollapsibleCard>
{/each}
