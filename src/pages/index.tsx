import React from 'react';
import Layout from '../components/Layout/Layout';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import PostTitle from '../components/Posts/PostTitle';

interface Props {
  data: {
    allMdx: {
      edges: {
        node: {
          fields: { slug: string };
          frontmatter: { title: string; date: string; tags: string[] };
          timeToRead: number;
        };
      }[];
    };
  };
}

const Index: React.FC<Props> = ({
  data: {
    allMdx: { edges: posts },
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

    <div>
      {posts.map(
        ({
          node: {
            fields: { slug },
            frontmatter: { title, date, tags },
            timeToRead,
          },
        }) => (
          <PostTitle
            key={slug}
            to={`/posts${slug}`}
            title={title}
            date={date}
            tags={tags}
            timeToRead={timeToRead}
          />
        ),
      )}
    </div>
  </Layout>
);

export default Index;

export const query = graphql`
  {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            rawDate: date
            date(formatString: "MMMM Do, YYYY")
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
