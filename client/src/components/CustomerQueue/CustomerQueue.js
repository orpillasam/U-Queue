import React, { Component } from 'react';
import { Table, thead, tbody, tr, td } from 'react-bootstrap';
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
`;

const Delete = styled.button`
  background: url('https://s3-us-west-1.amazonaws.com/uqueue/assets/delete-1.png');
  background-repeat: no-repeat;
  border: none;
  width: 29px;
  height: 29px;
`;
const Notify = styled.button`
  background: url('https://s3-us-west-1.amazonaws.com/uqueue/assets/3-layers.png');
  background-repeat: no-repeat;
  background-color: grey;
  border: none;
  width: 30px;
  height: 30px;
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
        <MenuBackground />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Party Size</th>
              <th>Phone</th>
              <th>Seated</th>
              <th>Notify</th>
              <th>Notes</th>
              <th>Remove</th>
            </tr>
          </thead>
          {this.state.queue.length ? (
            <tbody>
              {this.state.queue.map(guest => (
                <tr>
                  <td>{guest.firstName}</td>
                  <td>{guest.lastName}</td>
                  <td>{guest.partySize}</td>
                  <td>{guest.phoneNumber}</td>
                  <td>{guest.seated}</td>
                  <td>
                    <Notify
                      onClick={() => {
                        this.notifyGuest(guest._id);
                      }}
                    />
                  </td>
                  <td>{guest.notes}</td>
                  <td>
                    <Delete
                      onClick={() => {
                        this.removeGuest(guest._id);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Table>
      </Container>
    );
  }
}

export default CustomerQueue;
