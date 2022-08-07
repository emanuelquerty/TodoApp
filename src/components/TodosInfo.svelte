<script>
  import { todoStore } from "../store";

  $: completedCount = $todoStore.filter((todo) => todo.completed).length;
</script>

<h2>
  {completedCount} out of {$todoStore.length}
  {$todoStore.length > 1 ? "items" : "item"} completed
</h2>

<style>
  h2 {
    margin-bottom: 1rem;
    text-align: center;
  }
</style>
