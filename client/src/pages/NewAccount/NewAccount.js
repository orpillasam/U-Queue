import React, { Component } from 'react';
import API from '../../utils/API';
import {
  Container,
  Logo,
  SignUpSection,
  Label,
  Input,
  Button,
  ButtonSection
} from '../../components/Styled/Styled.js';
import { Row } from '../../components/Grid';
import Nav from '../../components/Nav';
import Auth from '../../utils/Auth';

class NewAccount extends Component {
  state = {
    businessName: '',
    email: '',
    password: '',
    // contactName: '',
    // website: '',
    // phoneNumber: '',
    // address: '',
    // city: '',
    // stateName: '',
    // zipCode: '',
    // logo: '', 
    errorMessage: null
  };  

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
        window.location.href = "/";
      })
      .catch(err => this.setState({ errorMessage: err.response.data.message }));
  };

  signUp = () => {
    const userData = {
      businessName: this.state.businessName,
      email: this.state.email,
      password: this.state.password
    };

    API.signUp(userData)
      .then(res => {
        // clear error message
        this.setState({ errorMessage: null });
        console.log("did the signup api hit?");

        // authenticate the user after successful sign up
        this.authenticate();
      })
      .catch(err => this.setState({ errorMessage: err.response.data.message }));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    console.log(event);
    if (
      this.state.businessName &&
      // this.state.phoneNumber &&
      this.state.email &&
      this.state.password &&
      this.state.password.length >= 8
        ) {
      this.signUp();
      }
    else {
      this.setState({ errorMessage: "Please enter all required fields to sign up."})
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
          <h1>New Account</h1>
          <form>
            <Label>Business Name:</Label>
            <Input
              onChange={this.handleInputChange}
              value={this.state.businessName}
              name="businessName"
            />

            <Label>Email: </Label>
            <Input
              onChange={this.handleInputChange}
              value={this.state.email}
              name="email"
            />

            <Label>Password:</Label>
            <Input
              onChange={this.handleInputChange}
              value={this.state.password}
              name="password"
            />
            
            {/* <Label>Contact Name:</Label>
            <Input
              onChange={this.handleInputChange}
              value={this.state.ownerName}
              name="ownerName"
            />
            /* <Label>Street Address: </Label>
            <Input
              onChange={this.handleInputChange}
              value={this.state.address}
              name="address"
            />

            <Label>City:</Label>
            <Input
              onChange={this.handleInputChange}
              value={this.state.city}
              name="city"
            />

            <Label>State:</Label>
            <Input
              onChange={this.handleInputChange}
              value={this.state.stateName}
              name="stateName"
            />

            <Label>Zip Code:</Label>
            <Input
              onChange={this.handleInputChange}
              value={this.state.zipCode}
              name="zipCode"
            />

            <Label>Website: </Label>
            <Input
              onChange={this.handleInputChange}
              value={this.state.website}
              name="website"
            />

            <Label>Phone Number: </Label>
            <Input
              onChange={this.handleInputChange}
              value={this.state.phoneNumber}
              name="phoneNumber"
            />

            <Label>Logo: </Label>
            <Input
              onChange={this.handleInputChange}
              value={this.state.logo}
              name="logo"
            />  */}
          </form>

          <ButtonSection>
            <Button
              disabled={
                !(
                  this.state.businessName &&
                  this.state.email &&
                  this.state.password 
                  // this.state.phoneNumber &&
                  // this.state.address &&
                  // this.state.stateName &&
                  // this.state.zipCode
                )
              }
              onClick={this.handleFormSubmit}
            >
              <span>
                <a href="./queue">Submit</a>
              </span>
            </Button>
          </ButtonSection>
        </SignUpSection>
      </Container>
    );
  }
}

export default NewAccount;
