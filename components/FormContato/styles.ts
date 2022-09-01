import styled from 'styled-components';

export const Container = styled.section``;

export const FormContainer = styled.form`
  margin-top: 8rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  > button {
    width: 15rem;
    height: 3rem;
    border-radius: 20rem;
    font-size: 15px;
    font-family: inherit;
    border-color: ${({ theme }) => theme.primary};
    position: relative;
    overflow: hidden;
    z-index: 1;
    color: ${({ theme }) => theme.secondary};

    &:disabled {
      opacity: 0.5;
    }

    &::before {
      content: '';
      width: 0;
      height: 3em;
      border-radius: 30em;
      position: absolute;
      top: 0;
      left: 0;
      background-image: linear-gradient(
        90deg,
        hsla(151, 89%, 89%, 1) 0%,
        hsla(190, 57%, 77%, 1) 50%,
        hsla(238, 54%, 81%, 1) 100%
      );

      transition: 0.5s ease;
      display: block;
      z-index: -1;
    }

    &:hover::before {
      width: 15rem;
    }

    @media (max-width: 700px) {
      margin-top: 5rem;
      grid-template-columns: 1fr;
    }

    @media (max-width: 450px) {
      > button {
        padding: 0.8rem 1.5rem;
        font-size: 1rem;
      }
    }
  }
`;

export const Input = styled.input`
  height: 3rem;
  width: 100%;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.secondary};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;
  display: flex;

  &:focus {
    border-color: ${({ theme }) => theme.secondary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.secondary};
  }

  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;

export const TextArea = styled.textarea`
  height: 10rem;
  width: 100%;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.secondary};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;
  resize: none;
  grid-column: 1 / 3;

  &:focus {
    border-color: ${({ theme }) => theme.secondary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.secondary};
  }

  @media (max-width: 700px) {
    grid-column: 1;
  }

  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;
