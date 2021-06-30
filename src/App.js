import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles, lightTheme, darkTheme } from "./Styles/GlobalStyles";
import TopNavbar from "./Components/Global/TopNavbar";
import BottomNavbar from "./Components/Global/BottomNavbar";
import TrendingPage from './Components/Pages/TrendingPage/TrendingPage';
import MoviePage from './Components/Pages/MoviePage/MoviePage';
import TvSeriesPage from './Components/Pages/TvSeriesPage/TvSeriesPage';
import SearchPage from './Components/Pages/SearchPage/SearchPage';



const Container = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

function App() {

  const [theme, setTheme] = useState( 'light' );

  const setMode = ( mode ) => {
    localStorage.setItem( "theme", mode );
    setTheme( mode )
  }

  const toggleTheme = () => {
    theme === 'light' ? setMode( 'dark' ) : setMode( 'light' );
  }

  useEffect( () => {
    const userTheme = localStorage.getItem( "theme" );
    userTheme ? setTheme( userTheme ) : setMode( 'light' );
  }, [] )

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <Container>
          <GlobalStyles />
          <TopNavbar toggleTheme={toggleTheme} />
          <BottomNavbar />
          <Switch>
            <Route path="/" exact component={TrendingPage} />
            <Route path="/" component={MoviePage} />
            <Route path="/" component={TvSeriesPage} />
            <Route path="/" component={SearchPage} />
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
