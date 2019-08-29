import React from 'react';
import Button from './Button';
import StyledDetails from '../styles/Details';
import Copy from '../styles/Copy';

const Details = () => (
  <StyledDetails>
    <div className="text">
      <img
        src="/static/details.svg"
        alt="Details Icon"
        style={{ width: '5rem', marginBottom: '2.4rem' }}
      />
      <h2 className="heading-secondary">Details</h2>
      <Copy>
        You can now conveniently check the global number of tasks or see the most active users.
        There's also a special individual summary view just for you, which gives you an overview of
        your recent tasks.
      </Copy>
      <Button>Find Out More</Button>
    </div>
  </StyledDetails>
);

export default Details;
