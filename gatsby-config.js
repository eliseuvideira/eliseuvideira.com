const dotenv = require('dotenv-safe');

dotenv.config();

module.exports = {
  siteMetadata: {
    title: 'eliseuvideira',
    description: "eliseuvideira's personal blog",
    author: 'Eliseu Videira',
    siteUrl: 'https://www.eliseuvideira.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
    'gatsby-remark-reading-time',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "eliseuvideira's personal blog",
        short_name: 'eliseuvideira blog',
        start_url: '/',
        background_color: '#312A3A',
        theme_color: '#FBFBFB',
        display: 'standalone',
        icon: `${__dirname}/content/assets/logo-icon.png`,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: true,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        minify: true,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
};
