import React, { Component } from 'react';
import { Input, TextArea, FormBtn } from '../../components/Form';

class Account extends Component {
    state = {
        businessName: '',
        phoneNumber: '',
        email: ''
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
            phoneNumber: this.state.phoneNumber,
            email: this.state.email
          })
            .then(res => this.loadAccount())
            .catch(err => console.log(err));
        }
      };

      render () {
          return (
            <Container fluid>
            <Row>
              <Col size="md-12">
                <Form>
                  <Input>
                      Type here!
                  </Input>
                  <FormBtn>
                      Submit
                  </FormBtn>
                </Form>
              </Col>
            </Row>
          </Container>
          )
      }
    
}

export default Account;