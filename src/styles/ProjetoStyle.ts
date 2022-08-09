import styled from 'styled-components';

export const ProjetoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    padding: 0.5rem;

    p {
      color: ${({ theme }) => theme.secondary};
      font-size: 1.5rem;
      text-align: justify;

      > a {
        color: ${({ theme }) => theme.primary};
      }
    }

    > button {
      width: 15rem;
      height: 3rem;
      border-radius: 20rem;
      margin-top: 1.5rem;
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

      > a {
        color: ${({ theme }) => theme.secondary};
      }

      @media (max-width: 700px) {
        margin-top: 5rem;
        grid-template-columns: 1fr;

        > button {
          flex-direction: center;
        }
      }

      @media (max-width: 450px) {
        > button {
          padding: 0.8rem 1.5rem;
          font-size: 1rem;
        }
      }
    }

    @media (max-width: 700px) {
      padding: 0 2.5rem;

      p {
        font-size: 1rem;
      }

      button {
        padding: 0.7rem 2rem;

        a {
          font-size: 0.9rem;
        }
      }
    }
  }
`;
