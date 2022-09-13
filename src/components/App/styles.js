import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const PageContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: stretch;
  padding: 0;
  width: 100%;
`;

export const RouteContainer = styled.div`
  margin: 2.5em 16em 3em 16em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media(max-width: 400px){
    margin: 1em;
  }
`;
