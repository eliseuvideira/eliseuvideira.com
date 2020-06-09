import React from 'react';
import { PostTitle } from './PostTitle';

export const Posts: React.FC<{
  posts: any[];
}> = ({ posts }) => (
  <div>
    {posts.map(
      ({
        node: {
          fields: { slug },
          frontmatter: { title, rawDate, date, tags },
          timeToRead,
        },
      }) => (
        <PostTitle
          key={slug}
          to={`/posts${slug}`}
          title={title}
          date={date}
          rawDate={rawDate}
          tags={tags}
          timeToRead={timeToRead}
        />
      ),
    )}
  </div>
);
