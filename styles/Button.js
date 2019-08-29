import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: 'Poppins', sans-serif;
  background-color: #4680ff;
  color: #fff;
  padding: 0.75rem 2.5rem;
  min-height: 4rem;
  border: none;
  border-radius: 2px;
  letter-spacing: 0.1rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.225);

  &:hover {
    box-shadow: 0 4px 10px 0px rgba(0, 0, 0, 0.225);
  }
`;

export default StyledButton;
