import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Title = styled.div`
  margin: 30px 0 0;
  width: 100%;
  h1 {
    margin: 0;
  }
  div {
    font-family: 'Futura PT', sans-serif;
    margin: 15px 0 0;
    display: flex;
    justify-content: space-between;

    span:first-child {
      margin-right: 15px;
    }
  }
`;

const PostTitle: React.FC<{
  to?: string;
  title: string;
  date: string;
  tags: string[];
  timeToRead: number;
}> = ({ to, title, date, tags, timeToRead }) => (
  <Title>
    <h1 className="primary">{to ? <Link to={to}>{title}</Link> : title}</h1>
    <div className="text-muted">
      <span>
        {date} — {tags.join(', ')}
      </span>
      <span>{timeToRead} min read</span>
    </div>
  </Title>
);

export default PostTitle;
