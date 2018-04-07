import React, { Component } from 'react';
import API from '../../utils/API';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid #66cdaa 4px;
  border-radius: 10px;
  width: 225px;
  height: 165px;
  background-color: black;;
  padding-top: 35px;
  margin-left: 370px;
  margin-right: 40px;
`;

const QueueNumberCircle = styled.span`
  display: inline-block;
  line-height: 0px;
  margin-bottom: 15px;
  font-family: 'Quicksand', sans-serif;
  font-size:52px
  color: #ff6347;
  text-align: center;
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
  color: #66cdaa;
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
