import React, { PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import useDarkMode from 'use-dark-mode';

const GlobalStyles = createGlobalStyle`
  html,
  body,
  body > div,
  body > div > div {
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

  body {
    background-color: ${({ theme }: any) => theme.background};
  }

  .text {
    color: ${({ theme }: any) => theme.text};
  }

  .text-muted {
    color: ${({ theme }: any) => theme.textMuted};
  }

  .secondary {
    color: ${({ theme }: any) => theme.secondary};
  }

  .primary {
    color: ${({ theme }: any) => theme.primary};
  }

  code[class*="language-"],
  pre[class*="language-"] {
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#24292e' : '#d4d4d4')};
    direction: ltr;
    font-family: "Consolas", "Ubuntu Mono", "Courier New", Courier, monospace;
    font-size: 0.9em;
    line-height: 1.5;
    text-align: left;
    text-shadow: none;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre > code[class*="language-"] {
    font-size: 1em;
  }

  pre[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection,
  pre[class*="language-"]::selection,
  code[class*="language-"]::selection {
    background: #b3d4fc;
  }

  pre[class*="language-"] {
    padding: 2em 1em 1em;
    overflow: auto;
    border: ${({ theme: { isDark } }: any) =>
      !isDark ? '1px solid #dddddd' : '1px solid rgba(128, 128, 128, 0.35)'};
    background-color: ${({ theme: { isDark } }: any) =>
      !isDark ? 'white' : '#1e1e1e'};
  }

  .code-block-title {
    border: ${({ theme: { isDark } }: any) =>
      !isDark ? '1px solid #dddddd' : '1px solid rgba(128, 128, 128, 0.35)'};
    background-color: ${({ theme: { isDark } }: any) =>
      !isDark ? 'white' : '#1e1e1e'};
    border-bottom-width: 0;
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#393a34' : '#d4d4d4')};
  }

  .code-block-copy-button {
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#4e4e4e' : '#d2d2d2')};

    &:hover:enabled {
      background-color: ${({ theme: { isDark } }: any) =>
        !isDark ? '#dcdcdc' : '#3c3c3c'};
      box-shadow: ${({ theme: { isDark } }: any) =>
        !isDark
          ? 'rgba(184, 192, 176, 0.08) 0px 1px 2px, rgba(209, 214, 204, 0.08) 0px 2px 4px'
          : 'rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px'};
      color: ${({ theme: { isDark } }: any) => (!isDark ? '#000' : '#fff')};
    }

    &:disabled {
      cursor: default;
    }
  }

  :not(pre) > code[class*="language-"] {
    padding: 0.1em 0.3em;
    border-radius: 0.3em;
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#24292e' : '#db4c69')};
    background-color: ${({ theme: { isDark } }: any) =>
      !isDark ? '#f8f8f8' : '#f9f2f4'};
    border: ${({ theme: { isDark } }: any) =>
      !isDark ? '1px solid #dddddd' : '1px solid rgba(128, 128, 128, 0.35)'};
  }

  .token-line:not(:last-child) {
    min-height: 1rem;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#999988' : '#6a9955')};
    font-style: italic;
  }

  .token.punctuation,
  .token.tag.punctuation,
  .token.parameter.punctuation,
  .token.operator {
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#393a34' : '#d4d4d4')};
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#24292e' : '#569cd6')};
  }

  .language-json .token.property {
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#24292e' : '#d4d4d4')};
  }

  .token.tag.script {
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#24292e' : '#d4d4d4')};
  }

  .token.deleted {
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#9a050f' : '#b5cea8')};
  }

  .token.entity,
  .token.url {
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#36acaa' : '#d4d4d4')};
  }

  .token.variable,
  .token.regex,
  .token.inserted {
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#36acaa' : '#d16969')};
  }

  .token.inserted {
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#36acaa' : '#ce9178')};
  }

  .token.selector,
  .token.string,
  .token.char,
  .token.builtin {
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#00009f' : '#ce9178')};
  }

  .token.attr-name {
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#005cc5' : '#9cdcfe')};
  }

  .token.string {
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#032f62' : '#ce9178')};
  }

  .language-css .token.string,
  .style .token.string {
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#e3116c' : '#d4d4d4')};
  }

  .token.atrule,
  .token.keyword {
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#d73a49' : '#569cd6')};
  }

  .token.attr-value {
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#032f62' : '#ce9178')};
  }

  .token.function {
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#6f42c1' : '#dcdcaa')};
  }

  .token.important {
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#9a050f' : '#d16969')};
  }

  .token.class-name,
  .token.maybe-class-name {
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#006b8f' : '#4ec9b0')};
  }

  .token.parameter,
  .token.interpolation {
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#005cc5' : '#9cdcfe')};
  }

  .token.punctuation.interpolation-punctuation {
    color: ${({ theme: { isDark } }: any) => (!isDark ? '#36acaa' : '#569cd6')};
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }
  `;

const light = {
  background: '#fbfbfb',
  primary: '#007acc',
  secondary: '#36313d',
  text: '#1a202c',
  textMuted: '#696076',
  isDark: false,
};

const dark = {
  background: '#252526',
  primary: '#79cd75',
  secondary: '#fafafa',
  text: '#e7ebed',
  textMuted: '#d7dee2',
  isDark: true,
};

const Theme: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const darkMode = useDarkMode(false);

  const theme = darkMode.value ? dark : light;

  return (
    <>
      <GlobalStyles theme={theme} />
      {children}
    </>
  );
};

export default Theme;
