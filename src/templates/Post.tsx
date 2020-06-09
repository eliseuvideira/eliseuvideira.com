import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import styled from 'styled-components';
import { PostTitle } from '../components/Posts/PostTitle';
import Seo from '../components/Seo';

const PostContent = styled.div`
  margin-top: 60px;

  h2 {
    font-size: 32px;
    margin: 20px 0 5px;
  }

  p {
    font-size: 20px;
    line-height: 1.5;
    margin: 10px 0;
  }
`;

const PostNav = styled.ul`
  margin-top: 60px;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface PostProps {
  html: string;
  timeToRead: number;
  frontmatter: {
    title: string;
    description: string;
    rawDate: string;
    date: string;
    tags: string[];
    keywords: string[];
  };
  fields: {
    slug: string;
  };
}

const unique = (arr: string[]): string[] => [...(new Set(arr) as any)];

const Post: React.FC<{
  data: { markdownRemark: PostProps };
  pageContext: { prev: PostProps | null; next: PostProps | null };
}> = ({
  data: {
    markdownRemark: {
      html,
      timeToRead,
      frontmatter: { title, description, rawDate, date, tags, keywords },
      fields: { slug },
    },
  },
  pageContext: { prev, next },
}) => (
  <Layout>
    <Seo
      title={title}
      description={description}
      keywords={unique(keywords.concat(tags))}
      url={`/posts${slug}`}
    />
    <PostTitle
      title={title}
      rawDate={rawDate}
      date={date}
      tags={tags}
      timeToRead={timeToRead}
    />
    <PostContent>
      <article className="text" dangerouslySetInnerHTML={{ __html: html }} />
    </PostContent>
    <PostNav>
      <li>
        <span className="text-muted">
          {prev && (
            <Link to={`/posts${prev.fields.slug}`}>
              ← {prev.frontmatter.title}
            </Link>
          )}
        </span>
      </li>
      <li>
        <span className="text-muted">
          {next && (
            <Link to={`/posts${next.fields.slug}`}>
              {next.frontmatter.title} →
            </Link>
          )}
        </span>
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
        rawDate: date
        date(formatString: "MMMM Do, YYYY")
        tags
        description
        keywords
      }
      fields {
        slug
      }
    }
  }
`;
