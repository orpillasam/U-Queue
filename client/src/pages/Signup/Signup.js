import React, { Component } from 'react';
import { Jumbotron, Table, ListGroup, ListGroupItem } from 'react-bootstrap';
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/Grid';
import { Input, FormBtn } from '../../components/Form';

class Signup extends Component {
    state = {
        businessName: '',
        website: '',
        ownerName: '',
        email: '',
        password: ''
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
            password: ''
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
        if (this.state.businessName && this.state.email && this.state.password) {
          API.saveAccount({
            businessName: this.state.businessName,
            email: this.state.email,
            password: this.state.password
          })
            .then(res => this.loadAccount())
            .catch(err => console.log(err));
        }
      };


      render () {
          return (
            <Container fluid>
              <Row>
                <h1>Signup</h1>
              </Row>
               <Row>
                 <Col size="md-12">
                  <form>
                    <h4>*Business Name:</h4>
                    <Input
                        value={this.state.businessName}
                        onChange={this.handleInputChange}
                        name="businessName"
                        placeholder="Business Name (required)"
                      />
                    <h4>*Email:</h4>
                    <Input
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                        placeholder="Email (required)"
                      />
                    <h4>*Password:</h4>
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="8 characters (required)"
                    />
                    <h4>*re-type Password:</h4>
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
                        Sign up
                      </FormBtn>

                  </form>
                </Col>
              </Row>
          </Container>
          )
      }
    
}

export default Signup;

