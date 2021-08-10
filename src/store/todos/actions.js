import {
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO_STARTED,
} from "./constants";

export const addTodo = ({ title, id }) => {
  return async (dispatch) => {
    dispatch(addTodoStarted());
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          id,
        }),
      };
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos`,
        requestOptions
      )
      const data = await res.json()
      debugger
      dispatch(addTodoSuccess({...data, id:new Date().getTime()}));
    } catch (err) {
      dispatch(addTodoFailure(err.message));
    }
  };
};

const addTodoSuccess = (todo) => ({
  type: ADD_TODO_SUCCESS,
  payload: {
    ...todo,
  },
});

const addTodoStarted = () => ({
  type: ADD_TODO_STARTED,
});

const addTodoFailure = (error) => ({
  type: ADD_TODO_FAILURE,
  payload: {
    error,
  },
});
