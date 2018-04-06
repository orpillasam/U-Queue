import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import API from '../../utils/API';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 80px;
  margin-bottom: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid #66cdaa 4px;
  border-radius: 10px;
  padding-top: 20%;
  padding-bottom: 20%;
  width: 200px;
`;

const QueueNumberCircle = styled.span`
  display: inline-block;
  line-height: 0px;
  background-color: #ff6347;
  border-radius: 50%;
  border: 2px solid #FF6347
  font-family: 'Quicksand', sans-serif;
  font-size:52px
  `;

const QueueNumberSpan = styled.span`
  font-family: 'Quicksand', sans-serif;
  display: inline-block;
  padding-top: 50%;
  padding-bottom: 50%;
  margin-left: 20px;
  margin-right: 20px;
`;

const Header = styled.h1`
  font-family: 'Quicksand', sans-serif;
  font-size: 24px;
  margin-top: 5px;
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
      <Wrapper>
        <Container>
          <QueueNumberCircle>
            <QueueNumberSpan>{this.state.queue.length}</QueueNumberSpan>
          </QueueNumberCircle>
          <Header>Guests in Queue</Header>
        </Container>
      </Wrapper>
    );
  }
}

export default Counter;
