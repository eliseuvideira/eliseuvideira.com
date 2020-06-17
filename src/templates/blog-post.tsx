import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import PostTitle from '../components/post/post-title';
import Seo from '../components/seo';
import PrevNext from '../components/post/post-navigation';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const PostContent = styled.div`
  margin-top: 60px;

  h2 {
    margin: 20px 0 5px;
  }

  p {
    line-height: 1.5;
    margin: 10px 0;
  }
`;

interface PostProps {
  body: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    tags: string[];
    keywords: string[];
  };
  fields: {
    slug: string;
    readingTime: {
      minutes: number;
    };
  };
}

const unique = (arr: string[]): string[] => [...(new Set(arr) as any)];

const Post: React.FC<{
  data: { mdx: PostProps };
  pageContext: { prev: PostProps | null; next: PostProps | null };
}> = ({
  data: {
    mdx: {
      body,
      frontmatter: { title, description, date, tags, keywords },
      fields: {
        slug,
        readingTime: { minutes },
      },
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
      date={date}
      tags={tags}
      timeToRead={Math.ceil(minutes)}
    />
    <PostContent className="text">
      <MDXRenderer>{body}</MDXRenderer>
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
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        tags
        description
        keywords
      }
      fields {
        slug
        readingTime {
          minutes
        }
      }
    }
  }
`;
