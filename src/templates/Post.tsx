import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import styled from 'styled-components';
import PostTitle from '../components/Posts/PostTitle';
import Seo from '../components/Seo';
import PrevNext from '../components/Posts/PrevNext';

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

interface PostProps {
  html: string;
  timeToRead: number;
  frontmatter: {
    title: string;
    description: string;
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
      frontmatter: { title, description, date, tags, keywords },
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
    <PostTitle title={title} date={date} tags={tags} timeToRead={timeToRead} />
    <PostContent>
      <article className="text" dangerouslySetInnerHTML={{ __html: html }} />
    </PostContent>
    <PrevNext
      prev={
        prev
          ? { link: `/posts${prev.fields.slug}`, title: prev.frontmatter.title }
          : null
      }
      next={
        next
          ? { link: `/posts${next.fields.slug}`, title: next.frontmatter.title }
          : null
      }
    />
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
