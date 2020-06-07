import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Title = styled.div`
  margin: 30px 0 0;
  width: 100%;
  h1 {
    margin: 0;
    color: ${({ theme }) => theme.title};
    font-size: 30px;
    font-weight: bold;
    line-height: 40px;
  }
  div {
    margin: 5px 0 0;
    color: ${({ theme }) => theme.textMuted};
    display: flex;
    justify-content: space-between;
  }
  a,
  a:visited,
  a:hover,
  a:active {
    color: ${({ theme }) => theme.title};
    text-decoration: none;
  }
`;

export const PostTitle: React.FC<{
  to?: string;
  title: string;
  date: string;
  tags: string[];
  timeToRead: number;
}> = ({ to, title, date, tags, timeToRead }) => (
  <Title>
    <h1>{to ? <Link to={to}>{title}</Link> : title}</h1>
    <div>
      <span>
        {date} — {tags.join(', ')}
      </span>
      <span>{timeToRead} min read</span>
    </div>
  </Title>
);
