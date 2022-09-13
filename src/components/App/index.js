import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import darkTheme from '../../assets/styles/themes/dark';
import moon from '../../assets/images/icons/moon.svg';
import Routes from '../../Routes';
import { Container, PageContainer, RouteContainer } from './styles';

export default function App() {
  const [theme, setTheme] = useState(defaultTheme);

  function handleThemeChange(event) {
    if (event.target.checked) {
      setTheme(darkTheme);
    } else {
      setTheme(defaultTheme);
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <PageContainer>
          <RouteContainer>
            <div className="darkMode">
              <input className="form-check-input" type="checkbox" onChange={handleThemeChange} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><img src={moon} alt="darkmode" /></label>

            </div>
            <Routes />
          </RouteContainer>
        </PageContainer>
      </Container>

    </ThemeProvider>
  );
}
