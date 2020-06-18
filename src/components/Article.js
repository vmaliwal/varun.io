import React from 'react';
import {
  ArticleWrapper,
  RectangleWrapper,
  ArticleTextWrapper,
} from '../elements';

export default function Article() {
  return (
    <ArticleWrapper>
      <RectangleWrapper>
        <ArticleTextWrapper>
          <p className="article-title">
            Getting Started with Gatsby. How this blog was built.
          </p>
          <p className="article-excerpt">
            We will look into GatsbyJS and understand innerworkings of React
            with Gatsby.
          </p>
        </ArticleTextWrapper>
      </RectangleWrapper>
    </ArticleWrapper>
  );
}
