import React, { Component } from 'react';
import API from '../../utils/API';
import styled from 'styled-components';
import NewReservation from '../../components/NewReservation';
import Counter from '../../components/Counter';
import Icons from '../../components/Icons';
import CustomerQueue from '../../components/CustomerQueue';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Container1 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Container2 = styled.div`
  display: flex;
`;

/*const Input = styled.input`
    color: #8FBC8B;
    font-size: 18px;
    background: #EBEDEF;
    margin-bottom: 15px;
    border: none;
    width: 500px;
    height: 30px;
    margin-left: 10px;
`;
const Button = styled.button`
    display: block;
    align: center;
    border-radius: 4px;
    height: 30px;
    background-color: #FF6347;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 12px;
    width: 100px;
    transition: all 0.5s;
    cursor: pointer;
    margin-top: 20px;
`;
const List = styled.li`
  font-weight: bold;
`
const ListGroup = styled.li`
`
const Reservation = styled.div`
`
const CustomerQueue = styled.div`
`
class Queue extends Component {
  state = {
    queue: [],
    firstName: '',
    lastName: '',
    phoneNumber: '',
    partySize: '',
    notes: '',
    queuePosition: ''
  };
  componentDidMount() {
    this.loadQueue();
  }
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
    if (
      this.state.firstName &&
      this.state.phoneNumber &&
      this.state.partySize
    ) {
      console.log('first request');
      API.saveGuest({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        partySize: this.state.partySize,
        notes: this.state.notes,
        queuePosition: this.state.queue.length + 1
      })
        .then(res => this.loadQueue())
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <Container>
          <h2 className="text-center host-head">Reserve a Table</h2>
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
            <Button
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
            </Button>
        </Reservation>
        
        <CustomerQueue>
          <h2 className="host-head">
            Current Queue: {this.state.queue.length}
          </h2>
            {this.state.queue.length ? (
              <ListGroup>
                {this.state.queue.map(guest => (
                  <List key={guest._id}>
                    <strong>
                      {guest.firstName} {guest.lastName}, Party of{' '}
                      {guest.partySize}, {guest.notes}
                    </strong>
                    <Button
                      onClick={() => {
                        this.deleteGuest(guest._id);
                      }}
                    />
                  </List>
                ))}
              </ListGroup>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </CustomerQueue>
      </Container>
    );
  }*/

class Queue extends Component {
  state = {
    queue: [],
    firstName: '',
    lastName: '',
    phoneNumber: '',
    partySize: '',
    notes: '',
    queuePosition: ''
  };
  componentDidMount() {
    this.loadQueue();
  }
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
    if (
      this.state.firstName &&
      this.state.phoneNumber &&
      this.state.partySize
    ) {
      console.log('first request');
      API.saveGuest({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        partySize: this.state.partySize,
        notes: this.state.notes,
        queuePosition: this.state.queue.length + 1
      })
        .then(res => this.loadQueue())
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <Wrapper>
        <Container1>
          <Counter />
          <NewReservation onClick={this.handleFormSubmit} />
          <Icons />
        </Container1>
        <Container2>
          <CustomerQueue />
        </Container2>
      </Wrapper>
    );
  }
}

export default Queue;
