import {writable} from "svelte/store";

export const todoStore = writable([
    {
      id: 1,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      completed: true,
    },
    {
      id: 2,
      text: "inventore aspernatur dolorum debitis, fugiat alias ",
      completed: false,
    }
  ]);

  export const filterStore = writable("all");
