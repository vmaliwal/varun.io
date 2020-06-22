import React from 'react';
import {
  ArticleWrapper,
  RectangleWrapper,
  ArticleTextWrapper,
} from '../elements';

export default function ArticleCard({ title, excerpt, date, slug }) {
  console.log(slug);
  return (
    <ArticleWrapper>
      <RectangleWrapper color="#36BA7B">
        <ArticleTextWrapper>
          <p className="article-title">{title}</p>
          <p className="article-excerpt">{excerpt}</p>
          <p className="article-date">{date}</p>
        </ArticleTextWrapper>
      </RectangleWrapper>
    </ArticleWrapper>
  );
}
