import React from 'react';
import {
  ArticleCardWrapper,
  RectangleWrapper,
  ArticleTextWrapper,
} from '../elements';

export default function ArticleCard({ title, excerpt, date, slug }) {
  return (
    <ArticleCardWrapper>
      <RectangleWrapper color="#36BA7B">
        <ArticleTextWrapper>
          <p className="article-title">{title}</p>
          <p className="article-excerpt">{excerpt}</p>
          <p className="article-date">{date}</p>
        </ArticleTextWrapper>
      </RectangleWrapper>
    </ArticleCardWrapper>
  );
}
