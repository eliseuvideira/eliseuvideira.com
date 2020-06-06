import React, { PropsWithChildren } from 'react';
import { Header } from './Header';
import styled from 'styled-components';
import Footer from './Footer';

const Wrapper = styled.div`
  max-width: 960px;
  height: 100%;
  margin: 0 auto;
`;

const Content = styled.div`
  height: calc(100% - 50px);
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 15px;
`;

export const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <Wrapper>
    <Content>
      <Container>
        <Header title="eliseuvideira" />
        {children}
        <Footer />
      </Container>
    </Content>
  </Wrapper>
);
