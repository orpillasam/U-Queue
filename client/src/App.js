import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Queue from './pages/Queue';
import Detail from './pages/Detail';
import NewAccount from './pages/NewAccount';
import AccountEdit from './pages/AccountEdit';
import GuestEdit from './pages/GuestEdit';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import QueueHistoryTable from './pages/QueueHistoryTable';
import Twilio from './pages/Twilio';
import Nav from './components/Nav';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Queue} />
        <Route exact path="/queue" component={Queue} />
        <Route exact path="/queue/:id" component={Detail} />
        <Route exact path="/account" component={AccountEdit} />
        <Route exact path="/newaccount" component={NewAccount} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/guestedit" component={GuestEdit} />
        <Route exact path="/queuehistory" component={QueueHistoryTable} />
        <Route exact path="/twilio" component={Twilio} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
