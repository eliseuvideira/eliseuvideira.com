import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {
  MdArrowBack as ArrowLeft,
  MdArrowForward as ArrowRight,
} from 'react-icons/md';

const Nav = styled.nav`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItemLeft = styled.div`
  width: 45%;
`;

const NavItemRight = styled.div`
  text-align: right;
  width: 45%;
`;

const NavItemLabel = styled.p`
  color: ${({ theme }: any) => theme.textMuted};
  font-size: 0.8em;
  margin: 0;
`;

const NavItemPostTitle = styled.p`
  color: ${({ theme }: any) => theme.primary};
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  position: relative;

  .arrow {
    position: absolute;
    height: 18px;
    width: 18px;
    font-weight: bold;
  }

  .arrow-left {
    left: -27px;
  }

  .arrow-right {
    right: -27px;
  }
`;

interface Props {
  prev?: { link: string; title: string } | null;
  next?: { link: string; title: string } | null;
}

const PostNavigation: React.FC<Props> = ({ prev, next }) => (
  <Nav>
    <NavItemLeft>
      {prev && (
        <Link to={prev.link}>
          <NavItemLabel>Previous</NavItemLabel>
          <NavItemPostTitle>
            <ArrowLeft className="arrow arrow-left" />
            {prev.title}
          </NavItemPostTitle>
        </Link>
      )}
    </NavItemLeft>
    <NavItemRight>
      {next && (
        <Link to={next.link}>
          <NavItemLabel>Next</NavItemLabel>
          <NavItemPostTitle>
            {next.title}
            <ArrowRight className="arrow arrow-right" />
          </NavItemPostTitle>
        </Link>
      )}
    </NavItemRight>
  </Nav>
);

export default PostNavigation;
