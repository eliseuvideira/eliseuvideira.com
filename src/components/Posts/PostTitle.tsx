import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import moment from 'moment';

const Title = styled.div`
  margin: 30px 0 0;
  width: 100%;
  h1 {
    margin: 0;
    font-size: 40px;
    font-weight: bold;
    line-height: 1.15;
  }
  div {
    margin: 15px 0 0;
    display: flex;
    justify-content: space-between;
  }
`;

export const PostTitle: React.FC<{
  to?: string;
  title: string;
  rawDate: string;
  date: string;
  tags: string[];
  timeToRead: number;
}> = ({ to, title, rawDate, date, tags, timeToRead }) => {
  const [fromNow, setFromNow] = useState(date);

  useEffect(() => {
    setFromNow(moment(rawDate).fromNow());
  }, []);

  return (
    <Title>
      <h1 className="title">{to ? <Link to={to}>{title}</Link> : title}</h1>
      <div className="text-muted">
        <span>
          {fromNow} — {tags.join(', ')}
        </span>
        <span>{timeToRead} min read</span>
      </div>
    </Title>
  );
};
