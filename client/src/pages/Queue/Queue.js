import React, { Component } from 'react';
import styled from 'styled-components';
import NewReservation from '../../components/NewReservation';
import Icons from '../../components/Icons';
import CustomerQueue from '../../components/CustomerQueue';

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
  render() {
    return (
      <Wrapper>
        <Container1>
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
