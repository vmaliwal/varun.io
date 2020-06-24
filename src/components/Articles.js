import React from 'react';
import ArticleCard from './ArticleCard';

export default function Articles({ data }) {
  const { nodes } = data.allMdx;
  return (
    <>
      {nodes.map(({ frontmatter }, i) => (
        <ArticleCard
          title={frontmatter.title}
          date={frontmatter.date}
          key={frontmatter.slug}
          excerpt={frontmatter.excerpt}
          slug={frontmatter.slug}
          index={i}
        />
      ))}
    </>
  );
}
