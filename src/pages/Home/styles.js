import styled from "styled-components";

export const Container = styled.div`
  align-items: center;

  background-color: #FFFFFF;

  display: flex;

  height: 100vh;

  justify-content: center;

  max-width: 425px;

  width: 100vw;
`;

export const Content = styled.div`
  align-items: center;

  background-color: #FFFFFF;

  border: 2px solid #9c3f3a;

  display: flex;

  flex-direction: column;

  height: 90%;

  justify-content: center;

  width: 80%;

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
