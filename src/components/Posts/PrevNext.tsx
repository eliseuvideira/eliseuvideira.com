import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {
  MdArrowBack as ArrowBack,
  MdArrowForward as ArrowForward,
} from 'react-icons/md';

const Nav = styled.nav`
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .PrevNext__right {
    text-align: right;
  }
`;

const ItemTitle = styled.p`
  font-size: 0.8em;
  margin: 0;
`;

interface Props {
  prev?: { link: string; title: string } | null;
  next?: { link: string; title: string } | null;
}

const PrevNext: React.FC<Props> = ({ prev, next }) => (
  <Nav>
    <div className="navitem">
      {prev && (
        <Link to={prev.link}>
          <ItemTitle className="text-muted">Previous</ItemTitle>
          <div
            className="title"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: '"Futura PT", sans-serif',
              fontWeight: 600,
            }}
          >
            <ArrowBack
              style={{
                height: '1rem',
                width: '1rem',
                marginRight: '9px',
                marginLeft: '-27px',
              fontWeight: 600,
              }}
            />
            {prev.title}
          </div>
        </Link>
      )}
    </div>
    <div className="PrevNext__right">
      {next && (
        <Link to={next.link}>
          <ItemTitle className="text-muted">Next</ItemTitle>
          <div
            className="title"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: '"Futura PT", sans-serif',
              fontWeight: 600,
            }}
          >
            {next.title}
            <ArrowForward
              style={{
                height: '18px',
                width: '18px',
                marginLeft: '9px',
                marginRight: '-27px',
              }}
            />
          </div>
        </Link>
      )}
    </div>
  </Nav>
);

export default PrevNext;
