import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

function App() {
  return (
    <>
      <ThemeProvider
        theme={theme}
      >
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;

