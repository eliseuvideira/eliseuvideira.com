import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const PostList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const PostListItem = styled.li``;

const PostTitle = styled.h1``;

const PostInfo = styled.span``;

export const Posts: React.FC<{
  posts: any[];
}> = ({ posts }) => (
  <PostList>
    {posts.map(
      ({
        node: {
          fields: { slug },
          frontmatter: { title, date, tags },
        },
      }) => (
        <PostListItem key={slug}>
          <Link to={`/posts${slug}`}>
            <PostTitle>{title}</PostTitle>
          </Link>
          <PostInfo>
            {date} -- {tags.join(', ')}
          </PostInfo>
        </PostListItem>
      ),
    )}
  </PostList>
);
