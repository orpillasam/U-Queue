import React from 'react';

const Nav = () => (
  <nav className="navbar navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/queuehistory" className="nav-link">
          History
        </a>
        <a href="/newaccount" className="nav-link">
          Create an Account
        </a>
        <a href="/login" className="nav-link">
          Logout
        </a>
        //Add Current Time //Add Our Logo //
      </div>
    </div>
  </nav>
);

export default Nav;
