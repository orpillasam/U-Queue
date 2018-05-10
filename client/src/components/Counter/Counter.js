import React, { Component } from 'react';
import API from '../../utils/API';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 300px;
  justify-content: space-evenly;
  margin-top: 70px;
  div:hover {
    background-color: #66CDAA;
  }
`;

const QueueNumber = styled.div`
  font-family: 'Assistant', sans-serif;
  font-size: 20px;
  color: white;
  font-weight: 100;
  padding-left: 20px;
  height: 50px;
  padding-top: 20px;
`;

const WaitTime = styled.div`
  font-family: 'Assistant', sans-serif;
  font-size: 20px;
  color: white;
  font-weight: 100;
  padding-left: 20px;
  height: 50px;
  padding-top: 20px;
`
const Seated = styled.div`
  font-family: 'Assistant', sans-serif;
  font-size: 20px;
  color: white;
  font-weight: 100;
  padding-left: 20px;
  height: 50px;
  padding-top: 20px;
`

const Turnover = styled.div`
  font-family: 'Assistant', sans-serif;
  font-size: 20px;
  color: white;
  font-weight: 100;
  padding-left: 20px;
  height: 50px;
  padding-top: 20px;
`

class Counter extends Component {
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
        <QueueNumber>GUESTS IN QUEUE: {this.state.queue.length}</QueueNumber>
        <WaitTime>CURRENT WAIT: 35 mins </WaitTime>
        <Seated>GUESTS SEATED: 13 </Seated>
        <Turnover>AVG. TURNOVER: 85 mins</Turnover>
      </Container>
    );
  }
}

export default Counter;
