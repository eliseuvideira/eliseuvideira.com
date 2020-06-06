import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => (
  <footer>
    <hr />
    <div>
      <p>
        &copy; {new Date().getFullYear()}, Built with{' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </div>
  </footer>
);

export default Footer;
