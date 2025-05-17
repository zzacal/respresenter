<script lang="ts">
    import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
    import Icon from "./Icon.svelte";
  export let title: string | undefined = undefined;
  export let padding: "none" | undefined = undefined;
  export let icon: IconDefinition | undefined = undefined;
  const  paddingClass = padding ? `padding-${padding}` : "";
</script>

<div class={paddingClass}>
  {#if title || icon}
    <span class="title">
      {#if icon}
        <Icon {icon} />
      {/if}
      {title}
    </span>
  {/if}
  <slot />
</div>

<style lang="scss">
  @use "../../shapes.scss" as shapes;
  @use "../../colors.scss" as colors;
  div {
    background-color: colors.$border-background-color;
    border: 1px solid colors.$border-border-color;
    border-radius: shapes.$border-radius;
    padding: 1rem;
    box-shadow: 1.8px 3.5px 3.5px hsl(0deg 0% 0% / 0.45);
    margin-bottom: 2rem;

    &.padding-none {
      padding: 0;
    }

    .title {
      display: inline-block;
      margin-bottom: 1rem;
    }
  }
</style>
