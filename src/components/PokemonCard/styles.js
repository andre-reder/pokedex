import styled from 'styled-components';

export const PokemonImagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PokemonTypeImagesContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 24px;
    margin: 1px 3px;
  }
`;
