<script>
  import { fade, scale } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import { todoStore } from "../store";

  export let todo = {};
  let dispach = createEventDispatcher();

  function handleEditTodoClick() {
    dispach("edit-todo", {
      todo,
    });
  }

  function deleteTodo(id) {
    $todoStore = $todoStore.filter((todo) => todo.id !== id);
  }

  function handleChange() {
    todo.completed = !todo.completed;
    $todoStore = $todoStore;
  }
</script>

<div class="todo-wrapper" in:scale out:fade={{ duration: 500 }}>
  <input
    type="checkbox"
    name="todos"
    checked={todo.completed}
    on:change={handleChange}
  />
  <span>{todo.text}</span>
  <div class="btn-wrapper">
    <button type="button" class="edit-btn" on:click={handleEditTodoClick}
      >Edit</button
    >
    <button
      type="button"
      class="delete-btn"
      on:click={() => deleteTodo(todo.id)}>Delete</button
    >
  </div>
</div>

<style>
  .todo-wrapper {
    margin-bottom: 2rem;
    background-color: #cfd8dc;
    padding: 10px;
    border-radius: 5px;
  }

  [type="checkbox"] {
    width: 40px;
    height: 40px;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 1rem;
  }

  [type="checkbox"]:checked {
    accent-color: #039be5;
  }

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

  .delete-btn {
    background-color: #ff8a65;
  }
</style>
