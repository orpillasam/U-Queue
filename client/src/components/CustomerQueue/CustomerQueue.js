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
  justify-content: space-between;
  border-radius: 10px;
  margin: 15px;
`;

const QueueItem = styled.div`
  font-size: 15px;
  text-align: center;
  padding-top: 15px;
  flex: 0 1 50px;
  height: 35px;
`;

const FirstName= styled.div`
  font-size: 15px;
  text-align: center;
  padding-top: 15px;
  flex: 0 1 115px;
  height: 35px;
`;

const LastName = styled.div`
  font-size: 15px;
  text-align: center;
  padding-top: 15px;
  flex: 0 1 150px;
  height: 35px;
`

const PartySize = styled.div`
  font-size: 15px;
  text-align: center;
  padding-top: 15px;
  flex: 0 0 30px;
  height: 35px;
  margin-left: 20px;
`
const PhoneNumber = styled.div`
  font-size: 15px;
  text-align: center;
  padding-top: 15px;
  flex: 0 0 125px;
  height: 35px;
  margin-left: 25px;
`

const SeatedQueueItem = styled.div`
  font-size: 15px;
  text-align: center;
  padding-top: 15px;
  flex: 0 1 50px;
  height: 35px;
`;

const NotifyQueueItem = styled.div`
  font-size: 15px;
  text-align: center;
  padding-top: 15px;
  flex: 0 1 50px;
  height: 35px;
  margin-left: 40px;
`;

const DeleteQueueItem = styled.div`
  font-size: 15px;
  text-align: center;
  padding-top: 15px;
  flex: 0 1 50px;
  height: 35px;
  margin-right: 30px;
`;

const Notes = styled.div`
  font-size: 15px;
  text-align: center;
  padding-top: 15px;
  flex: 0 0 120px;
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
                  <FirstName>{guest.firstName}</FirstName>
                  <LastName>{guest.lastName}</LastName>
                  <PartySize>{guest.partySize}</PartySize>
                  <PhoneNumber>{guest.phoneNumber}</PhoneNumber>
                  <SeatedQueueItem>
                    <Seated
                        onClick={() => {
                          this.notifyGuest(guest._id);
                        }}
                      />
                  </SeatedQueueItem>
                  <NotifyQueueItem>
                    <Notify
                      onClick={() => {
                        this.notifyGuest(guest._id);
                      }}
                    />
                  </NotifyQueueItem>
                  <Notes>{guest.notes}</Notes>
                  <DeleteQueueItem>
                    <Delete
                      onClick={() => {
                        this.removeGuest(guest._id);
                      }}
                    />
                  </DeleteQueueItem>
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
