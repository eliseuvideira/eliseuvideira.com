const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const PostComponent = require.resolve('./src/templates/Post.tsx');
  const query = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
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
  `);
  const posts = query.data.allMarkdownRemark.edges;
  for (const [index, { node: post }] of posts.entries()) {
    const prev = posts[index - 1] ? posts[index - 1].node : null;
    const next = posts[index + 1] ? posts[index + 1].node : null;
    const slug = post.fields.slug;
    createPage({
      component: PostComponent,
      path: `/posts${slug}`,
      context: {
        slug,
        prev,
        next,
      },
    });
  }
};

exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
