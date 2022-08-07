<script>
  import { fade, scale } from "svelte/transition";
  import { todoStore, filterStore } from "../store";
  import { createEventDispatcher } from "svelte";
  import Todo from "./Todo.svelte";

  let dispach = createEventDispatcher();

  function handleEditTodoClick(todo) {
    dispach("edit-todo", {
      todo,
    });
  }
</script>

{#each $todoStore as todo (todo.id)}
  {#if $filterStore === "all"}
    <Todo {todo} on:edit-todo />
  {/if}

  {#if $filterStore === "active" && !todo.completed}
    <Todo {todo} on:edit-todo />
  {/if}

  {#if $filterStore === "completed" && todo.completed}
    <Todo {todo} on:edit-todo />
  {/if}
{/each}
