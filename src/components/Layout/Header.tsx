import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import { FiMoon as Moon, FiSun as Sun } from 'react-icons/fi';
import useDarkMode from 'use-dark-mode';

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
}> = ({ title }) => {
  const darkMode = useDarkMode(false);

  return (
    <StyledHeader className="secondary" style={{ height: '45px' }}>
      <span className="header-title" onClick={() => navigate('/')}>
        {title}
      </span>
      <span className="header-icon" onClick={() => darkMode.toggle()}>
        {darkMode.value ? (
          <Sun className="sun" style={{ width: '30px', height: '30px' }} />
        ) : (
          <Moon className="moon" style={{ width: '30px', height: '30px' }} />
        )}
      </span>
    </StyledHeader>
  );
};

export default Header;
