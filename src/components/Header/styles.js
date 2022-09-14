import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 8px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 600px) {
    margin-bottom: 8px;
  }

  img {
    width: 600px;
    @media(max-width: 600px) {
      width: 400px;
    }

    @media(max-width: 400px) {
      width: 300px;
    }
  }
`;
