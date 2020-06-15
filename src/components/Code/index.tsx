import React from 'react';
import styled from 'styled-components';
import CopyButton from './CopyButton';
import LanguageTag from './Badge';
import FileName from './FileName';
import Highlight, { defaultProps } from 'prism-react-renderer';

const Wrapper = styled.div`
  margin: 0.5em 0 1.25em;
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

      <Highlight {...defaultProps} code={codeString} language={language}>
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <div style={{ position: 'relative' }}>
            <Pre className={className}>
              <LanguageTag language={language} />
              <CopyButton code={codeString.replace(/^\s*|\s*$/g, '')} />
              {tokens.map((line, i) => (
                <div {...{ ...getLineProps({ line, key: i }), style: {} }}>
                  {line.map((token, key) => (
                    <span
                      {...{ ...getTokenProps({ token, key }), style: {} }}
                    />
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
