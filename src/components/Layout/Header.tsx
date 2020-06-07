import React from 'react';
import styled from 'styled-components';
import SunIcon from '../../images/sun-solid.svg';
import MoonIcon from '../../images/moon-solid.svg';
import { navigate } from 'gatsby';

const StyledHeader = styled.header`
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  font-family: 'Fira Mono', monospace;
  font-size: 25px;
  line-height: 30px;
  cursor: pointer;
`;

const Icon = styled.span`
  width: 30px;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: linear;
  cursor: pointer;
`;

export const Header: React.FC<{
  title: string;
  dark: boolean;
  onToggleDark: () => void;
}> = ({ title, dark, onToggleDark }) => (
  <div className="logo">
    <StyledHeader>
      <Title onClick={() => navigate('/')}>{title}</Title>
      <Icon onClick={onToggleDark}>
        {dark ? <SunIcon /> : <MoonIcon />}
      </Icon>
    </StyledHeader>
  </div>
);
