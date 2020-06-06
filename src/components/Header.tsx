import React from 'react';
import styled from 'styled-components';
import SunIcon from '../images/sun-solid.svg';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  font-family: 'Fira Mono', monospace;
  font-size: 25px;
  line-height: 30px;
`;

console.log(SunIcon);

export const Header: React.FC<{ title: string }> = ({ title }) => (
  <>
    <StyledHeader>
      <Title>{title}</Title>
      <div style={{ width: '30px' }}>
        <SunIcon />
      </div>
    </StyledHeader>
    <hr />
  </>
);
