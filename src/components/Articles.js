import React from 'react';
import ArticleCard from './ArticleCard';

export default function Articles({ data }) {
  const { nodes } = data.allMdx;

  return (
    <>
      {nodes.map(({ frontmatter }) => (
        <ArticleCard
          title={frontmatter.title}
          date={frontmatter.date}
          slug={frontmatter.slug}
          excerpt={frontmatter.excerpt}
        />
      ))}
    </>
  );
}
