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

  .dark-mode {
    background-color: ${({ theme }: any) => theme.dark.background};

    .text {
      color: ${({ theme }: any) => theme.dark.text};
    }

    .text-muted {
      color: ${({ theme }: any) => theme.dark.textMuted};
    }

    .secondary {
      color: ${({ theme }: any) => theme.dark.secondary};
    }

    .primary {
      color: ${({ theme }: any) => theme.dark.primary};
    }
  }

  .light-mode {
    background-color: ${({ theme }: any) => theme.light.background};

    .text {
      color: ${({ theme }: any) => theme.light.text};
    }

    .text-muted {
      color: ${({ theme }: any) => theme.light.textMuted};
    }

    .secondary {
      color: ${({ theme }: any) => theme.light.secondary};
    }

    .primary {
      color: ${({ theme }: any) => theme.light.primary};
    }
  }

  .light-mode {
    .lang-badge {
      background-color: ${({ theme }: any) => theme.light.primary};
      color: ${({ theme }: any) => theme.light.background};
    }

    code[class*="language-"],
    pre[class*="language-"] {
      color: #24292e;
	    font-family: "Consolas", "Courier New", Courier, monospace;
	    font-size: .9em;
	    hyphens: none;
	    tab-size: 4;
    }

    pre > code[class*="language-"] {
      font-size: 1em;
    }

    pre[class*="language-"] {
      border: 1px solid #dddddd;
      background-color: white;
    }

    :not(pre) > code[class*="language-"] {
      padding: .2em;
      padding-top: 1px;
      padding-bottom: 1px;
      background: #f8f8f8;
      border: 1px solid #dddddd;
    }

    .token.property-access {
      color: #005cc5;
    }

    .token.class-name,
    .token.tag.class-name,
    .token.maybe-class-name,
    .token.tag.maybe-class-name {
      color: #24292e;
    }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #6a737d;
    font-style: italic;
  }

  .token.string,
  .token.tag.string,
  .token.attr-value,
  .token.tag.attr-value  {
    color: #032f62;
  }

  .token.punctuation,
  .token.tag.punctuation,
  .token.operator {
    color: #393A34;
  }

  .token.entity,
  .token.url,
  .token.symbol,
  .token.number,
  .token.boolean,
  .token.variable,
  .token.constant,
  .token.property,
  .token.regex,
  .token.inserted {
    color: #005cc5;
  }

    .token.atrule,
    .token.keyword,
    .token.attr-name,
    .token.tag.attr-name,
    .language-autohotkey .token.selector {
      color: #d73a49;
    }

    .token.function,
    .token.deleted,
    .language-autohotkey .token.tag {
      color: #6f42c1;
    }

    .token.tag,
    .token.selector,
    .language-autohotkey .token.keyword {
      color: #22863a;
    }

    .token.important,
    .token.bold {
      font-weight: bold;
    }

    .token.italic {
      font-style: italic;
    }
  }

  .dark-mode {
    .lang-badge {
      background-color: #294e80;
      color: #1e1e1e;
      font-weight: bold;
    }

    pre[class*="language-"] {
      background-color: #1e1e1e;
    }


.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #6a9955;
}

.token.punctuation, .token.tag.punctuation, .token.parameter.punctuation {
	color: #d4d4d4;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
	color: #569cd6;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #ce9178;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
	color: #d4d4d4;
	background: #1e1e1e;
}

.token.atrule,
.token.attr-value,
.token.keyword {
	color: #569cd6;
}

.token.function {
	color: #dcdcaa;
}

.token.regex,
.token.important,
.token.variable {
	color: #d16969;
}

.token.important,
.token.bold {
	font-weight: bold;
}

.token.italic {
	font-style: italic;
}

.token.constant {
	color: #9CDCFE;
}

.token.class-name {
	color: #4EC9B0;
}

.token.parameter {
	color: #9CDCFE;
}

.token.interpolation {
	color: #9CDCFE;
}

.token.punctuation.interpolation-punctuation {
	color: #569cd6;
}

.token.boolean {
	color: #569cd6;
}

.token.property {
	color: #9cdcfe;
}

.token.selector {
	color: #d7ba7d;
}

.token.tag :not(.function) {
	color: #569cd6;
}

.token.attr-name {
	color: #9cdcfe;
}

.token.attr-value {
	color: #ce9178;
}

.token.entity {
	color: #4ec9b0;
	cursor: unset;
}

.token.namespace {
	color: #4ec9b0;
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
