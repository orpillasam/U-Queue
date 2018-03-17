import React from 'react';
import './SwapBtn.css';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SwapBtn = props => (
  <span className="swap-btn" {...props}>
    <i class="fas fa-exchange-alt" />
  </span>
);

export default SwapBtn;
