export const ALL_TASK = "ALL_TASK";
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";

export function allTaskList() {
    return async function (dispatch) {
      let temp = [];
      await fetch("https://jsonplaceholder.typicode.com/todos").then(
        async (res) => {
          temp = await res.json();
          console.log(temp);
        }
      );
      dispatch(addTaskList(temp));
    };
  }
  
  export function addTaskList(tasks) {
    return {
      type: ALL_TASK,
      tasks,
    };
  }
  
  export function deleteTask(task) {
    return {
      type: DELETE_TASK,
      task,
    };
  }
  
  export function addTask(task) {
    return {
      type: ADD_TASK,
      task,
    };
  }