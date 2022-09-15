import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.lighterBackground};
  border-radius: 10px;
  padding: 4px 8px;
  box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.04);

  a {
    &:hover{
        opacity: 0.5;
        transition: ease-in 0.2s;
      }
      &:not(:hover) {
        opacity: 1;
        transition: ease-in 0.2s;
      }

      img {
        width: 20px;
        margin: 4px 16px;
      }
  }

  h1 {
    font-size: 20px;
    font-weight: bold;
  }
`;
