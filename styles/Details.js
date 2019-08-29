import styled from 'styled-components';

const StyledDetails = styled.section`
  width: 100%;
  height: 100vh;
  padding: 0 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background-color: #f6f7fb;
  background-image: url('https://res.cloudinary.com/dolkj0n9t/image/upload/v1567116409/trello-netguru-remix/details-bg.png');
  background-size: cover;
  .text {
    width: 48rem;
  }
  .heading-secondary {
    font-family: 'Poppins', sans-serif;
    font-size: 2.4rem;
    font-weight: 600;
    color: #3d4568;
    line-height: 1.2;
    margin-bottom: 1.6rem;
    letter-spacing: 1px;
  }
  .copy {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    margin-bottom: 2.4rem;
    color: #3d4568;
  }
`;

export default StyledDetails;
