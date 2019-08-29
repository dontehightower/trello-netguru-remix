import styled from 'styled-components';

const StyledHero = styled.section`
  position: relative;
  display: flex;
  height: 100vh;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  .hero {
    &__heading-primary {
      font-family: 'Poppins', sans-serif;
      width: 80rem;
      font-size: 3.6rem;
      font-weight: 600;
      line-heigth: 1.2;
      margin-bottom: 3rem;
      letter-spacing: 1px;
      color: #fff;
    }

    &__tagline {
      font-family: 'Poppins', sans-serif;
      width: 65rem;
      font-size: 1.6rem;
      line-height: 1.5;
      margin-bottom: 3rem;
      color: #fff;
    }
  }
`;

export default StyledHero;
