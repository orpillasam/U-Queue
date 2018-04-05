import React, { Component } from 'react';
import Modal from 'react-modal';
import API from '../../utils/API';
import styled from 'styled-components';

//NEW RESERVATION MODAL
//NEED TO ADD MODAL CODE
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  color: #8fbc8b;
  font-size: 18px;
  background: #ebedef;
  padding-left: 30px;
  margin-bottom: 15px;
  border: none;
  width: 500px;
  height: 30px;
  display: inline;
  margin-left: 10px;
`;

const Button = styled.button`
  align: center;
  border-radius: 4px;
  height: 30px;
  background-color: #ff6347;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 12px;
  width: 100px;
  transition: all 0.5s;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 20px;
`;

const Add = styled.button`
  background: url('https://s3-us-west-1.amazonaws.com/uqueue/assets/AddBtn.png');
  background-repeat: no-repeat;
  border: none;
  width: 42px;
  height: 42px;
  margin-right: 7px;
`;

const Search = styled.button`
  background: url('https://s3-us-west-1.amazonaws.com/uqueue/assets/search.png');
  background-repeat: no-repeat;
  border: none;
  width: 42px;
  height: 42px;
`;

class NewReservation extends Component {
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

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

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
        .then(this.closeModal())
        .then(res => this.loadQueue())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Wrapper>
        <Add onClick={this.openModal} />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={{
            content: {
              position: 'relative',
              height: '300px',
              width: '550px',
              top: '200px',
              left: '300px',
              right: '30px',
              bottom: '30px',
              border: '5px solid #ccc',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px'
            }
          }}
          contentLabel="Reservation Modal"
        >
          <Container>
            <Input
              value={this.state.firstName}
              onChange={this.handleInputChange}
              name="firstName"
              placeholder="First Name (required)"
            />
            <Input
              value={this.state.lastName}
              onChange={this.handleInputChange}
              name="lastName"
              placeholder="Last Name (optional)"
            />
            <Input
              value={this.state.phoneNumber}
              onChange={this.handleInputChange}
              name="phoneNumber"
              placeholder="Phone Number (required)"
            />
            <Input
              value={this.state.partySize}
              onChange={this.handleInputChange}
              name="partySize"
              placeholder="Party Size (required)"
            />
            <Input
              value={this.state.notes}
              onChange={this.handleInputChange}
              name="notes"
              placeholder="Comments (optional)"
            />
            <Button
              disabled={
                !(
                  this.state.firstName &&
                  this.state.phoneNumber &&
                  this.state.partySize
                )
              }
              onClick={this.handleFormSubmit}
            >
              Reserve Table
            </Button>
          </Container>
        </Modal>
        <Search />
      </Wrapper>
    );
  }
}

export default NewReservation;
