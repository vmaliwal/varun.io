import React from 'react';
import { AnimatedLink } from '../elements';
import { toKebabCase } from '../utils/string';

export default function Tags({ keywords }) {
  return (
    <>
      {keywords.map((tag, i) => (
        <span>
          <AnimatedLink to={`/articles/tags/${toKebabCase(tag)}`}>
            {tag}
          </AnimatedLink>
          {keywords.length - 1 !== i && ', '}
        </span>
      ))}
    </>
  );
}
