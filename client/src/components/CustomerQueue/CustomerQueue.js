import React, { Component } from 'react';
import API from '../../utils/API';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Delete = styled.button`
  background: url('https://s3-us-west-1.amazonaws.com/uqueue/assets/delete-1.png');
  background-repeat: no-repeat;
  border: none;
  width: 29px;
  height: 29px;
  margin-top: -4px;
`;

const Seated = styled.button`
  background: url('https://s3-us-west-1.amazonaws.com/uqueue/assets/rectangle-path.svg');
  background-repeat: no-repeat;
  border: none;
  width: 31px;
  height: 31px;
  margin-top: -5px;
`

const Notify = styled.button`
  background: url('https://s3-us-west-1.amazonaws.com/uqueue/assets/3-layers.png');
  background-repeat: no-repeat;
  border: none;
  width: 30px;
  height: 35px;
  margin-top: -8px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90px;
  background-color: #708090;
`;

const MenuItem = styled.div`
  color: white;
  font-family: Assistant;
  font-size: 18px;
`;

const QueueBody = styled.div`
  font-family: Assistant;
  color: white;
`;

const QueueRow = styled.div`
  background-color: #708090;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  margin: 15px;
`;

const QueueItem = styled.div`
  font-size: 15px;
  text-align: center;
  padding-top: 15px;
  flex: 0 0 100px;
  height: 35px;
`

const NoResults = styled.h3`
  font-family: Assistant;
  text-align: center;
`

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

  removeGuest = id => {
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
  notifyGuest = id => {
    API.getGuest(id)
      .then(res => this.loadQueue())
      .catch(err => console.log(err));
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
        <Menu>
              <MenuItem>First Name</MenuItem>
              <MenuItem>Last Name</MenuItem>
              <MenuItem>Party Size</MenuItem>
              <MenuItem>Phone</MenuItem>
              <MenuItem>Seated</MenuItem>
              <MenuItem>Notify</MenuItem>
              <MenuItem>Notes</MenuItem>
              <MenuItem>Remove</MenuItem>
        </Menu>
          {this.state.queue.length ? (
            <QueueBody>
              {this.state.queue.map(guest => (
                <QueueRow>
                  <QueueItem>{guest.firstName}</QueueItem>
                  <QueueItem>{guest.lastName}</QueueItem>
                  <QueueItem>{guest.partySize}</QueueItem>
                  <QueueItem>{guest.phoneNumber}</QueueItem>
                  <QueueItem>
                    <Seated
                        onClick={() => {
                          this.notifyGuest(guest._id);
                        }}
                      />
                  </QueueItem>
                  <QueueItem>
                    <Notify
                      onClick={() => {
                        this.notifyGuest(guest._id);
                      }}
                    />
                  </QueueItem>
                  <QueueItem>{guest.notes}</QueueItem>
                  <QueueItem>
                    <Delete
                      onClick={() => {
                        this.removeGuest(guest._id);
                      }}
                    />
                  </QueueItem>
                </QueueRow>
              ))}
            </QueueBody>
          ) : (
            <NoResults>No Results to Display</NoResults>
          )}
      </Container>
    );
  }
}

export default CustomerQueue;
