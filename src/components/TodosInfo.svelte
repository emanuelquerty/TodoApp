<script>
  import { todoStore, filterStore } from "../store";

  $: completedCount = $todoStore.filter((todo) => todo.completed).length;
  $: activeCount = $todoStore.length - completedCount;
  $: itemsCount = $todoStore.length;
</script>

<h2>
  {#if $filterStore === "all" || $filterStore === "completed"}
    {completedCount} out of {itemsCount}
    {itemsCount > 1 ? "items" : "item"} completed
  {:else}
    {activeCount} out of {itemsCount}
    {itemsCount > 1 ? "items" : "item"} active
  {/if}
</h2>

<style>
  h2 {
    margin-bottom: 1rem;
    text-align: center;
  }
</style>
