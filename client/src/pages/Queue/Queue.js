import React, { Component } from 'react';
import styled from 'styled-components';
import NewReservation from '../../components/NewReservation';
import CustomerQueue from '../../components/CustomerQueue';
import Nav from '../../components/Nav';
import Counter from '../../components/Counter';
import API from '../../utils/API';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Container1 = styled.div`
  
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
        <Counter />
        <Container1>
        <p>
				Welcome back, <strong>sam </strong>
			</p>
          <NewReservation onClick={this.handleFormSubmit} />
        </Container1>
        <CustomerQueue />
      </Wrapper>
    );
  }
}

export default Queue;
