import React from 'react';
import Button from './Button';
import StyledDetails from '../styles/Details';
const Details = () => (
  <StyledDetails>
    <div className="text">
      <img
        src="/static/details.svg"
        alt="Details Icon"
        style={{ width: '5rem', marginBottom: '2.4rem' }}
      />
      <h2 className="heading-secondary">Details</h2>
      <p className="copy">
        You can now conveniently check the global number of tasks or see the most active users.
        There's also a special individual summary view just for you, which gives you an overview of
        your recent tasks.
      </p>
      <Button>Find Out More</Button>
    </div>
  </StyledDetails>
);

export default Details;
