import React, { Component } from 'react';
import API from '../../utils/API';
import { Row } from '../../components/Grid';
import {
  Container,
  Label,
  Input,
  SubHeader,
  Logo,
  Button,
  LoginButton,
  SignUpSection,
  ButtonSection
} from '../../components/Styled/Styled.js';
import Nav from '../../components/Nav';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  //   componentDidMount() {
  //     this.loadQueue();
  //   }

  //   loadQueue = () => {
  //     API.getQueue()
  //       .then(res =>
  //         this.setState({
  //           email: '',
  //           passowrd: ''
  //         })
  //       )
  //       .catch(err => console.log(err));
  //   };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.validateAccount({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => this.loadAccount())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <a href="/queue">
            <Logo src={require('../../assets/SVG/Asset 1.svg')} alt="logo" />
          </a>
          <Nav />
        </Row>

        <SignUpSection>
          <h1>Welcome Back! Please login.</h1>

          <form>
            <Label>Email:</Label>
            <Input
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"
            />

            <Label>Password:</Label>
            <Input
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
            />
            {/* <FormBtn>

                  Cancel
                </FormBtn>
                <FormBtn
                  disabled={
                    !(
                      this.state.email &&
                      this.state.password 
                    )
                  }
                  onClick={this.handleFormSubmit}
                >
                  Login
                </FormBtn>
                <a href='url'>Forgot password?</a> */}
            <ButtonSection>
              <Button>
                <span>
                  <a href="./queue">Submit</a>
                </span>
              </Button>
            </ButtonSection>
          </form>
        </SignUpSection>
      </Container>
    );
  }
}

export default Login;
