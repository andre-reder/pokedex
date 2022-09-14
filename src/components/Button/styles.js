import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  height: 24px;
  padding: 0 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary.main};
  background: ${({ theme, selected }) => (selected ? theme.colors.primary.main : theme.colors.background)};
  font-size: 12px;
  box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  color: ${({ theme, selected }) => (selected ? theme.colors.lighterBackground : theme.colors.primary.main)};
  border-radius: 4px;
  transition: all 0.2s ease-in;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
  margin-left: 2px;

  &:hover {
        background: ${({ theme, selected }) => (selected ? theme.colors.primary.background : theme.colors.primary.main)};
        color: ${({ theme }) => (theme.colors.lighterBackground)};
      }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    cursor: default !important;
  }

  ${({ theme, danger }) => (
    danger && css`
      background: ${theme.colors.danger.main};

  &:hover {
    background: ${theme.colors.danger.light};
  }

  &:active {
    background: ${theme.colors.danger.dark};
  }
    `
  )}
`;
