<script>
  import { onMount } from "svelte";

  import { fade } from "svelte/transition";
  // export let opacity = 0.5;
  export let visible = false;
  let clazz = "";
  export { clazz as class };

  let elem;

  function handleClickOutside(e) {
    if (e.target == elem) {
      visible = !visible;
      document.body.classList.toggle('noscroll');
    }
  }
</script>

{#if visible}
  <div
    id="main"
    class={clazz}
    transition:fade
    on:click={handleClickOutside}
    bind:this={elem}
  >
    <slot />
  </div>
{/if}

<style>
  #main {
    min-height: 100vh;
    height: auto;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 20;
    position: fixed;
    top: 0;
  }
</style>
