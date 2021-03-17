import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Ranchers&display=swap');

  width: 100%;
  height: 70px;
`;
export const Center = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
`;
export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;


`;
export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  p{
      font-size: 1.2rem;
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      text-align: center;
  }
`;
