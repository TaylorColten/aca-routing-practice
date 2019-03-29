import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import About from "./components/About";

const Route = () => (
<Switch>
<Route exact path="/" component={App} />
<Route exact path="/home" component={Home} />
<Route exact path="/about" component={About} />
</Switch>
);

export default Router;