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
`;


const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 2px;
  border-color: grey;
`

const Thead = styled.thead`
  height: 100px;
  background-color: #708090;
  color: white;
  font-family: Assistant;
`

const Th = styled.th`
  height: 100px;
`

const Tbody = styled.tbody`
  text-align: center;
  font-family: Assistant;
`

const Td = styled.td`
  background-color: #ebedef;
  border-top: 30px solid white;  
  border-bottom: 30px solid white;

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
        <Table>
          <Thead>
            <tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Party Size</Th>
              <Th>Phone</Th>
              <Th>Seated</Th>
              <Th>Notify</Th>
              <Th>Notes</Th>
              <Th>Remove</Th>
            </tr>
          </Thead>
          {this.state.queue.length ? (
            <Tbody>
              {this.state.queue.map(guest => (
                <tr>
                  <Td>{guest.firstName}</Td>
                  <Td>{guest.lastName}</Td>
                  <Td>{guest.partySize}</Td>
                  <Td>{guest.phoneNumber}</Td>
                  <Td>{guest.seated}</Td>
                  <Td> placeholder</Td>
                  <Td>{guest.notes}</Td>
                  <Td>
                    <Delete
                      onClick={() => {
                        this.removeGuest(guest._id);
                      }}
                    />
                  </Td>
                </tr>
              ))}
            </Tbody>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Table>
      </Container>
    );
  }
}

export default CustomerQueue;
