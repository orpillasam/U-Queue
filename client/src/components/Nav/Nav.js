import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clock from 'react-live-clock';
import styled from 'styled-components';

const NavBar = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 20px;
  margin-top: 40px;
  border-bottom: 5px #8fbc8b;
  a {
    font-size: 16px;
    color: #8fbc8b;
    font-family: 'Futura';
    padding-left: 30px;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }

  li {
    list-style-type: none;
  }
`;

const Link = styled.a`
  font-size: 16px;
  color: #8fbc8b;
  font-family: 'Futura';
  padding-left: 30px;
  text-decoration: none;
  font-weight: bold;
`;

const Button = styled.button`
  align: center;
  border-radius: 4px;
  height: 30px;
  background-color: #ff6347;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 12px;
  width: 100px;
  transition: all 0.5s;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 20px;
`;

const Time = styled.div`
  font-size: 16px;
  color: #ff6347;
  font-family: 'Futura';
  margin-top: 5px;
  margin-left: 20px;
  padding: 5px;
`;

const NavLogo = styled.img`
  height: 45px;
`;

const Nav = () => (
  <NavBar>
    <NavLogo src={require('../../assets/SVG/Asset 1.svg')} alt="logo" />
    <Link href="/queuehistory">History</Link>
    <Link href="/newaccount">Create an Account</Link>
    <Link href="/login">Logout</Link>
    <Time>
      <Clock
        format={'MMMM Do, YYYY hh:mm:ss A'}
        ticking={true}
        timezone={'US/Pacific'}
      />
    </Time>
  </NavBar>
);

export default Nav;
