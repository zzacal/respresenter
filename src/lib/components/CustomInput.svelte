<script lang="ts">
	import type { Snippet } from 'svelte';
    import type { KeyboardEventHandler } from 'svelte/elements';
  type InputProps =  {
    required?: boolean,
    placeholder?: string,
    value?: string,
    children?: Snippet,
    onkeydown: KeyboardEventHandler<EventTarget>;
  }
  
  let { value = $bindable(), placeholder, required, onkeydown }: InputProps = $props();
  const changeHandler = (e: any) => {
    value = e.target.value;
  }
</script>
<input type="text" {placeholder} {required} {value} onchange={changeHandler} {onkeydown}/>

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
