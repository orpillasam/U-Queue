import React, { Component } from 'react';
import { Jumbotron, Table, ListGroup, ListGroupItem } from 'react-bootstrap';
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/Grid';
import { Input, FormBtn } from '../../components/Form';

class Account extends Component {
    state = {
        businessName: '',
        website: '',
        ownerName: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        stateName: '',
        zipCode: '',
        logo: ''

    };

    
  componentDidMount() {
    this.loadQueue();
  }

  loadQueue = () => {
    API.getQueue()
      .then(res =>
        this.setState({
          businessName: '',
          website: '',
          ownerName: '',
          email: '',
          phoneNumber: '',
          address: '',
          city: '',
          stateName: '',
          zipCode: '',
          logo: ''
        })
      )
      .catch(err => console.log(err));
  };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };    

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.businessName && this.state.phoneNumber && this.state.email) {
          API.saveAccount({
            businessName: this.state.businessName,
            website: this.state.website,
            ownerName: this.state.ownerName,
            email: this.state.email,
            address: this.state.address,
            city: this.state.city,
            stateName: this.state.stateName,
            zipCode: this.state.zipCode,
            logo: this.state.logo
          })
            .then(res => this.loadAccount())
            .catch(err => console.log(err));
        }
      };


      render () {
          return (
            <Container fluid>
              <Row>
                <h1>Login</h1>
              </Row>
               <Row>
                 <Col size="md-12">
                  <form>
                    <Input
                        value={this.state.businessName}
                        onChange={this.handleInputChange}
                        name="businessName"
                        placeholder="Business Name (required)"
                      />
                    <Input
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                        placeholder="Email (required)"
                      />
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="8 characters (required)"
                    />
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="8 characters (required)"
                    />
                    
                      <FormBtn
                        disabled={
                          !(
                            this.state.businessName &&
                            this.state.phoneNumber &&
                            this.state.email
                          )
                        }
                        onClick={this.handleFormSubmit}
                      >
                        Cancel
                      </FormBtn>
                      <FormBtn
                        disabled={
                          !(
                            this.state.businessName &&
                            this.state.phoneNumber &&
                            this.state.email
                          )
                        }
                        onClick={this.handleFormSubmit}
                      >
                        Save
                      </FormBtn>

                  </form>
                </Col>
              </Row>
          </Container>
          )
      }
    
}

export default Account;

