import React from 'react';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Article from '../components/Article';
import ArticlesNavigation from '../components/ArticlesNavigation';

/**
 * TODOS
 * Add items to navigation header
 * Add margins to header
 * Fix footer according to design
 * Add copyright, gatsby etc text to footer
 * Create additional pages for About, Articles & Contact
 * Create individual article page
 * Add RSS functionality
 * Fetch data from MDX file
 * Add generative art on index page
 */

export default function Home() {
  return (
    <Container>
      <Hero />
      <ArticlesNavigation />
      <Article />
      <Article />
      <Article />
    </Container>
  );
}
