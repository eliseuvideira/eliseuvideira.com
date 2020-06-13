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
        name: 'images',
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts`,
        name: 'posts',
      },
    },
    'gatsby-transformer-remark',
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
        icon: `${__dirname}/content/images/logo-icon.png`,
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
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark-mode',
        classNameLight: 'light-mode',
        storageKey: 'dark-mode',
        minify: true,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-styled-components',
  ],
};
