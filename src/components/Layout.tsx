import React from 'react';
import { Header } from './Header';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 960px;
  padding: 0 15px;
`;

export const Layout: React.FC = () => (
  <Wrapper>
    <Container>
      <Header title="eliseuvideira" />
      <footer>Teste</footer>
    </Container>
  </Wrapper>
);
