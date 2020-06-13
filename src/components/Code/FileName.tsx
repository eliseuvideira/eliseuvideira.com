import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: #1e1e1e;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  padding: 10px 15px 5px;
  font-size: 0.85em;
  border-bottom: 1px solid #000;
  font-family: monospace;
  color: #ccc;
  border-color: #444;
`;

const FileName: React.FC<{ filename: string }> = ({ filename }) => (
  <StyledDiv>{filename}</StyledDiv>
);

export default FileName;
