import React, { Component } from 'react';
import API from '../../utils/API';
import {
  Container,
  SideLogo,
  SignUpSection,
  Label,
  Input,
  Button,
  ButtonSection
} from '../../components/Styled/Styled.js';
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
        window.location.href = '/queue';
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
        console.log('did the signup api hit?');

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

  handleFocus = event => {
    event.target.select();
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
    } else {
      this.setState({
        errorMessage: 'Please enter all required fields to sign up.'
      });
    }
  };

  render() {
    return (
      <Container>
        <a href="/">
          <SideLogo src={require('../../assets/SVG/Asset 1.svg')} alt="logo" />
        </a>

        <SignUpSection>
          <h1>New Account</h1>
          <form>
            <Label>Business Name:</Label>
            <Input
              onChange={this.handleInputChange}
              value={this.state.businessName}
              onFocus={this.handleFocus}
              placeholder="Required"
              className="form-control"
              required=""
              autoFocus={true}
              name="businessName"
            />

            <Label>Email: </Label>
            <Input
              onChange={this.handleInputChange}
              value={this.state.email}
              onFocus={this.handleFocus}
              placeholder="Required"
              className="form-control"
              required=""
              autoFocus={true}
              name="email"
            />

            <Label>Password:</Label>
            <Input
              onChange={this.handleInputChange}
              value={this.state.password}
              onFocus={this.handleFocus}
              placeholder="Minimum 8 characters required"
              className="form-control"
              required=""
              type="password"
              autoFocus={true}
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
            <div className="checkbox mb-3 text-danger">
              {this.state.errorMessage}
            </div>
          </form>

          <ButtonSection>
            <Button
              disabled={
                !(
                  this.state.businessName &&
                  this.state.email &&
                  this.state.password
                )
                // this.state.phoneNumber &&
                // this.state.address &&
                // this.state.stateName &&
                // this.state.zipCode
              }
              onClick={this.handleFormSubmit}
            >
              <span>Signup</span>
            </Button>
          </ButtonSection>
        </SignUpSection>
      </Container>
    );
  }
}

export default NewAccount;
