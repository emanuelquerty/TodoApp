<script>
  import AddTodo from "./components/AddTodo.svelte";
  import Filter from "./components/Filter.svelte";
  import TodosInfo from "./components/TodosInfo.svelte";
  import Todos from "./components/Todos.svelte";
  import TodosActions from "./components/TodosActions.svelte";
  import EditTodo from "./components/EditTodo.svelte";

  let todoToEdit = {};
  let editTodoFormIsVisible = false;

  function editTodo(event) {
    todoToEdit = event.detail.todo;
    editTodoFormIsVisible = true;
  }
</script>

<AddTodo />
<Filter />
<TodosInfo />
<Todos on:edit-todo={editTodo} />
<TodosActions />
<EditTodo todo={todoToEdit} bind:visible={editTodoFormIsVisible} />
