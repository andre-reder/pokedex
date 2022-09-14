import styled from 'styled-components';

export const PageHeader = styled.header`
  margin-top: 8px;
  @media(max-width: 400px){
    margin-top: 2.5em;
  };

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 7%;
    background: ${({ theme }) => theme.colors.background};

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }

    img {
      margin-right: 8px;
      transform: rotate(-90deg);
    }
  }

  h1 {
    font-size: 16px;
  }
`;

export const Container = styled.div`
  margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
  width: 100%;
  @media(max-width: 400px){
    margin-top: 2.5em;
  };

  input {
    width: 100%;
    background: ${({ theme }) => theme.colors.lighterBackground};
    color: ${({ theme }) => theme.colors.gray[900]};
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
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin-top: 32px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
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

export const ListHeader = styled.header`
  margin-top: 24px;
  margin-bottom: 8px;
    button {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;

      span {
        margin-right: 8px;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary.main};
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
  justify-content: space-between;
  width: 100%;

  & + & {
    margin-top: 16px !important;
  }

  .info {
    .card-title {
      display: flex;
      align-items: center;
    }
  }

  .actions {
    display: flex;
    align-items: center;

    img {
      width: 32px;
      &:hover{
        // padding: 2px 0;
        opacity: 0.5;
        transition: ease-in 0.2s;
      }
      &:not(:hover) {
        opacity: 1;
        transition: ease-in 0.2s;
      }
    }

    a {
      background: transparent;
      border: none;
      width: 23px;
      height: 23px;
      margin-right: 8px;
      }
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  .details {
    margin-left: 24px;

    strong {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.danger.main};
      display: block;
      margin-bottom: 8px;
    }
  }
`;

export const EmptyListContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.gray[200]};
    text-align: center;
    margin-top: 8px;

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const SearchNotFoundContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: flex-start;

  span {
    margin-left: 24px;
    color: ${({ theme }) => theme.colors.gray[200]};
    word-break: break-word;
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
`;
