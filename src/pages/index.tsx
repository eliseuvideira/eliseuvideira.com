import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { graphql } from 'gatsby';
import { Posts } from '../components/Posts/Posts';
import Seo from '../components/Seo';

const Index: React.FC<{ data: { allMarkdownRemark: { edges: any[] } } }> = ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => (
  <Layout>
    <Seo
      title="eliseuvideira"
      description="Eliseu Videira's blog, everything about javascript"
      keywords={[
        'eliseuvideira',
        'Eliseu Videira',
        'javascript',
        'typescript',
        'blog',
        'react',
        'nodejs',
      ]}
      url="/"
    />
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
            date
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
