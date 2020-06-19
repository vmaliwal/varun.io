import React from 'react';
import { NavWrapper } from '../elements';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <NavWrapper>
      <div>
        <Link to="/" className="animated-link">
          <div style={{ fontWeight: 1000 }}>varun.io</div>
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/articles" className="animated-link">
          <div>Articles</div>
        </Link>
        <Link to="/about" className="animated-link">
          <div>About</div>
        </Link>
        <Link to="/contact" className="animated-link">
          <div>Contact</div>
        </Link>
      </div>
    </NavWrapper>
  );
}
