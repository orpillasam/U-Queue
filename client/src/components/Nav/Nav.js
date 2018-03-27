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
<<<<<<< HEAD
        <a href="/newaccount" className="nav-link">
          Create an Account
=======
        <a href="/signup" className="nav-link">
          Edit Account
>>>>>>> 824036f297c12a6d6e0271c0c8f82203d35475c7
        </a>
        <a href="/login" className="nav-link">
         Logout
        </a>
      //Add Current Time 
      //Add Our Logo 
      //
      </div>
    </div>
  </nav>
);

export default Nav;
