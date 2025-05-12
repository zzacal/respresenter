<script lang="ts">
  import type { KeyboardEventHandler, MouseEventHandler } from "svelte/elements";

  export let label: string;
  export let loading: boolean | undefined;
  export let onclick: MouseEventHandler<EventTarget>;
  export let onkeydown: KeyboardEventHandler<EventTarget>;
</script>

<button type="button" {onclick} {onkeydown} class={loading ? "loading" : ""}>{label}</button>

<style lang="scss">
  @import "@aurodesignsystem/design-tokens/dist/alaska/SCSSVariables--alaska.scss";
  button {
    position: relative;
    cursor: pointer;
    height: 55px;
    padding: 0 2rem;
    border-radius: 0.3rem;
    color: $ds-advanced-color-button-primary-text;
    background-color: $ds-advanced-color-button-primary-background;
    border-color: $ds-advanced-color-button-primary-border;
    
    &.loading{
      color: $ds-advanced-color-button-primary-background;

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
    }}
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
