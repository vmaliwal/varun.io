import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';

// Refer - https://github.com/gatsbyjs/gatsby/blob/fa0016f0d197b7179f53ff28e6287f4fbaa5936d/docs/docs/add-seo-component.md
export default function Seo({ title, description, keywords, article }) {
  const query = graphql`
    {
      site {
        siteMetadata {
          article
          author
          title
          description
          siteUrl
          titleTemplate
          twitterUsername
        }
      }
    }
  `;

  const {
    site: { siteMetadata },
  } = useStaticQuery(query);

  const { pathname } = useLocation();
  const metaTitle = title || siteMetadata.article;
  const metaDescription = description || siteMetadata.description;
  const metaUrl = `${siteMetadata.siteUrl}${pathname}`;
  const metaKeywords = keywords || [
    'blog',
    'gatsby',
    'mdx',
    'varun.io',
    'generative art',
    'creative coding',
    'technology',
    'personal blog',
  ];
  const metaArticle = article || siteMetadata.article;

  return (
    <Helmet title={metaTitle} titleTemplate={siteMetadata.titleTemplate}>
      <meta name="description" content={metaDescription} />

      {metaUrl && <meta property="og:url" content={metaUrl} />}

      {(metaArticle ? true : null) && (
        <meta property="og:type" content="article" />
      )}

      {metaTitle && <meta property="og:title" content={metaTitle} />}

      {metaDescription && (
        <meta property="og:description" content={metaDescription} />
      )}

      {metaKeywords && metaKeywords.length > 0 && (
        <meta name="keywords" content={metaKeywords.join(`, `)} />
      )}

      <meta name="twitter:card" content="summary_large_image" />

      {siteMetadata.twitterUsername && (
        <meta name="twitter:creator" content={siteMetadata.twitterUsername} />
      )}

      {metaTitle && <meta name="twitter:title" content={metaTitle} />}

      {metaDescription && (
        <meta name="twitter:description" content={metaDescription} />
      )}
    </Helmet>
  );
}
