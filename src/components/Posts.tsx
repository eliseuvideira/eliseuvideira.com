import React from 'react';
import { PostTitle } from './PostTitle';

export const Posts: React.FC<{
  posts: any[];
}> = ({ posts }) => (
  <ul>
    {posts.map(
      ({
        node: {
          fields: { slug },
          frontmatter: { title, date, tags },
          timeToRead,
        },
      }) => (
        <li key={slug}>
          <PostTitle
            to={`/posts${slug}`}
            title={title}
            date={date}
            tags={tags}
            timeToRead={timeToRead}
          />
        </li>
      ),
    )}
  </ul>
);
