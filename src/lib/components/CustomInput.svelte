<script lang="ts">
  import type { Snippet } from "svelte";
  import type { KeyboardEventHandler } from "svelte/elements";
  type InputProps = {
    id?: string | undefined;
    name?: string | undefined;
    required?: boolean;
    placeholder?: string;
    value?: string;
    maxlength?: number | null | undefined;
    children?: Snippet;
    onkeydown: KeyboardEventHandler<EventTarget>;
  };

  let { id, name, value = $bindable(), placeholder, maxlength, required, onkeydown }: InputProps = $props();
  const changeHandler = (e: any) => {
    value = e.target.value;
  };

  let placeholderNow = $state(placeholder);
  let errorMsg: string | undefined = $state(undefined);
  let isError: boolean = $state(false);

  function onfocus() {
    placeholderNow = undefined;
  }

  function onblur() {
    placeholderNow = placeholder;
    validate();
  }

  function validate() {
    // if unfilled
    if (required === true && (!value || value.length < 1)) {
      setError("Required");
    } else {
      unsetError();
    }
  }

  function setError(error: string) {
    errorMsg = error;
    isError = true;
  }

  function unsetError() {
    errorMsg = undefined;
    isError = false;
  }
</script>

<div>
  <input
    {id}
    {name}
    type="text"
    class={isError ? "error": ""}
    placeholder={placeholderNow}
    {required}
    bind:value
    onchange={changeHandler}
    {onkeydown}
    {onfocus}
    {onblur}
    {maxlength}
  />
  {#if errorMsg}
  <br /><small class="error-message">{errorMsg}</small>
  {/if}
</div>

<style lang="scss">
  @use "../../colors.scss" as colors;
  @use "../../shapes.scss" as shapes;

  input {
    line-height: 53px;
    border: 1px solid colors.$input-border-color;
    border-radius: shapes.$border-radius;
    padding: 0 1rem;

    &.error {
      border-color: colors.$input-error-border-color;
      background-color: colors.$input-error-background-color;
    }
  }
  .error-message {
    color: colors.$error-font-color;
  }
</style>
