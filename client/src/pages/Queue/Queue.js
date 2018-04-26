import React, { Component } from 'react';
import styled from 'styled-components';
import NewReservation from '../../components/NewReservation';
import CustomerQueue from '../../components/CustomerQueue';
import Nav from '../../components/Nav';
import Sidebar from '../../components/Sidebar';
import Counter from '../../components/Counter';
import API from '../../utils/API';

const Wrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  font-family: 'Assistant', sans-serif;
  font-size: 20px;
`;

const Container1 = styled.div`
  display: flex;
  flex: 1 1 800px;
  justify-content: space-between;
  background: #f7f7f7;
`;


class Queue extends Component {

  componentDidMount() {
    API.getUserAccount().then(response => {
			console.log(response.data)
			if (!!response.data.account) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					account: response.data.account
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
  }
  
  render() {
    return (
      <Wrapper>
        <Nav />
        <Container1>
          <Sidebar />
          <CustomerQueue />
          <NewReservation onClick={this.handleFormSubmit} />
        </Container1>
      </Wrapper>
    );
  }
}

export default Queue;
