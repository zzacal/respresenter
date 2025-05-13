<script lang="ts">
	import type { Snippet } from 'svelte';
  type InputProps =  {
    required?: boolean, 
    bordered?: boolean,
    placeholder?: string,
    value?: string,
    children?: Snippet 
  }
  
  let { value = $bindable(), children, bordered, placeholder, required }: InputProps = $props();
  const blurHandler = (e: any) => {
    value = e.target.value;
  }
</script>
<input type="text" placeholder={placeholder} required={required} value={value} onblur={blurHandler} />

<style lang="scss">
  @use "../../colors.scss" as colors;
  @use "../../shapes.scss" as shapes;

  input {
    line-height: 53px;
    border: 1px solid colors.$input-border-color;
    border-radius: shapes.$border-radius;
    padding: 0 1rem;
  }
</style>
