<script lang="ts">
  import type { IconDefinition } from "@fortawesome/fontawesome-common-types";

  let clazz: string | undefined = undefined;
  export { clazz as class };
  export let id: string | undefined = undefined;
  export let style: string | undefined = undefined;

  export let icon: IconDefinition;
  export let title: string | undefined = undefined;
  export let size: IconSize | undefined = undefined;
  export let color: string | undefined = undefined;

  export let fw = false;
  export let pull: PullDir | undefined = undefined;

  export let scale: number | string = 1;
  export let translateX: number | string = 0;
  export let translateY: number | string = 0;
  export let rotate: number | string | undefined = undefined;
  export let flip: FlipDir | undefined = undefined;

  export let spin = false;
  export let pulse = false;

  // Duotone Icons
  export let primaryColor = "";
  export let secondaryColor = "";
  export let primaryOpacity: number | string = 1;
  export let secondaryOpacity: number | string = 0.4;
  export let swapOpacity = false;

  let svgElement: HTMLElement | SVGElement;
  $: if (svgElement && size) {
    setCustomFontSize(svgElement, size);
  }

  $: i = (icon && icon.icon) || [0, 0, "", [], ""];

  $: transform = getTransform(scale, translateX, translateY, rotate, flip, 512);

  export function setCustomFontSize(element: HTMLElement | SVGElement, size?: IconSize): void {
    if (size && size !== "lg" && size !== "sm" && size !== "xs") {
      element.style.fontSize = size.replace("x", "em");
    } else {
      element.style.fontSize = "";
    }
  }

  export function getTransform(
    scale: number | string,
    translateX: number | string,
    translateY: number | string,
    rotate?: number | string,
    flip?: string | undefined,
    translateTimes = 1,
    translateUnit = "",
    rotateUnit = ""
  ) {
    let flipX = 1;
    let flipY = 1;

    if (flip) {
      if (flip == "horizontal") {
        flipX = -1;
      } else if (flip == "vertical") {
        flipY = -1;
      } else {
        flipX = flipY = -1;
      }
    }

    if (typeof scale === "string") {
      scale = parseFloat(scale);
    }
    if (typeof translateX === "string") {
      translateX = parseFloat(translateX);
    }
    if (typeof translateY === "string") {
      translateY = parseFloat(translateY);
    }

    const x = `${translateX * translateTimes}${translateUnit}`;
    const y = `${translateY * translateTimes}${translateUnit}`;
    let output = `translate(${x},${y}) scale(${flipX * scale},${flipY * scale})`;
    if (rotate) {
      output += ` rotate(${rotate}${rotateUnit})`;
    }
    return output;
  }
  type IconSize =
    | "xs"
    | "sm"
    | "lg"
    | "1x"
    | "2x"
    | "3x"
    | "4x"
    | "5x"
    | "6x"
    | "7x"
    | "8x"
    | "9x"
    | "10x"
    | `${number}x`;

  type FlipDir = "horizontal" | "vertical" | "both";
  type PullDir = "left" | "right";
</script>

{#if i[4]}
  <!-- eslint-disable svelte/no-inline-styles -- Only styles passed to this component should be included -->
  <svg
    {id}
    class="svelte-fa svelte-fa-base {clazz}"
    class:pulse
    class:svelte-fa-size-lg={size === "lg"}
    class:svelte-fa-size-sm={size === "sm"}
    class:svelte-fa-size-xs={size === "xs"}
    class:svelte-fa-fw={fw}
    class:svelte-fa-pull-left={pull === "left"}
    class:svelte-fa-pull-right={pull === "right"}
    class:spin
    bind:this={svgElement}
    {style}
    viewBox="0 0 {i[0]} {i[1]}"
    aria-hidden={title === undefined}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- eslint-enable -->
    {#if title}
      <title>{title}</title>
    {/if}
    <g transform="translate({i[0] / 2} {i[1] / 2})" transform-origin="{i[0] / 4} 0">
      <g {transform}>
        {#if typeof i[4] == "string"}
          <path
            d={i[4]}
            fill={color || primaryColor || "currentColor"}
            transform="translate({i[0] / -2} {i[1] / -2})"
          />
        {:else}
          <!-- Duotone icons -->
          <path
            d={i[4][0]}
            fill={secondaryColor || color || "currentColor"}
            fill-opacity={swapOpacity != false ? primaryOpacity : secondaryOpacity}
            transform="translate({i[0] / -2} {i[1] / -2})"
          />
          <path
            d={i[4][1]}
            fill={primaryColor || color || "currentColor"}
            fill-opacity={swapOpacity != false ? secondaryOpacity : primaryOpacity}
            transform="translate({i[0] / -2} {i[1] / -2})"
          />
        {/if}
      </g>
    </g>
  </svg>
{/if}

<style>
  :global(.svelte-fa-base) {
    height: 1em;
    overflow: visible;
    transform-origin: center;
    vertical-align: -0.125em;
  }

  :global(.svelte-fa-fw) {
    text-align: center;
    width: 1.25em;
  }

  .svelte-fa-pull-left {
    float: left;
  }

  .svelte-fa-pull-right {
    float: right;
  }

  .svelte-fa-size-lg {
    font-size: 1.33333em;
    line-height: 0.75em;
    vertical-align: -0.225em;
  }

  .svelte-fa-size-sm {
    font-size: 0.875em;
  }

  .svelte-fa-size-xs {
    font-size: 0.75em;
  }

  .spin {
    animation: spin 2s 0s infinite linear;
  }

  .pulse {
    animation: spin 1s infinite steps(8);
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
