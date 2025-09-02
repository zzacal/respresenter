<script lang="ts">
  export let type: "ERROR" | "WARNING" | "INFO"
  export let message: string;
</script>

<div class={`alert ${type}`}>
  {message}
</div>

<style lang="scss">
  @use "../../shapes.scss" as shapes;
  @use "../../colors.scss" as colors;

  .alert {
    background-color: colors.$border-background-color;
    padding: 1rem;
    border: 1px solid black;
    border-radius: shapes.$border-radius;

    &.ERROR {
      border-color: colors.$danger;
      padding-left: 3rem;
      position: relative;
      &::before {
        content: "🛑";
        left:.8rem;
        top: .65rem;
        position: absolute;
      }
    }
  }
</style>
