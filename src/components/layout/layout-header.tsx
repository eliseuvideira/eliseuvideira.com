import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import DarkThemeToggle from './dark-theme-toggle';

const StyledHeader = styled.header`
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .header-title {
    border-width: 0;
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

    .sun:hover {
      animation: spin 1s linear infinite;
    }
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Header: React.FC<{
  title: string;
  darkMode: boolean;
  toggleDarkMode: () => void;
}> = ({ title, darkMode, toggleDarkMode }) => (
  <StyledHeader className="secondary" style={{ height: '45px' }}>
    <h1 className="header-title" onClick={() => navigate('/')}>
      {title}
    </h1>
    <DarkThemeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
  </StyledHeader>
);

export default Header;
