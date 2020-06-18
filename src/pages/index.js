import React from 'react';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Article from '../components/Article';

export default function Home() {
  return (
    <Container>
      <Hero />
      <Article />
      <Article />
      <Article />
    </Container>
  );
}
