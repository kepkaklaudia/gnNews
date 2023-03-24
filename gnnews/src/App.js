import { Header } from './Header';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './Footer';

function App() {
  return (
    <>
      <HashRouter>
        <ThemeProvider
          theme={theme}
        >
          <GlobalStyle />
          <Routes>
            <Route
              path="/"
              element={<>sth</>}
            />
          </Routes>
          <Header />
          <Footer />
        </ThemeProvider>
      </HashRouter>
    </>
  );
}

export default App;