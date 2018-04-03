import React, { Component } from 'react';
import styled from 'styled-components';
import NewReservation from '../../components/NewReservation';
import Icons from '../../components/Icons';
import CustomerQueue from '../../components/CustomerQueue';
import API from '../../utils/API';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Container1 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Container2 = styled.div`
  display: flex;
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
        <Container1>
        <p>
				Welcome back, <strong>sam </strong>
			</p>
          <NewReservation onClick={this.handleFormSubmit} />
          <Icons />
        </Container1>
        <Container2>
          <CustomerQueue />
        </Container2>
      </Wrapper>
    );
  }
}

export default Queue;
