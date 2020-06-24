import React from 'react';
import { NavWrapper, AnimatedLink } from '../elements';

export default function Nav() {
  return (
    <NavWrapper>
      <div>
        <AnimatedLink to="/">
          <div style={{ fontWeight: 1000 }}>varun.io</div>
        </AnimatedLink>
      </div>
      <div className="nav-right">
        <AnimatedLink to="/articles">
          <div>Articles</div>
        </AnimatedLink>
        <AnimatedLink to="/about">
          <div>About</div>
        </AnimatedLink>
        <AnimatedLink to="/contact">
          <div>Contact</div>
        </AnimatedLink>
      </div>
    </NavWrapper>
  );
}
