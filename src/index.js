import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import tasks from "./reducers/index.js";
import { authReducer } from "./reducers/authReducer.js";
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'

const rootReducer = combineReducers({tasks, authReducer})

const store = createStore(rootReducer);


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);


