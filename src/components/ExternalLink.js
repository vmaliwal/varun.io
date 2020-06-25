import React from 'react';

export default function ExternalLink({ href, ...rest }) {
  return (
    <a // eslint-disable-line jsx-a11y/anchor-has-content
      data-link-external
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      {...rest}
    />
  );
}
