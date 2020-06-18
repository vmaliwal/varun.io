import React from 'react';
import {
  ArticleWrapper,
  RectangleWrapper,
  ArticleTextWrapper,
} from '../elements';

export default function Article() {
  return (
    <ArticleWrapper>
      <RectangleWrapper color="#36BA7B">
        <ArticleTextWrapper>
          <p className="article-title">
            Getting Started with Gatsby. How this blog was built.
          </p>
          <p className="article-excerpt">
            We will look into GatsbyJS and understand innerworkings of React
            with Gatsby.
          </p>
          <p className="article-date">September 2, 2020</p>
        </ArticleTextWrapper>
      </RectangleWrapper>
    </ArticleWrapper>
  );
}
