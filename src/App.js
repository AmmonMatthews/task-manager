import React from "react";
import { Route, Switch } from "react-router-dom"
import Home from "./components/Home";
import Login from "./components/login";
import Register from "./components/register";
import "./styles/index.scss"

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* make dashboard a private route */}
        <Route path="/dashboard" component={Home} />
        

      </ Switch>
    </>
  );
}

export default App;
