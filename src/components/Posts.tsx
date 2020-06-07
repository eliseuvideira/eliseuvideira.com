import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const PostList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const PostListItem = styled.li`
  margin-top: 30px;
`;

const PostTitle = styled.h1`
  font-family: Merriweather;
  font-size: 30px;
  line-heigth: 40px;
  margin: 0;
  width: 100%;
  a,
  a:visited,
  a:hover,
  a:active {
    color: ${({ theme }) => theme.posts.postTitle.color};
    text-decoration: none;
  }
`;

const PostInfo = styled.span`
  color: ${({ theme }) => theme.posts.postInfo.color};
  font-family: Merriweather;
  font-size: 14px;
  line-heigth: 20px;
  width: 100%;
  display: block;
  margin-top: 5px;
`;

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
          <PostTitle>
            <Link to={`/posts${slug}`}>{title}</Link>
          </PostTitle>
          <PostInfo>
            {date} — {tags.join(', ')}
          </PostInfo>
        </PostListItem>
      ),
    )}
  </PostList>
);
