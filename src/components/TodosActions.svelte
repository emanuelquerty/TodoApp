<script>
  import { todoStore } from "../store";
  let allTodosAreChecked = false;

  $: allTodosAreChecked = $todoStore.every((todo) => todo.completed);

  function checkAll() {
    $todoStore = $todoStore.map((todo) => {
      todo.completed = true;
      return todo;
    });
  }

  function uncheckAll() {
    $todoStore = $todoStore.map((todo) => {
      todo.completed = false;
      return todo;
    });
  }

  function removeCompleted() {
    $todoStore = $todoStore.filter((todo) => !todo.completed);
  }
</script>

<hr />
<div class="btn-wrapper">
  {#if !allTodosAreChecked}
    <button type="button" on:click={checkAll} class="check-all-btn"
      >Check All</button
    >
  {:else}
    <button type="button" on:click={uncheckAll} class="uncheck-all-btn"
      >Uncheck All</button
    >
  {/if}
  <button type="button" on:click={removeCompleted} class="remove-completed-btn"
    >Remove Completed</button
  >
</div>

<style>
  .btn-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }

  button {
    width: 49%;
    height: 40px;
    cursor: pointer;
    border: none;
  }

  .check-all-btn,
  .uncheck-all-btn,
  .remove-completed-btn {
    background-color: #039be5;
    color: #fff;
  }
</style>
