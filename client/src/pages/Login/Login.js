import React, { Component } from 'react';
import API from '../../utils/API';
import {  
    Container,
    Label,
    Input, 
    SubHeader,
    Logo,
    Button,
    LoginButton
   } from '../../components/Styled/Styled.js';
  

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

  render () {
    return (
      <Container>
        <a href="/"><Logo src={require('../../assets/SVG/Asset 1.svg')} alt="logo"/></a>
 
          <SubHeader>Welcome Back! Please login.</SubHeader>

            <form>
              <Input
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="Email"
                />
              <Input
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="Password"
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

                <Button><span><a href="./queue">Submit</a></span></Button>

            </form>
    </Container>
    )
}

}

export default Login;
