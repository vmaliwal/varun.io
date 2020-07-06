import React from 'react';
import { ArticleWrapper, TagsArticleWrapper } from '../elements';
import Tags from './Tags';

export default function Article({ children }) {
  return <ArticleWrapper>{children}</ArticleWrapper>;
}

export function ArticleTags({ keywords }) {
  return (
    <TagsArticleWrapper>
      <em style={{ paddingTop: `4rem` }}>
        Tagged with <Tags keywords={keywords} />
      </em>
    </TagsArticleWrapper>
  );
}
