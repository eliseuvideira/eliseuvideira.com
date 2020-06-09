import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  position: relative;
  height: 80px;
  margin: -80px 0 0;
  padding: 40px 0 10px;
  align-items: center;
  p {
    margin: 0;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }
`;

const Footer: React.FC = () => (
  <StyledFooter style={{ height: '80px' }}>
    <p className="text-muted">
      &copy; {new Date().getFullYear()}, Built with{' '}
      <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener">
        Gatsby
      </a>
    </p>
  </StyledFooter>
);

export default Footer;
