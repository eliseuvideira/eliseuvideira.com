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
          fields: { slug: string; readingTime: { minutes: number } };
          frontmatter: { title: string; date: string; tags: string[] };
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
            fields: {
              slug,
              readingTime: { minutes },
            },
            frontmatter: { title, date, tags },
          },
        }) => (
          <PostTitle
            key={slug}
            to={`/posts${slug}`}
            title={title}
            date={date}
            tags={tags}
            timeToRead={Math.ceil(minutes)}
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
            readingTime {
              minutes
            }
          }
        }
      }
    }
  }
`;
