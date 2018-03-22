import React, { Component } from 'react';
// import DeleteBtn from '../../components/DeleteBtn';
// import { Jumbotron, Table, ListGroup, ListGroupItem } from 'react-bootstrap';
import API from '../../utils/API';
// import { Col, Row, Container } from '../../components/Grid';
// import { Input, FormBtn } from '../../components/Form';
// import styled from 'styled-components';
// import { Container } from '../../theme/grid';
import { 
  SideLogo,
  SignUpSection,
  Label,
  Input
 } from '../../components/Styled/Styled.js';


//  const SideLogo = styled.img`
//  display: flex;
//  height: 200px;
//  padding-left: 50px;
//  padding-top: 50px;
//  padding-right: 150px;
// `;

//  const SignUpSection = styled.section`
//  display: flex;
//  flex-direction: column;
//  padding-top: 190px;
//  padding-left: 50px;
// `;

//  const Label = styled.label`
//  align-items: baseline;
//  padding-right: 10px;
//  padding-bottom: 20px;
//  border: none;
//  display: block;
// `;

// const Input = styled.input`
//  color: #8FBC8B;
//  font-size: 18px;
//  background: #EBEDEF;
//  padding-left: 30px;
//  border: none;
//  width: 500px;
//  height: 30px;
//  display: inline;
//  margin-left: 10px;
// `;

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

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     console.log(event);
    //     if (this.state.businessName && this.state.phoneNumber && this.state.email && this.state.password) {
    //       API.saveAccount({
    //         businessName: this.state.businessName,
    //         website: this.state.website,
    //         phoneNumber: this.state.phoneNumber,
    //         email: this.state.email,
    //         password: this.state.password,
    //         address: this.state.address,
    //         city: this.state.city,
    //         stateName: this.state.stateName,
    //         zipCode: this.state.zipCode,
    //         logo: this.state.logo
    //       })
    //         // .then(res => this.loadAccount())
    //         .catch(err => console.log(err));
    //     }
    //   };

      render () {
          return ( 
           <div>
                <SideLogo src={require('../../assets/SVG/Asset 1.svg')} alt="logo"/>

                <SignUpSection>
                 <h3>Please enter your information.</h3>
                 <form> 
                    <Label>Business Name:
                      <Input
                        onChange={this.handleInputChange}
                        value={this.state.businessName}
                        name="businessName"
                      />
                    </Label>

                    <Label>Contact Name:
                      <Input
                        onChange={this.handleInputChange}
                        value={this.state.ownerName}
                        name="ownerName"
                      />
                    </Label>

                    <Label>Street Address:
                      <Input
                        onChange={this.handleInputChange}
                        value={this.state.address}
                        name="address"
                      />
                    </Label>

                    <Label>City:
                      <Input
                        onChange={this.handleInputChange}
                        value={this.state.city}
                        name="city"
                      />
                    </Label>

                    <Label>State:
                      <Input
                        onChange={this.handleInputChange}
                        value={this.state.stateName}
                        name="stateName"
                      />
                    </Label>

                    <Label>Zip Code:
                      <Input
                        onChange={this.handleInputChange}
                        value={this.state.zipCode}
                        name="zipCode"
                      />
                    </Label>

                    <Label>Website:
                      <Input
                        onChange={this.handleInputChange}
                        value={this.state.website}
                        name="website"
                      />
                    </Label>

                    <Label>Phone Number:
                      <Input
                        onChange={this.handleInputChange}
                        value={this.state.phoneNumber}
                        name="phoneNumber"
                      />
                    </Label>

                    <Label>Email:
                      <Input
                        onChange={this.handleInputChange}
                        value={this.state.email}
                        name="email"
                      />
                    </Label>

                    <Label>Logo:
                      <Input
                        onChange={this.handleInputChange}
                        value={this.state.logo}
                        name="logo"
                      />
                    </Label>
                  </form>
                </SignUpSection>
                
            </div>
            
    )
      }
    
}

export default Account;