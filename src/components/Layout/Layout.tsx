import React, { PropsWithChildren } from 'react';
import { Header } from './Header';
import styled from 'styled-components';
import Footer from './Footer';
import { Theme } from '../Theme';
import useDarkMode from 'use-dark-mode';

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
  height: 80px;
`;

const MainContent = styled.div`
  padding-top: 40px;
  min-height: 100%;
`;

export const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
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
      <Wrapper>
        <Content>
          <Container>
            <MainContent>
              <Header
                dark={darkMode.value}
                title="eliseuvideira"
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
