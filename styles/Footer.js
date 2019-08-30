import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #1b2336;

  .list {
    margin-bottom: 8rem;
    width: 64rem;
    display: flex;
    justify-content: space-between;
    list-style: none;
  }

  .link {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    color: #ddd;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      color: #fff;
    }
  }
`;

export default StyledFooter;
