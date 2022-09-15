import styled from 'styled-components';

export const InputSearchContainer = styled.div`
  width: 100%;
  @media(max-width: 400px){
    margin-top: 2.5em;
  };

  input {
    width: 100%;
    background: ${({ theme }) => theme.colors.lighterBackground};
    color: ${({ theme }) => theme.colors.yellow[900]};
    border: none;
    border-radius: 25px;
    height: 50px;
    box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;
    margin-top: 8px;

    &::placeholder {
      color: #BCBCBC;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin-top: 32px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.yellow[100]};
  padding-bottom: 16px;

  strong {
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff
    }
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.lighterBackground};;
  box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: all 0.2s ease-in;

  & + & {
    margin-top: 16px !important;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.darkerBackground};
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  img {
    width: 104px;
  }

  .details {
    margin-left: 24px;

    strong {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.primary.main};
      display: block;
      margin-bottom: 8px;
    }
  }
`;

export const SearchNotFoundContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  span {
    margin-left: 24px;
    color: ${({ theme }) => theme.colors.yellow[200]};
    word-break: break-word;
  }

  img {
    width: 96px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const SecondaryButton = styled.button`
      color: ${({ theme, selected }) => (selected ? theme.colors.lighterBackground : theme.colors.primary.main)};
      background: ${({ theme, selected }) => (selected ? theme.colors.primary.main : theme.colors.background)};
      text-decoration: none;
      font-weight: bold;
      border: 1px solid ${({ theme }) => theme.colors.primary.main};
      padding: 2px;
      border-radius: 4px;
      transition: all 0.2s ease-in;
      font-size: 12px;
      height: 24px;
      width: 24px;
      margin: 3px;

      @media(max-width: 500px) {
        font-size: 9px;
        height: 20px;
        padding: 1px 2px;
  }

      &:hover {
        background: ${({ theme, selected }) => (selected ? theme.colors.primary.background : theme.colors.primary.main)};
        color: ${({ theme }) => (theme.colors.lighterBackground)};
      }

      &[disabled] {
        cursor: default !important;
      }
`;

export const ContainerGroup = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
