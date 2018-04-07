import React from 'react';
import Clock from 'react-live-clock';
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  background-color: #66CDAA; 
  padding: 20px;
  a {
    font-size: 22px;
    color: white;
    font-family: 'Assistant', sans-serif;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    color: #708090;
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }
`;

const Link = styled.a`
  display: flex;
  justify-content: flex-start;
  border-bottom: 5px #8fbc8b;
  a {
    font-size: 16px;
    color: #8fbc8b;
    font-family: 'Assistant', sans-serif;
    padding-left: 30px;
    text-decoration: none;
    margin-top: 10px;
  }
`;

// const Button = styled.button`
//   align: center;
//   border-radius: 4px;
//   height: 30px;
//   background-color: #ff6347;
//   border: none;
//   color: #ffffff;
//   text-align: center;
//   font-size: 12px;
//   width: 100px;
//   transition: all 0.5s;
//   cursor: pointer;
//   margin-top: 10px;
//   margin-left: 20px;
// `;

const Time = styled.div`
  font-size: 20px;
  color: #ff6347;
  font-family: 'Futura';
`;

const NavLogo = styled.img`
  height: 60px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
`;

const NavHistory = () => (
  <Nav>
    <NavLogo src={require('../../assets/SVG/Asset 1.svg')} alt="logo" />
    <Link href="/queue">QUEUE</Link>
    <Link href="/newaccount">ACCOUNT</Link>
    <Link href="/login">GOODBYE</Link>
    <Time>
      <Clock
        format={'MMMM Do, YYYY   hh:mm:ss A'}
        ticking={true}
        timezone={'US/Pacific'}
      />
    </Time>
  </Nav>
);

export default NavHistory;
