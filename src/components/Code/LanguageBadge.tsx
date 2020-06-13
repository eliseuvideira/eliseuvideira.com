import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-size: 0.75em;
  font-family: monospace;
  letter-spacing: 0.075em;
  line-height: 1;
  position: absolute;
  left: 1.5em;
  text-align: right;
  text-transform: uppercase;
  top: 0;
  border-radius: 0 0 4px 4px;
  padding: 0.25rem 0.5rem;
  background-color: #232129;
`;

const LanguageTag: React.FC<{ language: string }> = ({ language }) => (
  <StyledDiv>{language}</StyledDiv>
);

export default LanguageTag;
