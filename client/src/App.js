
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Queue from './pages/Queue';
import Detail from './pages/Detail';
import Account from './pages/Account';
import AccountEdit from './pages/AccountEdit';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Queue} />
        <Route exact path="/queue" component={Queue} />
        <Route exact path="/queue/:id" component={Detail} />
        <Route exact path ="/account" component ={AccountEdit} />
        <Route exact path ="/newaccount" component ={Account} />
        <Route exact path ="/login" component ={Login} />
        <Route exact path ="/signup" component ={Signup} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;