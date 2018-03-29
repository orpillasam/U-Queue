import React, { Component } from 'react';
import DeleteBtn from '../../components/DeleteBtn';
import { Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';
import API from '../../utils/API';
import { Col, Row } from '../../components/Grid';
import {
  NavBar,
  Container,
  Label,
  Input,
  SubHeader,
  Logo,
  Button,
  LoginButton,
  SignUpSection,
  ButtonSection
} from '../../components/Styled/Styled.js';
import indexCSS from '../index.css';

class QueueHistory extends Component {
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
      <div>
      <NavBar> 
        <ul>
          <li>
          <Clock className="clock" format={'hh:mm:ss:A'} ticking={true} timezone={'US/Pacific'} /> 
          </li>
          <li>
            <a href="/">
            Home
            </a>
          </li>
          <li>  
            <a href="/queuehistory">
            History
            </a>
          </li>
          <li>
            <a href="/newaccount">
            Create Account
            </a>
          </li>
          <li>
            <a href="/login">
            Log Out
            </a>
          </li>
        </ul>
      </NavBar>
      <Container fluid>
        <Row>
          <h1 className="text-center">History View</h1>
        </Row>
        <Row>
          <Col size="sm-12">
            <Jumbotron className="text-center">
              <h2>Queue History</h2>
            </Jumbotron>
            {this.state.queue.length ? (
              <ListGroup>
                {this.state.queue.map(guest => (
                  <ListGroupItem key={guest._id}>
                    <strong>
                      {guest.firstName} {guest.lastName} Party of{' '}
                      {guest.partySize}, {guest.notes}
                    </strong>
                    <DeleteBtn onClick={() => this.deleteGuest(guest._id)} />
                  </ListGroupItem>
                ))}
              </ListGroup>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    </div>
    );
  }
}

export default QueueHistory;
