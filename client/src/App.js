<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Account from "./pages/Account";
=======
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Queue from './pages/Queue';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
>>>>>>> 3b01ff80c5f297dfd75bbf59f397fcbf60d97a63

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route exact path="/account" component={Account} />
=======
        <Route exact path="/" component={Queue} />
        <Route exact path="/queue" component={Queue} />
        <Route exact path="/queue/:id" component={Detail} />
>>>>>>> 3b01ff80c5f297dfd75bbf59f397fcbf60d97a63
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
