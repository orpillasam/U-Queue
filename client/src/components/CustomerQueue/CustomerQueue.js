import React, { Component } from 'react';
import API from '../../utils/API';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h2`
  font-family: Assistant;
`;

const MenuBackground = styled.div`
  height: 100px;
  background-color: #708090;
  flex: 0 0 100px;
`

const Delete = styled.button`
  background: url('https://s3-us-west-1.amazonaws.com/uqueue/assets/delete-1.png');
  background-repeat: no-repeat;
  border: none;
  width: 29px;
  height: 29px;
`;

const List = styled.li`
  padding-left: 20px;
  font-family: Assistant;
  font-weight: bold;
  list-style-type: none;
`;

const ListGroup = styled.div`
flex: 0 0 500px;
`;

class CustomerQueue extends Component {
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

  removeGuestFromQueue = id => {
    API.removeGuestFromQueue(id)
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
        <MenuBackground />
        {this.state.queue.length ? (
          <ListGroup>
            {this.state.queue.map(guest => (
              <List key={guest._id}>
                <strong>
                  {guest.firstName} {guest.lastName}, Party of {guest.partySize},{' '}
                  {guest.notes}
                </strong>
                <Delete
                  onClick={() => {
                    this.removeGuestFromQueue(guest._id);
                  }}
                />
              </List>
            ))}
          </ListGroup>
        ) : (
          <Header> No Results to Display</Header>
        )}
      </Container>
    );
  }
}

export default CustomerQueue;
