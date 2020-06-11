import React from 'react';
import PostTitle from './PostTitle';

const Posts: React.FC<{
  posts: any[];
}> = ({ posts }) => (
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
);

export default Posts;
