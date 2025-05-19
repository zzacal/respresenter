<script lang="ts">
  import type { KeyboardEventHandler, MouseEventHandler } from "svelte/elements";

  export let disabled: boolean | undefined = undefined;
  export let label: string;
  export let loading: boolean | undefined;
  export let onclick: MouseEventHandler<EventTarget>;
  export let onkeydown: KeyboardEventHandler<EventTarget>;
</script>

<button type="button" {onclick} {onkeydown} {disabled} class={loading ? "loading" : ""}
  >{label}</button
>

<style lang="scss">
  @use "../../colors.scss" as colors;
  @use "../../shapes.scss" as shapes;

  button {
    position: relative;
    cursor: pointer;
    height: 55px;
    padding: 0 2rem;
    border-radius: shapes.$border-radius;
    color: colors.$button-font-color;
    background-color: colors.$button-background-color;
    border-color: colors.$button-border-color;

    &.loading {
      color: transparent !important;
      user-select: none;

      &::after {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        border: 4px solid transparent;
        border-top-color: #ffffff;
        border-radius: 50%;
        animation: button-loading-spinner 1s ease infinite;
      }
    }

    &[disabled] {
      color: colors.$button-disabled-font-color;
      background-color: colors.$button-disabled-background-color;
      border-color: colors.$button-disabled-border-color;
    }

    @keyframes button-loading-spinner {
      from {
        transform: rotate(0turn);
      }

      to {
        transform: rotate(1turn);
      }
    }
  }
</style>
