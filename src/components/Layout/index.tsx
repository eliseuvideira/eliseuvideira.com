import React, { PropsWithChildren } from 'react';
import Header from './Header';
import styled from 'styled-components';
import Footer from './Footer';
import { Theme } from '../Theme';
import useDarkMode from 'use-dark-mode';

const StyledLayout = styled.div`
  max-width: 960px;
  min-height: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 40px 15px 0;

  & .layout-container {
    width: 100%;
    min-height: 100%;
  }

  & .layout-spacing {
    height: 80px;
  }
`;

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const darkMode = useDarkMode(false);

  const onToggleDark = () => {
    if (darkMode.value) {
      darkMode.disable();
    } else {
      darkMode.enable();
    }
  };

  return (
    <Theme>
      <StyledLayout>
        <div className="layout-container">
          <Header
            dark={darkMode.value}
            title="eliseuvideira"
            onToggleDark={onToggleDark}
          />
          {children}
          <div className="layout-spacing" />
        </div>
        <Footer />
      </StyledLayout>
    </Theme>
  );
};

export default Layout;
