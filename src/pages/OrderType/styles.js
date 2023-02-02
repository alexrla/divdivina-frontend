import styled from "styled-components";

export const Container = styled.div`
  align-items: center;

  background-color: #FFFFFA;

  display: flex;

  flex-direction: column;

  height: 100vh;

  max-width: 100%;

  width: 425px;

  img {
    width: 200px;
  }
`;

export const Content = styled.div`
  align-items: center;

  display: flex;

  flex-direction: column;

  gap: 20px;

  justify-content: center;

  margin-top: -20px;

`;

export const Box = styled.div`
  align-items: center;

  background-color: #9c3f3a;

  border-radius: 16px;

  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  display: flex;

  flex-direction: column;

  gap: 25px;

  height: 300px;

  justify-content: center;

  text-align: center;
  
  width: 300px;

  .option1, .option2 {
    color: #FFF;

    font-family: 'Montserrat', sans-serif;

    font-size: 24px;
  }
`;