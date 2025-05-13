<script lang="ts">
  export let padding: "none" | undefined = undefined;
  const  paddingClass = padding ? `padding-${padding}` : "";
</script>

<div class={paddingClass}><slot /></div>

<style lang="scss">
  @use "../../shapes.scss" as shapes;
  div {
    background-color: #fff;
    border-radius: shapes.$border-radius;
    padding: 1rem;
    box-shadow: 1.8px 3.5px 3.5px hsl(0deg 0% 0% / 0.45);
    margin-bottom: 2rem;

    &.padding-none {
      padding: 0;
    }
  }
</style>
