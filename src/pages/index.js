import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Articles from '../components/Articles';
import ArticlesNavigation from '../components/ArticlesNavigation';
import ExternalLink from '../components/ExternalLink';

/**
 * TODOS
 * Add items to navigation header √
 * Add margins to header √
 * Fix footer according to design
 * Add copyright, gatsby etc text to footer
 * Add generative art on index page
 * Optimize for mobile, tablet
 * Create additional pages for About, Articles & Contact
 * Create individual article page
 * Add RSS functionality
 * Fetch data from MDX file
 * Change text on index page to be added to site metadata
 */

import { AnimatedLink } from '../elements';

export default function Home() {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        limit: 3
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { posted: { eq: true } } }
      ) {
        nodes {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
            excerpt
          }
        }
      }
    }
  `);

  return (
    <>
      <marquee
        style={{ marginTop: '0.3rem', color: 'grey', fontSize: '0.8rem' }}
      >
        This site is a wip, you can{' '}
        <AnimatedLink to="https://github.com/vmaliwal/varun.io">
          follow progress
        </AnimatedLink>
      </marquee>
      <Container>
        <Hero />
        <ArticlesNavigation />
        <Articles data={data} />
      </Container>
    </>
  );
}
