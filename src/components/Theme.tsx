import React, { PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';

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
    margin: 0.5em 0;
    overflow: auto;
    border: ${({ theme: { isDark } }: any) =>
      !isDark ? '1px solid #dddddd' : '1px solid rgba(128, 128, 128, 0.35)'};
    background-color: ${({ theme: { isDark } }: any) =>
      !isDark ? 'white' : '#1e1e1e'};
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

const Theme: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default Theme;
