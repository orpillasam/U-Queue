import React, { Component } from 'react';
import API from '../../utils/API';
import styled from 'styled-components';
import Nav from '../../components/Nav';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-bottom: 400px;
`;

const Delete = styled.button`
  background: url('https://s3-us-west-1.amazonaws.com/uqueue/assets/delete-1.png');
  background-repeat: no-repeat;
  border: none;
  width: 29px;
  height: 29px;
  margin-top: -4px;
`;

const Seated = styled.div`
  background: url('https://s3-us-west-1.amazonaws.com/uqueue/assets/rectangle.png');
  background-repeat: no-repeat;
  border: none;
  width: 33px;
  height: 33px;
  margin-top: -5px;
`;

const Return = styled.button`
  background: url('https://s3-us-west-1.amazonaws.com/uqueue/assets/Notify2.png');
  background-repeat: no-repeat;
  border: none;
  width: 30px;
  height: 35px;
  margin-top: -6px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  height: 80px;
  background-color: #708090;
`;

const MenuItem = styled.div`
  color: white;
  font-family: Assistant;
  font-size: 18px;
`;

const QueueBody = styled.div`
  font-family: Assistant;
  color: #4a4a4a;
  div:hover {
    background-color: rgba(231, 231, 231, 0.95);
  }
`;

const QueueRow = styled.div`
  border-style: solid;
  border-color: #708090;
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  margin: 15px;
  div:hover {
    box-shadow: none;
  }
`;

// const QueueItem = styled.div`
//   font-size: 15px;
//   text-align: center;
//   padding-top: 10px;
//   flex: 0 1 50px;
//   height: 25px;
//   div:hover {
//     box-shadow: none;
//   }
// `;

const FirstName = styled.div`
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
  flex: 0 1 125px;
  height: 35px;
  margin-left: -25px;
`;

const PartySize = styled.div`
  font-size: 15px;
  text-align: center;
  padding-top: 15px;
  flex: 0 0 30px;
  height: 35px;
`;
const PhoneNumber = styled.div`
  font-size: 15px;
  text-align: center;
  padding-top: 15px;
  flex: 0 0 100px;
  height: 35px;
`;

const SeatedQueueItem = styled.div`
  font-size: 15px;
  text-align: center;
  padding-top: 15px;
  flex: 0 1 50px;
  height: 35px;
`;

const ReturnQueueItem = styled.div`
  font-size: 15px;
  text-align: center;
  padding-top: 15px;
  flex: 0 1 50px;
  height: 35px;
  margin-left: 30px;
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
  margin-right: -20px;
`;

const NoResults = styled.h3`
  font-family: Assistant;
  text-align: center;
`;

class QueueHistoryTable extends Component {
  state = {
    queue: [],
    firstName: '',
    lastName: '',
    phoneNumber: '',
    partySize: '',
    notes: '',
    seated: '',
    queuePosition: ''
  };

  componentDidMount() {
    this.loadQueueHistory();
  }

  loadQueueHistory = () => {
    API.getQueueHistory()
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

  moveToQueue = id => {
    API.moveGuest(id)
      .then(res => this.loadQueueHistory())
      .catch(err => console.log(err));
  };
  deleteGuest = id => {
    API.removeGuest(id)
      .then(res => this.loadQueueHistory())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Nav />
        <Menu>
          <MenuItem>First Name</MenuItem>
          <MenuItem>Last Name</MenuItem>
          <MenuItem>Party Size</MenuItem>
          <MenuItem>Phone</MenuItem>
          <MenuItem>Seated</MenuItem>
          <MenuItem>Return to Queue</MenuItem>
          <MenuItem>Notes</MenuItem>
          <MenuItem>Remove</MenuItem>
        </Menu>
        {this.state.queue.length ? (
          <QueueBody>
            {this.state.queue.map(guest => (
              <QueueRow key={guest._id}>
                <FirstName>{guest.firstName}</FirstName>
                <LastName>{guest.lastName}</LastName>
                <PartySize>{guest.partySize}</PartySize>
                <PhoneNumber>{guest.phoneNumber}</PhoneNumber>
                <SeatedQueueItem>
                  <Seated />
                </SeatedQueueItem>
                <ReturnQueueItem>
                  <Return
                    onClick={() => {
                      this.moveToQueue(guest._id);
                    }}
                  />
                </ReturnQueueItem>
                <Notes>{guest.notes}</Notes>
                <DeleteQueueItem>
                  <Delete
                    onClick={() => {
                      this.deleteGuest(guest._id);
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

export default QueueHistoryTable;
