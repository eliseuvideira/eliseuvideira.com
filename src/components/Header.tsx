import React from 'react';
import styled from 'styled-components';
import SunIcon from '../images/sun-solid.svg';
import { navigate } from 'gatsby';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  font-family: 'Fira Mono', monospace;
  font-size: 25px;
  line-height: 30px;
  cursor: pointer;
`;

export const Header: React.FC<{ title: string }> = ({ title }) => (
  <>
    <StyledHeader>
      <Title onClick={() => navigate('/')}>{title}</Title>
      <div style={{ width: '30px' }}>
        <SunIcon />
      </div>
    </StyledHeader>
    <hr />
  </>
);
