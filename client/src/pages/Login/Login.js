import React, { Component } from 'react';
import { Jumbotron, Table, ListGroup, ListGroupItem } from 'react-bootstrap';
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/Grid';
import { Input, FormBtn } from '../../components/Form';

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
            <Container fluid>
              <Row>
                <h1>Login</h1>
              </Row>
               <Row>
                 <Col size="md-12">
                  <form>
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
                      <FormBtn>

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
                      <a href='url'>Forgot password?</a>

                  </form>
                </Col>
              </Row>
          </Container>
          )
      }
    
}

export default Login;

