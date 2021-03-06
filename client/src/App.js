import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Queue from './pages/Queue';
import NewAccount from './pages/NewAccount';
import AccountEdit from './pages/AccountEdit';
import GuestEdit from './pages/GuestEdit';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import QueueHistoryTable from './pages/QueueHistoryTable';
import Twilio from './pages/Twilio';
import CustomerSearch from './pages/CustomerSearch';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/queue" component={Queue} />
        <Route exact path="/account" component={AccountEdit} />
        <Route exact path="/newaccount" component={NewAccount} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/newaccount" component={NewAccount} />
        <Route exact path="/guestedit" component={GuestEdit} />
        <Route exact path="/queuehistory" component={QueueHistoryTable} />
        <Route exact path="/twilio" component={Twilio} />
        <Route exact path="/customersearch" component={CustomerSearch} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
