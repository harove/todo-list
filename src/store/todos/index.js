import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from "redux-thunk";
import todosReducer from "./todosReducer";


const store = createStore(
  todosReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

export default store;
