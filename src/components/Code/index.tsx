import React from 'react';
import styled from 'styled-components';
import CopyButton from './CopyButton';
import LanguageTag from './LanguageBadge';
import FileName from './FileName';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';

const Wrapper = styled.div`
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  font-size: 14px;
`;

const Pre = styled.pre`
  margin: 0;
  position: relative;
  overflow-x: auto;
  border-radius: 0;
  padding: 2em 1em 1em;
  font-size: 14px;
  line-height: 1.5em;
`;

const Code = ({ codeString, language, filename }: any) => {
  return (
    <Wrapper>
      {filename && <FileName filename={filename} />}

      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div style={{ position: 'relative' }}>
            <Pre className={className} style={style}>
              <LanguageTag language={language} />
              <CopyButton code={codeString.replace(/^\s*|\s*$/g, '')} />
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </Pre>
          </div>
        )}
      </Highlight>
    </Wrapper>
  );
};

export default Code;
