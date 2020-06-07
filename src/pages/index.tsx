import React from 'react';
import { Layout } from '../components/Layout';
import { graphql } from 'gatsby';
import { Posts } from '../components/Posts';

const Index = ({
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
        }
      }
    }
  }
`;
