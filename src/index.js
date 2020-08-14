import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import tasks from "./reducers/index.js";
import { authReducer } from "./reducers/authReducer.js";
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from "redux-thunk";
import logger from "redux-logger"

const rootReducer = combineReducers({tasks, authReducer})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));


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


