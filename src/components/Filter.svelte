<script>
  import { filterStore } from "../store";
  $: filter = $filterStore;

  function handleClick(value) {
    $filterStore = value;
  }
</script>

<div class="btn-wrapper">
  <button
    type="button"
    class:selected={filter === "all"}
    on:click={() => handleClick("all")}>All</button
  >
  <button
    type="button"
    class:selected={filter === "active"}
    on:click={() => handleClick("active")}>Active</button
  >
  <button
    type="button"
    class:selected={filter === "completed"}
    on:click={() => handleClick("completed")}>Completed</button
  >
</div>

<style>
  .btn-wrapper {
    display: flex;
    justify-content: space-between;
    margin: 0rem 0rem 2rem 0rem;
    padding: 0rem 2rem;
  }

  .selected {
    color: #039be5;
  }

  button {
    width: 32%;
    height: 40px;
    cursor: pointer;
    border: none;
  }
</style>
