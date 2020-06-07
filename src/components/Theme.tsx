import React, { PropsWithChildren } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const lightTheme = {
  html: {
    backgroundColor: '#fbfbfb',
  },
  logo: {
    color: '#36313d',
  },
  footer: {
    color: '#36313d',
  },
  divider: {
    color: '#696076',
  },
  posts: {
    postTitle: {
      color: '#007acc',
    },
    postInfo: {
      color: '#696076',
    },
  },
  post: {
    postTitle: {
      color: '#232129',
    },
    postInfo: {
      color: '#4a5568',
    },
    paragraph: {
      color: '#1a202c'
    }
  },
};

const darkTheme = {
  html: {
    backgroundColor: '#635e69',
  },
  logo: {
    color: '#fcfaff',
  },
  footer: {
    color: '#dbdbdb',
  },
  divider: {
    color: '#9c9c9c',
  },
  posts: {
    postTitle: {
      color: '#fcfaff',
    },
    postInfo: {
      color: '#dbdbdb',
    },
  },
  post: {
    postTitle: {
      color: '#fcfaff',
    },
    postInfo: {
      color: '#dbdbdb',
    },
    paragraph: {
      color: '#fcfaff'
    }
  },
};

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background-color: ${({ theme }: any) => theme.html.backgroundColor};
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
