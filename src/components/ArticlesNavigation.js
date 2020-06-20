import React from 'react';
import { ArticlesNavigationWrapper } from '../elements';
import { Link } from 'gatsby';

export default function ArticlesNavigation() {
  const VIEW_ALL = `View All >>`;

  return (
    <ArticlesNavigationWrapper>
      <div>Latest Articles</div>
      <Link to="/articles" className="animated-link">
        <div>{VIEW_ALL}</div>
      </Link>
    </ArticlesNavigationWrapper>
  );
}
