import React from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from '../components/Layout';
import styled from 'styled-components';

const PostTitle = styled.div`
  margin: 30px 0 0;
  font-family: Montserrat;
  width: 100%;
  h1 {
    margin: 0;
    color: ${({ theme }) => theme.post.postTitle.color};
    font-size: 30px;
    font-weight: bold;
    line-height: 40px;
  }
  div {
    margin: 5px 0 0;
    color: ${({ theme }) => theme.post.postInfo.color};
    display: flex;
    justify-content: space-between;
  }
`;

const PostContent = styled.article`
  color: ${({ theme }) => theme.post.paragraph.color};
  font-family: Montserrat;
  margin-top: 60px;
`;

const PostNav = styled.ul`
  margin-top: 60px;
  color: ${({ theme }) => theme.post.postInfo.color};
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  font-family: Montserrat;
  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
  }
`;

const Post = ({
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
    <PostTitle>
      <h1>{title}</h1>
      <div>
        <span>
          {date} — {tags.join(', ')}
        </span>
        <span>{timeToRead} min read</span>
      </div>
    </PostTitle>
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
