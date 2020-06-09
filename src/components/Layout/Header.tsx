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

  & .header-title {
    display: inline-block;
    font-family: monospace;
    font-size: 25px;
    line-height: 30px;
    cursor: pointer;
  }

  & .header-icon {
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: linear;
    cursor: pointer;
    height: 30px;
  }
`;

export const Header: React.FC<{
  title: string;
  dark: boolean;
  onToggleDark: () => void;
}> = ({ title, dark, onToggleDark }) => (
  <StyledHeader className="header" style={{ height: '45px' }}>
    <span className="header-title" onClick={() => navigate('/')}>
      {title}
    </span>
    <span className="header-icon" onClick={onToggleDark}>
      {dark ? (
        <SunIcon style={{ width: '30px', height: '30px' }} />
      ) : (
        <MoonIcon style={{ width: '30px', height: '30px' }} />
      )}
    </span>
  </StyledHeader>
);

export default Header;
