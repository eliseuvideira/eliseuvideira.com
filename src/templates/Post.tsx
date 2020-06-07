import React from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from '../components/Layout';

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
    <div>
      <div>{title}</div>
      <div>
        {date} -- {tags.join(', ')}
      </div>
      <div>{timeToRead} min read</div>
      <article dangerouslySetInnerHTML={{ __html: html }}></article>
    </div>
    <ul>
      {prev && (
        <li>
          <Link to={`/posts${prev.fields.slug}`}>
            ← {prev.frontmatter.title}
          </Link>
        </li>
      )}
      {next && (
        <li>
          <Link to={`/posts${next.fields.slug}`}>
            {next.frontmatter.title} →
          </Link>
        </li>
      )}
    </ul>
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
