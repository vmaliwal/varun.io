import React from 'react';
import {
  ArticleCardWrapper,
  RectangleWrapper,
  ArticleTextWrapper,
  AnimatedLink,
} from '../elements';

export default function ArticleCard({ title, excerpt, date, slug, index }) {
  return (
    <ArticleCardWrapper>
      <RectangleWrapper articlecolorindex={index % 3}>
        <ArticleTextWrapper>
          <AnimatedLink
            to={slug}
            articlecolorindex={index % 3}
            className="article-title"
          >
            {title}
          </AnimatedLink>
          <p className="article-excerpt">{excerpt}</p>
          <p className="article-date">{date}</p>
        </ArticleTextWrapper>
      </RectangleWrapper>
    </ArticleCardWrapper>
  );
}
