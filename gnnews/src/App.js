import { Header } from './Header';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectView } from './getData/newsSlice';
import { Footer } from './Footer';
import { Grid, List } from './MainContent';

function App() {
  const view = useSelector(selectView);

  return (
    <>
      <HashRouter>
        <ThemeProvider
          theme={theme}
        >
          <GlobalStyle />
          <Routes>
            <Route
              path="/country/:id"
              element={
                view === "list" ? <List /> : <Grid />
              }
            />
            <Route
              path="/"
              element={
                <Navigate
                  to={"/country/pl"}
                />}
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