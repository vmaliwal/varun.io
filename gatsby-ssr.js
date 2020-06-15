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
    font-family: ${(props) => props.theme.fonts.body};
    height: 100%;
    background-color: ${(props) => props.theme.colors.body};
  }
`;

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={Theme}>{element}</ThemeProvider>;
};
