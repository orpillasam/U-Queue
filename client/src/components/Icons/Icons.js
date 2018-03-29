import React from 'react';
import styled from 'styled-components';

const Search = styled.button`
  background: url('https://s3-us-west-1.amazonaws.com/uqueue/assets/search.png');
  background-repeat: no-repeat;
  border: none;
  width: 42px;
  height: 42px;
`;
const Icons = props => {
  return <Search />;
};

export default Icons;
