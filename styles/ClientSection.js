import styled from 'styled-components';

const StyledClientSection = styled.section`
  width: 100%;
  height: 65vh;
  padding-top: 4.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  background-image: linear-gradient(to bottom, rgba(27, 35, 54, 0.7), rgba(27, 35, 54, 0.7)),
    url('https://res.cloudinary.com/dolkj0n9t/image/upload/v1567116410/trello-netguru-remix/client-bg.jpg');
  background-position: center;
  background-size: cover;

  .form {
    width: 86rem;
    height: 32rem;
    padding: 2.4rem;
    z-index: 2;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr min-content 1fr;
    grid-gap: 8px 16px;
    grid-template-areas:
      'heading heading'
      'email password'
      'terms terms'
      'submit submit';
    place-items: center;
    background-color: #fff;
    border: none;
    border-radius: 2px;

    &__heading {
      width: 100%;
      grid-area: heading;
    }
    &__field {
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      &--label {
        display: inline-block;
        height: 4.8rem;
        width: 4.8rem;
        background-color: #f9f9f9;
        border: 1px solid #e3e3e8;
        border-right: none;
        border-radius: 2px 0 0 2px;
      }
      &--icon {
        margin: 1.4rem auto;
        width: 2rem;
        color: #4680ff;
      }
      &--input {
        height: 4.8rem;
        width: 25rem;
        padding: 1.6rem;
      }
    }

    &__button {
      grid-area: submit;
      margin-top: 1.6rem;
      height: 4.8rem;
      width: 19.2rem;
    }
    .agreement__text {
      font-family: 'Poppins', sans-serif;
      color: #9ea5aa;
      font-size: 1.4rem;
      width: 100%;
      grid-area: terms;
      &--bold {
        font-family: 'Poppins', sans-serif;
        color: #4680ff;
        font-weight: 700;
        cursor: pointer;
        letter-spacing: 0.5px;
      }
    }
  }
`;

export default StyledClientSection;
