import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import API from '../../utils/API';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  margin-bottom: 20px;
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid #FFD700 4px;
  border-radius: 10px;
  padding: 25px 15px;
  width: 200px;
`;

const QueueNumber = styled.h2`
  font-family: 'Quicksand', sans-serif;
  background-color: #FF6347;
  text-align: center;
  color: white;
  font-size: 52px;
  border: none;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0;
`;

const Header = styled.h1`
  font-family: 'Quicksand', sans-serif;
  font-size: 24px;
  margin-top: 5px;
  margin-bottom: 0;
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
      <Wrapper>
      <Container>
        <QueueNumber>{this.state.queue.length}</QueueNumber>
        <Header>Guests in Queue</Header>
      </Container>
      </Wrapper>
    );
  }
}

export default Counter;