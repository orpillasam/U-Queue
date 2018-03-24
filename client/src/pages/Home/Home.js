import React, { Component } from 'react';
import API from '../../utils/API';
import {   
    HomeSection,
    Title,
    SubHeader,
    Logo,
    Button,
    LoginButton
   } from '../../components/Styled/Styled.js';
  

class Home extends Component {

    render () {
        return ( 
            <HomeSection>
                <Title>HELLO U-QUEUE</Title>
                <SubHeader>Welcome to the Ultimate Line Management Tool</SubHeader>
                <Logo home src={require('../../assets/SVG/Asset 1.svg')} alt="logo"/>
                <LoginButton login><span><a href="/login">Login</a></span></LoginButton>
                <LoginButton><span><a href="/newaccount">Join</a></span></LoginButton>
            </HomeSection> 
        )
    }
}

export default Home;
