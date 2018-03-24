import React, { Component } from 'react';
import DeleteBtn from '../../components/DeleteBtn';
import { Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/Grid';
import { Input, FormBtn } from '../../components/Form';

class CustomerSearch extends Component {
  state = {
    guest: [],
    firstName: '',
    lastName: '',
    phoneNumber: '',
    partySize: '',
    notes: '',
    queuePosition: ''
  };

//   componentDidMount() {
//     this.loadQueue();
//   }

  loadQueue = () => {
    API.getQueue()
      .then(res =>
        this.setState({
          queue: res.data,
          firstName: '',
          lastName: '',
          phoneNumber: '',
          notes: '',
          partySize: '',
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
    console.log(event);
    console.log(this.state);
    if (
      this.state.firstName
    ) {
      console.log('first request');
      API.getGuest({
        firstName: this.state.firstName,
        // lastName: this.state.lastName,
        // phoneNumber: this.state.phoneNumber,
        // partySize: this.state.partySize,
        // notes: this.state.notes,
        // queuePosition: this.state.queue.length + 1
      })
      .then(res =>
        this.setState({
          guest: res.data,
          firstName: '',
          lastName: '',
          phoneNumber: '',
          notes: '',
          partySize: '',
          seated: Boolean,
          moveUp: Boolean,
          moveDown: Boolean,
          queuePosition: ''
        })
      )
      .catch(err => console.log(err));
      console.log(this.firstName);
      console.log(this.guest);
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <h1 className="text-center host-head">Customer Search</h1>
        </Row>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h2 className="text-center host-head">Customer Search</h2>
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
                value={this.state.notes}
                onChange={this.handleInputChange}
                name="notes"
                placeholder="Comments (optional)"
              />
              <FormBtn
                // disabled={
                //   !(
                //     this.state.firstName &&
                //     this.state.phoneNumber &&
                //     this.state.partySize
                //   )
                // }
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col> 
          <Col size="md-6 sm-12">
            <Jumbotron className="text-center">
              {/* <h2 className="host-head">
                Current Queue: {this.state.queue.length}
              </h2> */}
            </Jumbotron>
             {this.state.guest.length ? (
              <ListGroup>
                {this.state.guest.map(search => (
                  <ListGroupItem key={search._id}>
                    <strong>
                      {search.firstName} {search.lastName}, Party of{' '}
                      {search.partySize}, {search.notes}
                    </strong>
                    <DeleteBtn
                      onClick={() => {
                        this.deleteGuest(search._id);
                      }}
                    />
                  </ListGroupItem>
                ))}
              </ListGroup>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CustomerSearch;
