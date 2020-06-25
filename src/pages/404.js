import React from 'react';
import { H1 } from '../elements';
import Container from '../components/Container';

export default function errorPage() {
  return (
    <Container>
      <H1 style={{ gridColumn: `3 / span 10`, gridRow: `2 / auto` }}>
        404 Not Found
      </H1>
    </Container>
  );
}
