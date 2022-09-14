import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 8px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 600px) {
    margin-bottom: 8px;
  }

  img {
    width: 500px;
    @media(max-width: 600px) {
      width: 350px;
    }

    @media(max-width: 400px) {
      width: 250px;
    }
  }
`;
