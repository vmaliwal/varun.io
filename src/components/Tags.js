import React from 'react';
import { AnimatedLink, TagsArticleWrapper } from '../elements';

export default function Tags({ keywords }) {
  return (
    <TagsArticleWrapper>
      <em style={{ paddingTop: `4rem` }}>
        Tagged with{' '}
        {keywords.map((tag, i) => (
          <span>
            <AnimatedLink to={'/articles/tags/' + tag}>{tag}</AnimatedLink>
            {keywords.length - 1 !== i && ', '}
          </span>
        ))}
      </em>
    </TagsArticleWrapper>
  );
}
