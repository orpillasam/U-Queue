import React, { Component } from 'react';
import API from '../../utils/API';
import { 
  Container,
  SideLogo,
  SignUpSection,
  Label,
  Input,
  Button
 } from '../../components/Styled/Styled.js';

class Account extends Component {
    state = {
        businessName: '',
        website: '',
        phoneNumber: '',
        email: '',
        password: '',
        address: '',
        city: '',
        stateName: '',
        zipCode: '',
        logo: ''

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
        if (this.state.businessName && this.state.phoneNumber && this.state.email && this.state.password) {
          API.saveAccount({
            businessName: this.state.businessName,
            website: this.state.website,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            password: this.state.password,
            address: this.state.address,
            city: this.state.city,
            stateName: this.state.stateName,
            zipCode: this.state.zipCode,
            logo: this.state.logo
          })
            // .then(res => this.loadAccount())
            .catch(err => console.log(err));
        }
      };

      render () {
          return ( 
           <Container>
                <SideLogo src={require('../../assets/SVG/Asset 1.svg')} alt="logo"/>
                <SignUpSection>
                 <h1>New Account</h1>
                 <form> 
                    <Label>Business Name:</Label>
                    <Input
                        onChange={this.handleInputChange}
                        value={this.state.businessName}
                        name="businessName"
                      />

                    <Label>Contact Name:</Label>
                      <Input
                        onChange={this.handleInputChange}
                        value={this.state.ownerName}
                        name="ownerName"
                      />
              

                    <Label>Street Address: </Label>
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
        

                    <Label>Email: </Label>
                      <Input
                        onChange={this.handleInputChange}
                        value={this.state.email}
                        name="email"
                      />
  

                    <Label>Logo: </Label>
                      <Input
                        onChange={this.handleInputChange}
                        value={this.state.logo}
                        name="logo"
                      />
    
                  </form>

                  <Button
                        disabled={
                          !(
                            this.state.businessName &&
                            this.state.phoneNumber &&
                            this.state.email &&
                            this.state.password &&
                            this.state.address &&
                            this.state.stateName &&
                            this.state.zipCode
                          )
                        }
                        onClick={this.handleFormSubmit}
                      >
                        <span>Submit</span>
                  </Button>


                </SignUpSection>
        
                
            </Container>
            
    )
      }
    
}

export default Account;