import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clock from 'react-live-clock';
import styled from 'styled-components';

const NavBar = styled.div`
    margin-left: 105px;
    margin-top: 40px;
    border-bottom: 5px #8FBC8B;
    a {
        font-size: 16px;
        color: #8FBC8B;
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
        display: inline;
    }
`;

const Link = styled.a`
    font-size: 16px;
    color: #8FBC8B;
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
    display: inline;
    font-size: 16px; 
    color: #8FBC8B; 
    font-family: 'Futura'; 
    margin: 30px;
    padding: 5px;
    border: solid #8FBC8B 2px;
`;

const Nav = () => (
    <NavBar>
        <Link href="/queuehistory">
          History
        </Link>
        <Link href="/newaccount">
          Create an Account
        </Link>
        <Link href="/login">
          Logout
        </Link>
        <Time><Clock format={'hh:mm:ss A'} ticking={true} timezone={'US/Pacific'} /></Time>
    </NavBar>
);

export default Nav;
