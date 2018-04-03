import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import API from '../../utils/API';
import styled from 'styled-components';


const Container = styled.section`
  display: flex;
  flex-direction: row;
  height: 125px;
  justify-content: flex-end;
  align-items: center;
`;


const Header = styled.h2`
  font-family: Assistant;
  text-align: center;
  padding-top: 10px;
  color: #66cdaa;
  font-size: 23px;
  font-weight: 400;
  border: 1px solid #969696;
  width: 136px;
  height: 80px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

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
        <Header>{this.state.queue.length} Guests in Queue </Header>
      </Container>
    );
  }
}

export default Counter;