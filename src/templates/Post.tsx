import React from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from '../components/Layout';
import styled from 'styled-components';

const PostTitle = styled.div`
  font-family: Montserrat;
  width: 100%;
  h1 {
    color: #1a202c;
    font-size: 30px;
    font-weight: bold;
    line-height: 40px;
  }
  div {
    color: #4a5568;
    display: flex;
    justify-content: space-between;
  }
`;

const PostContent = styled.article`
  color: #1a202c;
  font-family: Montserrat;
`;

const PostNav = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  font-family: Montserrat;
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
          {date} -- {tags.join(', ')}
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
