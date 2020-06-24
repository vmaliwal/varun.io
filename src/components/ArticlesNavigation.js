import React from 'react';
import { ArticlesNavigationWrapper, AnimatedLink } from '../elements';

export default function ArticlesNavigation() {
  const VIEW_ALL = `View All >>`;

  return (
    <ArticlesNavigationWrapper>
      <div>Latest Articles</div>
      <AnimatedLink to="/articles">
        <div>{VIEW_ALL}</div>
      </AnimatedLink>
    </ArticlesNavigationWrapper>
  );
}
