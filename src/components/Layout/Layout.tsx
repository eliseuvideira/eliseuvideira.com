import React, { PropsWithChildren } from 'react';
import Header from './Header';
import styled from 'styled-components';
import Footer from './Footer';
import Theme from '../Theme';

const StyledLayout = styled.div`
  max-width: 960px;
  min-height: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 40px 30px 0;

  & .layout-container {
    width: 100%;
    min-height: 100%;
  }

  & .layout-spacing {
    height: 80px;
  }
`;

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <>
    <Theme />
    <StyledLayout>
      <div className="layout-container">
        <Header title="eliseuvideira" />
        {children}
        <div className="layout-spacing" />
      </div>
      <Footer />
    </StyledLayout>
  </>
);

export default Layout;
