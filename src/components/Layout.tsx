import React, { PropsWithChildren } from 'react';
import { Header } from './Header';
import styled from 'styled-components';
import Footer from './Footer';
import { Theme } from './Theme';

const Wrapper = styled.div`
  max-width: 960px;
  height: 100%;
  margin: 0 auto;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 15px;
`;

export const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <Theme>
    <Wrapper>
      <Content>
        <Container>
          <Header title="eliseuvideira" />
          {children}
          <Footer />
        </Container>
      </Content>
    </Wrapper>
  </Theme>
);
