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
`;

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  );
};
