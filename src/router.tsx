import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "./modules/Home/pages";
import ToolBar from "./modules/NavBar/components";
import About from "./modules/About/pages";
import Random from "./modules/Random/pages";

function Routes() {
  return (
    <HashRouter basename='/'>
      <ToolBar />
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} />
      <Route path='/random' exact component={Random} />
    </HashRouter>
  );
}

export default Routes;
