import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0.9375rem;
    font-family: 'Sora', sans-serif;
  }

  button {
    border: none;
    background: transparent;
    img {
      width: 100%;
      padding: 1em;
    }
  }

  a {
      text-decoration: none;
      background: none;
      color: ${({ theme }) => theme.colors.yellow[900]};
      width: fit-content;
        &:hover {
          color: ${({ theme }) => theme.colors.yellow[900]}
        }
      }
  
  .disabledLink {
    opacity: 0.5 !important;
    cursor: not-allowed !important;
  }

  h1 {
    margin: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.yellow[900]};
    transition: background-color .3s;
  }

  button {
    cursor: pointer;
  }

  .col {
      margin-top: 16px;
    }

  .darkMode {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 0.5em;

    input.form-check-input {
      width: 2em;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%2867, 89, 113, 0.3%29'/%3e%3c/svg%3e");
      background-position: left center;
      border-radius: 2em;
      transition: background-position 0.15s ease-in-out;

      &:focus {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%2867, 89, 113, 0.3%29'/%3e%3c/svg%3e");
        box-shadow: none;
      }

      &:checked {
        background-position: right center;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
        background-color: ${({ theme }) => theme.colors.primary.main};
      }
    }

    label.form-check-label {
      margin-left: 10px;

      img {
        width: 50%;
      }
  }
}

  img.rightArrow {
    transform: rotate(90deg);
    width: 24px;
  }

  img.leftArrow {
    transform: rotate(-90deg);
    width: 24px;
  }

  .page-item {
    .page-link {
      padding: 4px 8px;
    }
  }

  img.interrogationImage {
    width: 50px;
    margin-top: 16px;
  }
`;
