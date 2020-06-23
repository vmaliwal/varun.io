import React from 'react';
import ArticleCard from './ArticleCard';

export default function Articles({ data }) {
  const { nodes } = data.allMdx;
  console.log(nodes);
  return (
    <>
      {nodes.map(({ frontmatter }) => (
        <ArticleCard
          title={frontmatter.title}
          date={frontmatter.date}
          key={frontmatter.slug}
          excerpt={frontmatter.excerpt}
          slug={frontmatter.slug}
        />
      ))}
    </>
  );
}
