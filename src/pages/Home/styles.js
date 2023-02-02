import styled from "styled-components";

export const Container = styled.div`
  align-items: center;

  background-color: #FFFFFA;

  display: flex;

  height: 100vh;

  justify-content: center;

  max-width: 100%;

  width: 425px;
`;

export const Content = styled.div`
  align-items: center;

  background-color: #FFFFFF;

  border: 2px solid #9c3f3a;

  display: flex;

  flex-direction: column;

  height: 90%;

  justify-content: center;

  max-width: 90%;

  width: 375px;

  img {
    margin-top: -50px;

    width: 300px;
  }

  p {
    color: #9c3f3a;

    font-family: 'Montserrat', sans-serif;

    margin-top: -70px;

    margin-bottom: 20px;
  }

  .pulse {
    animation: animate 1s linear infinite;
  }

  @keyframes animate {
    0% {
        transform: scale(2.0);
    }

    100% {
        transform: scale(1.5);
    }
  }
`;