import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './GlobalStyle';
import { selectView } from "../features/Header/Icons/viewSlice";
import { Grid, List } from '../features/MainContent';
import { Error } from "../common/Error"
import { Header } from "../features/Header";
import { Footer } from "../features/Footer";

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
                view === "list" ?
                  <List /> :
                  <Grid />
              }
            />
            <Route
              path="/"
              element={
                <Navigate
                  to={"/country/poland"}
                />}
            />
            <Route path='*'
              element={<Error />}
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