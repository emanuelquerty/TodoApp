<script>
  import { todoStore } from "../store";
  import { fade, scale } from "svelte/transition";
  export let todo = {};
  export let visible = false;

  function save(event) {
    $todoStore = $todoStore;
    event.target["text-input"].value = "";
    close();
  }

  function close() {
    visible = false;
  }
</script>

{#if visible}
  <div class="backdrop" transition:fade on:click={close} />
  <form on:submit|preventDefault={save} in:scale out:fade>
    <h4>Edit your task</h4>
    <input type="text" bind:value={todo.text} name="text-input" />
    <input type="submit" value="Save" />
  </form>
{/if}

<style>
  h4 {
    font-size: 2rem;
    margin: 2rem 0 2rem 0;
  }

  form {
    position: fixed;
    top: 25%;
    left: calc(50% - 284px);
    min-width: 320px;
    width: 568px;
    height: 250px;
    background-color: #fff;
    padding: 1rem;
    border-radius: 5px;
    z-index: 9;
  }

  input {
    display: block;
    width: 100%;
    height: 40px;
    margin-bottom: 1rem;
    padding: 0 1rem;
    outline: none;
  }

  [type="submit"] {
    background-color: #039be5;
    cursor: pointer;
    color: #fff;
    border: none;
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 8;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.295);
    backdrop-filter: blur(4px);
  }
</style>
