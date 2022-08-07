<script>
  import { v4 as uuidv4 } from "uuid";
  import { todoStore } from "../store";
  let text = "";

  function handleSubmit() {
    let newTodo = { id: uuidv4(), text, completed: false };
    $todoStore = [newTodo, ...$todoStore];
    text = "";
  }
</script>

<p class="intro-message">What needs to be done</p>
<form class="add-todo-wrapper" on:submit|preventDefault={handleSubmit}>
  <input type="text" bind:value={text} placeholder="Enter a task ..." />
  <input type="submit" value="Add" />
</form>

<style>
  .intro-message {
    font-size: 2rem;
    margin: 2rem 0;
    text-align: center;
    font-weight: bold;
  }

  input {
    display: block;
    width: 100%;
    height: 40px;
    margin-bottom: 1rem;
    outline: none;
  }

  [type="text"] {
    padding: 0.6rem;
  }

  [type="submit"] {
    border: none;
    cursor: pointer;
    background-color: #039be5;
    color: #fff;
  }
</style>
