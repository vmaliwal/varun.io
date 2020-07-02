import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Articles from '../components/Articles';
import ArticlesNavigation from '../components/ArticlesNavigation';
import { AnimatedLink } from '../elements';
import Seo from '../components/Seo';

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
        <Seo />
        <Hero />
        <ArticlesNavigation />
        <Articles data={data} />
      </Container>
    </>
  );
}
