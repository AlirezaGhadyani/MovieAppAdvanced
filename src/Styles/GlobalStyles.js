import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
  background: ${( { theme } ) => theme.bg};
  transition: all 0.5s linear;
}

.main-head{
  background: ${( { theme } ) => theme.bgSec};
}

.head-logo{
  color: ${( { theme } ) => theme.textColor};
}

.navbar{
  background:${( { theme } ) => theme.bgSec};
}

.nav-link {
  color:${( { theme } ) => theme.textColor};
  transition:color 0.4s linear;
}

.nav-icon {
  color:${( { theme } ) => theme.textColor};
  transition:color 0.2s linear;
}

.nav-item:hover .nav-icon,.nav-item:hover .nav-link{
  color:${( { theme } ) => theme.primary};;
  transition:color 0.2s linear;
}

`;

export const lightTheme = {
  bg: '#cfcfd1',
  textColor: '#000100',
  bgSec: '#ededed',
  textColorSec: '#6d6d6f',
  primary: '#8be7bb'
};

export const darkTheme = {
  bg: '#262626',
  textColor: '#ffffff',
  bgSec: '#3a3a3a',
  textColorSec: '#d7d7d7',
  primary: '#c1e8d5'
};