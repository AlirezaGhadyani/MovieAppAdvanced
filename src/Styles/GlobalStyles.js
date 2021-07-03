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

.card{
  background:${( { theme } ) => theme.bgSec};
}

.card-year,
.card-type {
  color:${( { theme } ) => theme.textColorSec};
}

.card-rate{
  background:${( { theme } ) => theme.primary};
  color: ${( { theme } ) => theme.bgSec};
}

.pagination-wrapper li{
  color:${( { theme } ) => theme.textColorSec};
  background:${( { theme } ) => theme.bgSec};
}

.active-pagination{
  color: ${( { theme } ) => theme.primary}!important;
  padding: 0.4rem 0.6rem!important;
}

.select{
  background: ${( { theme } ) => theme.bgSec};
  color: ${( { theme } ) => theme.textColor};
}

.search-inp{
  background: ${( { theme } ) => theme.bgSec};
  color: ${( { theme } ) => theme.textColor};
}

.search-inp:focus{
  border:2px solid ${( { theme } ) => theme.primary};
  transition: border 0.3s linear;
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
  primary: '#8be7bb'
};