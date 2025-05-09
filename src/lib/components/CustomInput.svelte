<script lang="ts">
  import { AuroInput } from '@aurodesignsystem/auro-formkit/auro-input/class';
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

  AuroInput.register('custom-input');
</script>

<custom-input placeholder={placeholder} bordered={bordered} required={required} value={value} 
onblur={blurHandler}>
  {@render children?.()}
</custom-input>
