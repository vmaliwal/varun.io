import React from 'react';
import { NavWrapper } from '../elements';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <NavWrapper>
      <Link to="/">
        <div>varun.io</div>
      </Link>
    </NavWrapper>
  );
}
