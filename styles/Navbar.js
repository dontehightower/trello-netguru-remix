import styled from 'styled-components';

const StyledNavbar = styled.header`
  height: 7rem;
  width: 100%;
  padding: 0.8rem 2.4rem;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .header {
    &__logo {
      height: 2.4rem;
    }

    /* Center portion of the Navbar */
    &__list {
      list-style: none;
      width: 15rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      &--link {
        font-family: 'Poppins', sans-serif;
        text-decoration: none;
        font-size: 1.4rem;
        color: #fff;
      }
    }

    /* Links on the right (Login/Sign up) */
    &__cta {
      text-decoration: none;
      font-size: 1.4rem;
      color: #fff;
      &--secondary {
        font-size: 1.4rem;
        text-decoration: none;
        text-transform: uppercase;
        color: #fff;
        font-family: 'Poppins', sans-serif;
      }
      &--primary {
        text-decoration: none;
        background-color: #4680ff;
        font-family: 'Poppins', sans-serif;
        color: #fff;
        padding: 0.75rem 2.5rem;
        margin-left: 1.6rem;
        min-height: 4rem;
        border: none;
        border-radius: 2px;
        letter-spacing: 0.5px;
        font-weight: 600;
        text-transform: uppercase;
        cursor: pointer;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.225);
        &:hover {
          box-shadow: 0 4px 10px 0px rgba(0, 0, 0, 0.225);
        }
      }
    }
  }
`;

export default StyledNavbar;
