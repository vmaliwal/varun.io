import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Theme from './src/themes/theme';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html {
    font-family: ${(props) => props.theme.font.body};
    height: 100%;
    background-color: ${(props) => props.theme.colors.body};
    color: ${(props) => props.theme.colors.primaryText};
    font-display: swap;
  }

  .animated-link, .animated-link:visited, .animated-link:link {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primaryText};
    & div {
      transform: perspective(1px) translateZ(0);
      transition-duration: 0.3s;
      transition-property: transform;
      transform-origin: 0 100%;
    }
    & div:hover,
    & div:focus,
    & div:active {
      transform: skew(-10deg);
    }
  }

`;

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  );
};
