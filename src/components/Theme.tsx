import React, { PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';

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
    min-width: 350px;
  }

  a,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
    color: inherit;
  }

  .dark-mode {
    background-color: #252526;
  }

  .dark-mode .text {
    color: #79cd75;
  }

  .dark-mode .text-muted {
    color: #dcdcaa;
  }

  .dark-mode .logo {
    color: #f7fdf7;
  }

  .dark-mode .title {
    color: #2ca72c;
  }

  .light-mode {
    background-color: #fbfbfb;
  }

  .light-mode .text {
    color: #1a202c;
  }

  .light-mode .text-muted {
    color: #696076;
  }

  .light-mode .logo {
    color: #36313d;
  }

  .light-mode .title {
    color: #007acc;
  }
  `;

export const Theme: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};
