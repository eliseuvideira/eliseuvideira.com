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

const Footer: React.FC = () => (
  <footer>
    <hr />
    <div>
      <Paragraph>
        &copy; {new Date().getFullYear()}, Built with{' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Paragraph>
    </div>
  </footer>
);

export default Footer;
