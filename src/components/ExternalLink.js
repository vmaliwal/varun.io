import React from 'react';

export default function ExternalLink({ to, children, ...rest }) {
  return (
    <a // eslint-disable-line jsx-a11y/anchor-has-content
      data-link-external
      href={to}
      target="_blank"
      rel="noopener noreferrer nofollow"
      {...rest}
    >
      <div> {children} </div>
    </a>
  );
}
