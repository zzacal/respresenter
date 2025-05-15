<script lang="ts">
  import "../app.scss";
</script>

<main>
  <slot></slot>
</main>

<style lang="scss">
  main {
    margin-right: auto;
    margin-left: auto;
    @media screen  and (min-width: 768px) {
      max-width: 720px;;
    }

    @media screen  and (min-width: 1024px) {
      max-width: 960px;      
    }
  };
</style>
