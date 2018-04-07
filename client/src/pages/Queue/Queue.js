import React, { Component } from 'react';
import styled from 'styled-components';
import {
  SampleLogo,
} from '../../components/Styled/Styled.js';
import NewReservation from '../../components/NewReservation';
import CustomerQueue from '../../components/CustomerQueue';
import Nav from '../../components/Nav';
import Counter from '../../components/Counter';
import API from '../../utils/API';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: 'Assistant', sans-serif;
  font-size: 20px;
`;

const Container1 = styled.div`
`;

const Container2 = styled.div`
display: flex;
margin: 0;
justify-content: space-between;
align-items: center;
height: 380px;
background: url('https://s3-us-west-1.amazonaws.com/uqueue/assets/Screen+Shot+2018-04-05+at+9.19.00+PM.png');
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
        <Container2>
          <SampleLogo src={require('../../assets/samplelogo.svg')} alt="sample restuarant logo" />
          <Counter />
          <Container1>
            <NewReservation onClick={this.handleFormSubmit} />
          </Container1>
        </Container2>
        <CustomerQueue />
      </Wrapper>
    );
  }
}

export default Queue;
