import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
  background: ${( { theme } ) => theme.bg};
  transition: all 0.5s linear;
}

*{
  border-color: ${( { theme } ) => theme.textColorSec};
}

h1,h2,h3,h4,h5,h6,p,span{
  color:${( { theme } ) => theme.textColor};
  border-color: ${( { theme } ) => theme.textColorSec}!important;
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
}

.nav-icon {
  color:${( { theme } ) => theme.textColor};
  transition:color .4s ease;
}

.nav-btn:focus .nav-icon{
  color:${( { theme } ) => theme.primary};
  transition:color .4s ease;
}
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