---
title: My First Post
description: In this post I go through the steps required to develop and publish this own website
date: 2020-06-07T20:40:41.751Z
tags: [javascript, gatsby, react]
keywords: [website, post, gatsby, build]
---

Hi, this is my first post. :)

Since I'm in new with writting posts, I decided to walk you throught the steps I followed to build this website using Gatsby.

## Deciding Technologies

I'm javascript developer, so I'm biased towards javascript, therefore anything that doesn't involve javascript is out of question, sorry php.

There are currently three main javascript frameworks for frontend: React, Angular and Vue. If you look at the stateofjs survey of 2019 (<a href="https://2019.stateofjs.com/front-end-frameworks/" target="_blank" rel="noopener">https://2019.stateofjs.com/front-end-frameworks/</a>), you can see that React is ahead in most categories, the most important one I think is the one which the respondents say they have used and plan to used the technology again. The recently published stackoverflow survey of 2020 (<a href="https://insights.stackoverflow.com/survey/2020" target="_blank" rel="noopener">https://insights.stackoverflow.com/survey/2020</a>), also ranks React top 2 in the Most Popular Web Frameworks (sic, it's not an framework, it's an library, read the docs!) and in the Most Loved Web Framework.

Have said so, all three (except Angular) are good choices, just stick with one and learn it in depth.

Personally I like React, even if the surveys weren't on my side (but they are and I'm gonna use them), I would still choose it, because I like the concept of javascript universal. I would love to use javascript everywhere, even for markup.

Searching for some time I found Gatsby the best resource for this endeavor, since it builds on top of React to create highly optimized webpages, with things like search engine optimization, server side rendering, the documentation is pretty good, and there are plenty of available material.

## Learning phase

I completed two courses on Packt on Gatsby before trying myself, the first one The Gatsby Masterclass, I learned about the fundamentals of Gatsby, how it works, the second Hands-On Web Development with React and GatsbyJS was like the first, but had great content on search engine optimization and setting up google analytics.

## Drawing an interface

I looked for some templates to use as an starter, but everything looked bloated and I decided for the default starter, and just copy things from two starters I liked, the <a href="https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/" target="_blank" rel="noopener">gatsby-starter-blog</a> and <a href="https://www.gatsbyjs.org/starters/LekoArts/gatsby-starter-minimal-blog/" target="_blank" rel="noopener"> gatsby-starter-minimal-blog</a>. I liked gatsby-starter-blog simple presentation, which looked pretty modern, and I also liked the dark mode option on gatsby-starter-minimal-blog.

I went on figma and drew some pages until I liked the results, I ended up with this layout <a href="https://www.figma.com/file/QjNpeElFPIG3fube0pnVyy/eliseuvideira.com" target="_blank" rel="noopener">https://www.figma.com/file/QjNpeElFPIG3fube0pnVyy/eliseuvideira.com</a>

## Coding phase

Now with the requirements in hand I just needed to code this website.

There are two pages, Index and Post. The Index page is composed of three main components: Header, Posts and Footer. The Header is the same in the Index and the Post page, the same with the footer. So I decided to create the Layout Component, which recieves an children property and renders everything with the same Header and Footer.

The Header component is as follows:

```tsx
const Header: React.FC<{
  title: string;
  dark: boolean;
  onToggleDark: () => void;
}> = ({ title, dark, onToggleDark }) => (
  <div className="logo" style={{ height: '30px' }}>
    <StyledHeader>
      <Title onClick={() => navigate('/')}>{title}</Title>
      <Icon onClick={onToggleDark}>
        {dark ? (
          <SunIcon style={{ width: '30px', height: '30px' }} />
        ) : (
          <MoonIcon style={{ width: '30px', height: '30px' }} />
        )}
      </Icon>
    </StyledHeader>
  </div>
);
```

It recieves three properties, title, which in my case is always "eliseuvideira", dark, which tells the component which icon to render, and onToggleDark, which is called whenever the dark mode icon is clicked.

This is the Footer component:

```tsx
const Footer: React.FC = () => (
  <StyledFooter style={{ height: '80px' }}>
    <div className="text-muted">
      <Paragraph>
        &copy; {new Date().getFullYear()}, Built with{' '}
        <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener">
          Gatsby
        </a>
      </Paragraph>
    </div>
  </StyledFooter>
);
```

It's just an footer tag with 80px of height, the difficult part was to make the footer stick to the bottom without wrecking everything, the bottom line is that css is hard.

Now with those two components we can build the Layout:

```tsx
const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const darkMode = useDarkMode(true);

  const onToggleDark = () => {
    if (darkMode.value) {
      darkMode.disable();
    } else {
      darkMode.enable();
    }
  };

  return (
    <Theme>
      <Wrapper>
        <Content>
          <Container>
            <MainContent>
              <Header
                dark={darkMode.value}
                title="eliseuvideira"
                onToggleDark={onToggleDark}
              />
              {children}
              <Spacing />
            </MainContent>
            <Footer />
          </Container>
        </Content>
      </Wrapper>
    </Theme>
  );
};
```

The useDarkMode is an custom hook to handle themeing. The Theme component is an styled component which sets all global css, and the other ones (Wrapper, Content, Container, MainContent, Spacing) are just hacks to make to the Footer stick to the bootom, which is not that easy.

Now we can focus on the content of Index page, which is an list of Posts. Looking on figma the same component which render one item in the Index page, renders the title of the Post page, so I decided to make an PostTitle component.

```tsx
const PostTitle: React.FC<{
  to?: string;
  title: string;
  date: string;
  tags: string[];
  timeToRead: number;
}> = ({ to, title, date, tags, timeToRead }) => (
  <Title>
    <h1 className="title">{to ? <Link to={to}>{title}</Link> : title}</h1>
    <div className="text-muted">
      <span>
        {date} — {tags.join(', ')}
      </span>
      <span>{timeToRead} min read</span>
    </div>
  </Title>
);
```

This component will make the appearance consistent between pages. We end up with this Index page, which recieves graphql data from the markdown files:

```tsx
const Index: React.FC<{ data: { allMarkdownRemark: { edges: any[] } } }> = ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => (
  <Layout>
    <Seo
      title="eliseuvideira"
      description="Eliseu Videira's blog site where he writes everything about javascript"
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
```

The Seo component adds meta tags to the head section, to improve the search engine optimization.

Now we are done with the static pages, each Post has to be render differently, we need to query data from the markdown files, loop through its results, and for each one create an page.

First we need to setup the Post page template. The Post page uses the same Layout as Index, so we end up with the same Header and Footer as Index.

The content of the Post page is compose of three sections, the PostTitle, which is the same that is used in Index, the PostContent which is the html converted from markdown file, and the PostNav, which shows the previous and next post allowing users to navigate between posts.

This is the Post template page:

```tsx
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
```

Now we need to set up the createPages API from the gatsby-node.js file, to pass all data from markdown files to the template we just created.

```javascript
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
```

The createPages function recieves an createPage action and an graphql query, with graphql we query all markdown files, then loop through all of them and create an page for each, but since we need to know the slug of the markdown to create an correct path, we also need to implement the onCreateNode, to add this information.

That's the setup I use for this website.

The things that come to mind that I still need to fix are the loading time of fonts taking too long, adding an tags page, fix the typography and fully implementing the prismjs component to add more functionality.
