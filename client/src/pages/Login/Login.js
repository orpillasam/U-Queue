import React, { Component } from 'react';
import API from '../../utils/API';
import {
  Container,
  Label,
  Input,
  SideLogo,
  Button,
  SignUpSection,
  ButtonSection
} from '../../components/Styled/Styled.js';
import Auth from '../../utils/Auth';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errorMessage: null
    };
    // this.googleSignin = this.googleSignin.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }

  //   componentDidMount() {
  //     this.loadQueue();
  //   }
  authenticate = () => {
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    API.authenticateUser(userData)
      .then(res => {
        // clear error message
        this.setState({ errorMessage: null });
        Auth.authenticateUser(res.data.token);

        // hard redirect to / to reload all the state and nav
        window.location.href = '/queue';
      })
      .catch(err => this.setState({ errorMessage: err.response.data.message }));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFocus = event => {
    event.target.select();
  };

  handleLogin = event => {
    event.preventDefault();
    if (
      this.state.email &&
      this.state.password &&
      this.state.password.length >= 8
    ) {
      this.authenticate();
    } else {
      this.setState({
        errorMessage: 'Please enter valid username and password to sign in.'
      });
    }
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
        <a href="/">
          <SideLogo src={require('../../assets/SVG/Asset 1.svg')} alt="logo" />
        </a>

        <SignUpSection>
          <h1>Welcome Back! Please login.</h1>

          <form>
            <Label>Email:</Label>
            <Input
              value={this.state.email}
              onChange={this.handleInputChange}
              onFocus={this.handleFocus}
              className="form-control"
              required=""
              name="email"
            />

            <Label>Password:</Label>
            <Input
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
              name="password"
              autoFocus={true}
              className="form-control"
              required=""
            />

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <div className="checkbox mb-3 text-danger">
              {this.state.errorMessage}
            </div>

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
              <Button
                disabled={
                  !(
                    this.state.email &&
                    this.state.password &&
                    this.state.password.length >= 8
                  )
                }
                onClick={this.handleLogin}
              >
                <span>Login</span>
              </Button>
            </ButtonSection>
            <p className="mt-5 mb-3">
              Don't have an account?&nbsp;&nbsp;
              <Link to={'/newaccount'}>Sign Up</Link>
            </p>
          </form>
        </SignUpSection>
      </Container>
    );
  }
}

export default Login;
