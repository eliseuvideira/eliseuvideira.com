import React, { PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }

  html,
  body,
  body > div,
  body > div > div {
    min-height: 100%;
    min-width: 350px;
  }

  a,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
    color: inherit;
  }

  article a:hover {
    text-decoration: underline;
  }

  .dark-mode {
    background-color: ${({ theme }: any) => theme.dark.background};

    & .text {
      color: ${({ theme }: any) => theme.dark.text};
    }

    & .text-muted {
      color: ${({ theme }: any) => theme.dark.textMuted};
    }

    & .header {
      color: ${({ theme }: any) => theme.dark.secondary};
    }

    & .title {
      color: ${({ theme }: any) => theme.dark.primary};
    }
  }

  .light-mode {
    background-color: ${({ theme }: any) => theme.light.background};

    & .text {
      color: ${({ theme }: any) => theme.light.text};
    }

    & .text-muted {
      color: ${({ theme }: any) => theme.light.textMuted};
    }

    & .header {
      color: ${({ theme }: any) => theme.light.secondary};
    }

    & .title {
      color: ${({ theme }: any) => theme.light.primary};
    }
  }
  `;

const theme = {
  dark: {
    background: '#252526',
    primary: '#79cd75',
    secondary: '#fafafa',
    text: '#e7ebed',
    textMuted: '#d7dee2',
  },
  light: {
    background: '#fbfbfb',
    primary: '#007acc',
    secondary: '#36313d',
    text: '#1a202c',
    textMuted: '#696076',
  },
};

const Theme: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <GlobalStyles theme={theme} />
      {children}
    </>
  );
};

export default Theme;
