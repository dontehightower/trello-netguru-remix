import React from 'react';
import Button from './Button';
import StyledBoards from '../styles/Boards.js';

const Boards = () => (
  <StyledBoards>
    <div className="text">
      <img
        src="/static/boards.svg"
        alt="Boards Icon"
        style={{ width: '5rem', marginBottom: '2.4rem' }}
      />
      <h2 className="heading-secondary">Boards</h2>
      <p className="copy">
        Every board gets assigned an individual and universal colour. Thanks to this, you can
        conveniently navigate all the different projects.
      </p>
      <Button>Find Out More</Button>
    </div>
  </StyledBoards>
);

export default Boards;
