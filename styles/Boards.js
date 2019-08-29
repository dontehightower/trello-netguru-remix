import styled from 'styled-components';

const StyledBoards = styled.section`
  width: 100%;
  height: 100vh;
  padding-left: 12rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  background-image: url('https://res.cloudinary.com/dolkj0n9t/image/upload/v1567116398/trello-netguru-remix/boards-bg.png');
  background-size: cover;

  .text {
    width: 56rem;
  }
  .copy {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    margin-bottom: 2.4rem;
    color: #3d4568;
  }

  .heading-secondary {
    font-family: 'Poppins', sans-serif;
    font-size: 2.4rem;
    font-weight: 600;
    color: #3d4568;
    line-height: 1.2;
    margin-bottom: 1.6rem;
    letter-spacing: 0.5px;
  }
`;

export default StyledBoards;
