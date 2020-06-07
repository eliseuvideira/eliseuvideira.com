import React, { PropsWithChildren, useState, useEffect } from 'react';
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

const Spacing = styled.div`
  heigth: 80px;
`;

const MainContent = styled.div`
  padding-top: 40px;
  min-height: 100%;
`;

export const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const value = localStorage.getItem('dark-mode');
  const [dark, setDark] = useState(value != null ? !!value : true);

  const onToggleDark = () => {
    const newDark = !dark;
    setDark(newDark);
    localStorage.setItem('dark-mode', newDark ? 'true' : '');
  };

  return (
    <Theme dark={dark}>
      <Wrapper>
        <Content>
          <Container>
            <MainContent>
              <Header
                title="eliseuvideira"
                dark={dark}
                onToggleDark={onToggleDark}
              />
              {children}
              <Spacing />
            </MainContent>
            <Footer />
          </Container>
        </Content>
      </Wrapper>
    </Theme>
  );
};
