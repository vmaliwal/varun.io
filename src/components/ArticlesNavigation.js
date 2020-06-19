import React from 'react';
import { ArticlesNavigationWrapper } from '../elements';
import { Link } from 'gatsby';

export default function ArticlesNavigation() {
  return (
    <ArticlesNavigationWrapper>
      <div>Latest Articles</div>
      <Link to="/articles" className="animated-link">
        <div>View All >></div>
      </Link>
    </ArticlesNavigationWrapper>
  );
}
