import React, { Component } from 'react';
import styled from 'styled-components';
import NewReservation from '../../components/NewReservation';
import CustomerQueue from '../../components/CustomerQueue';
import Nav from '../../components/Nav';
import Counter from '../../components/Counter';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Container1 = styled.div`
  
`;


class Queue extends Component {
  render() {
    return (
      <Wrapper>
        <Nav />
        <Counter />
        <Container1>
          <NewReservation onClick={this.handleFormSubmit} />
        </Container1>
        <CustomerQueue />
      </Wrapper>
    );
  }
}

export default Queue;
