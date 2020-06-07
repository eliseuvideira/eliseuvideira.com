import React, { PropsWithChildren } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const lightTheme = {
  text: '#1a202c',
  textMuted: '#696076',
  background: '#fbfbfb',
  logo: '#36313d',
  title: '#007acc',
};

const darkTheme = {
  text: '#79cd75',
  textMuted: '#dcdcaa',
  background: '#252526',
  logo: '#f7fdf7',
  title: '#2ca72c',
};

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  html {
    background-color: ${({ theme }: any) => theme.background};
    font-family: Montserrat;
  }

  ol, ul {
    list-style: none;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html, body, body > div, body > div > div {
    height: 100%;
  }
  `;

export const Theme: React.FC<PropsWithChildren<{ dark: boolean }>> = ({
  children,
  dark,
}) => {
  const theme = dark ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
