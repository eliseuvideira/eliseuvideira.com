import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-size: 0.75em;
  font-family: monospace;
  font-weight: bold;
  letter-spacing: 0.075em;
  line-height: 1;
  position: absolute;
  left: 1.5em;
  text-transform: uppercase;
  top: 0;
  padding: 0.25rem 0.5rem;
`;

const CodeBlockBadge: React.FC<{ language: string }> = ({ language }) => (
  <StyledDiv className={`code-block-badge code-block-badge-${language}`}>
    {language}
  </StyledDiv>
);

export default CodeBlockBadge;
