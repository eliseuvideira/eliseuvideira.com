import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export const Seo: React.FC<{
  title: string;
  description: string;
  keywords: string[];
  url: string;
  meta?: any[];
}> = ({ title, description, keywords, url, meta }) => {
  const {
    site: {
      siteMetadata: { author, siteUrl },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          siteUrl
        }
      }
    }
  `);

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={title}
      meta={[
        { name: 'description', content: description },
        { name: 'author', content: author },
        { name: 'keywords', content: keywords.join(', ') },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:url', content: `${siteUrl}${url}`.replace(/\/$/, '') },
      ].concat(meta || [])}
    >
      <link rel="canonical" href={`${siteUrl}${url}`.replace(/\/$/, '')} />
    </Helmet>
  );
};
