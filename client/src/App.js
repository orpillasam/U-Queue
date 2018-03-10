
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Account from "./pages/Account";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/account" component={Account} />
        <Route exact path="/" component={Queue} />
        <Route exact path="/queue" component={Queue} />
        <Route exact path="/queue/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
