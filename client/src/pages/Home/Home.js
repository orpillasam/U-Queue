import React, { Component } from 'react';
import {
  HomeSection,
  Title,
  SubHeader,
  Logo,
  LoginButton,
  ButtonSection
} from '../../components/Styled/Styled.js';

class Home extends Component {
  render() {
    return (
      <HomeSection>
        <Title>HELLO U-QUEUE</Title>
        <SubHeader>Welcome to the Ultimate Line Management Tool</SubHeader>
        <Logo home src={require('../../assets/SVG/Asset 1.svg')} alt="logo" />
        <ButtonSection>
          <LoginButton login>
            <span>
              <a href="/login">Login</a>
            </span>
          </LoginButton>
          <LoginButton>
            <span>
              <a href="/newaccount">Join</a>
            </span>
          </LoginButton>
        </ButtonSection>
      </HomeSection>
    );
  }
}

export default Home;
