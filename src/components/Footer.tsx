import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  color: ${({ theme }) => theme.footer.color};
  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
  }
`;

const StyledFooter = styled.footer`
  position: relative;
  height: 80px;
  margin-top: -80px;
  padding-top: 40px;
  padding-bottom: 10px;
  div {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

const Footer: React.FC = () => (
  <StyledFooter>
    <hr />
    <div>
      <Paragraph>
        &copy; {new Date().getFullYear()}, Built with{' '}
        <a href="https://www.gatsbyjs.org" target="_blank">
          Gatsby
        </a>
      </Paragraph>
    </div>
  </StyledFooter>
);

export default Footer;
