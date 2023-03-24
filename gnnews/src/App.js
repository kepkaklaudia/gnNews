import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Footer } from './Footer';

function App() {
  return (
    <>
      <ThemeProvider
        theme={theme}
      >
        <GlobalStyle />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;

