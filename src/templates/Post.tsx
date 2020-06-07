import React from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from '../components/Layout/Layout';
import styled from 'styled-components';
import { PostTitle } from '../components/Posts/PostTitle';

const PostContent = styled.article`
  color: ${({ theme }) => theme.text};
  margin-top: 60px;
`;

const PostNav = styled.ul`
  margin-top: 60px;
  color: ${({ theme }) => theme.textMuted};
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
  }
`;

interface PostProps {
  html: string;
  timeToRead: number;
  frontmatter: {
    title: string;
    date: string;
    tags: string[];
  };
  fields: {
    slug: string;
  };
}

const Post: React.FC<{
  data: { markdownRemark: PostProps };
  pageContext: { prev: PostProps | null; next: PostProps | null };
}> = ({
  data: {
    markdownRemark: {
      html,
      timeToRead,
      frontmatter: { title, date, tags },
    },
  },
  pageContext: { prev, next },
}) => (
  <Layout>
    <PostTitle title={title} date={date} tags={tags} timeToRead={timeToRead} />
    <PostContent dangerouslySetInnerHTML={{ __html: html }} />
    <PostNav>
      <li>
        {prev && (
          <Link to={`/posts${prev.fields.slug}`}>
            ← {prev.frontmatter.title}
          </Link>
        )}
      </li>
      <li>
        {next && (
          <Link to={`/posts${next.fields.slug}`}>
            {next.frontmatter.title} →
          </Link>
        )}
      </li>
    </PostNav>
  </Layout>
);

export default Post;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(fromNow: true)
        tags
      }
    }
  }
`;
