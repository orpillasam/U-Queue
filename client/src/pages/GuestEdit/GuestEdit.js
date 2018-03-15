import React, { Component } from 'react';
import DeleteBtn from '../../components/DeleteBtn';
import { Jumbotron, Table, ListGroup, ListGroupItem } from 'react-bootstrap';
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/Grid';
import { Input, FormBtn } from '../../components/Form';

class GuestEdit extends Component {
  state = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    partySize: '',
    email: '',
    notes: '',
    queuePosition: ''
  };

  componentDidMount() {
    this.loadGuest();
  }

  loadGuest = () => {
    API.getGuest()
      .then(res =>
        this.setState({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          notes: '',
          partySize: '',
          email: '',
          seated: Boolean,
          moveUp: Boolean,
          moveDown: Boolean,
          queuePosition: ''
        })
      )
      .catch(err => console.log(err));
  };

  deleteGuest = id => {
    API.deleteGuest(id)
      .then(res => this.loadQueue())
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
    if (
      this.state.firstName &&
      this.state.phoneNumber &&
      this.state.partySize
    ) {
      API.saveGuest({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        partySize: this.state.partySize,
        notes: this.state.notes
      })
        .then(res => this.loadQueue())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <h1 className="text-center">Edit Guest</h1>
        </Row>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h2 className="text-center">Edit Guest</h2>
            </Jumbotron>
            <form>
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name (required)"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name (optional)"
              />
              <Input
                value={this.state.phoneNumber}
                onChange={this.handleInputChange}
                name="phoneNumber"
                placeholder="Phone Number (required)"
              />
              <Input
                value={this.state.partySize}
                onChange={this.handleInputChange}
                name="partySize"
                placeholder="Party Size (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="email (optional)"
              />
              <textarea
                value={this.state.notes}
                onChange={this.handleInputChange}
                name="notes"
                placeholder="Comments (optional)"
              />
              <FormBtn
                disabled={
                  !(
                    this.state.firstName &&
                    this.state.phoneNumber &&
                    this.state.partySize
                  )
                }
                onClick={this.handleFormSubmit}
              >
                Reserve a Table
              </FormBtn>
            </form>
          </Col>
         
        </Row>
      </Container>
    );
  }
}

export default GuestEdit;
