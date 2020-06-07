import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { graphql } from 'gatsby';
import { Posts } from '../components/Posts/Posts';

const Index: React.FC<{ data: { allMarkdownRemark: { edges: any[] } } }> = ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => (
  <Layout>
    <Posts posts={posts} />
  </Layout>
);

export default Index;

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(fromNow: true)
            tags
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`;
