import React, { Component } from 'react';
import DeleteBtn from '../../components/DeleteBtn';
import {
  Jumbotron,
  ListGroup,
  ListGroupItem,
  Table,
  thead,
  tbody,
  tr,
  td
} from 'react-bootstrap';
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/Grid';

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
    this.loadQueue();
  }

  loadQueue = () => {
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
    if (
      this.state.firstName &&
      this.state.phoneNumber &&
      this.state.partySize
    ) {
      API.saveGuest({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        partySize: this.state.partySize,
        notes: this.state.notes
      })
        .then(res => this.loadQueue())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <h1 className="text-center">History View</h1>
        </Row>
        <Row>
          <Col size="sm-12">
            <Jumbotron className="text-center">
              <h2>Queue History</h2>
            </Jumbotron>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Party Size</th>
                  <th>Phone</th>
                  <th>Seated</th>
                  <th>Notes</th>
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
                      <td>{guest.notes}</td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default QueueHistoryTable;
