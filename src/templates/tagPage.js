import React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/Container';
import Seo from '../components/Seo';
import Articles from '../components/Articles';
import { AnimatedLink } from '../elements';
import Article from '../components/Article';

export default function tagsPage({ pageContext, data }) {
  const { tag } = pageContext;
  const { totalCount } = data.allMdx;

  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  return (
    <Container>
      <Seo />
      <h1>{tagHeader}</h1>
      <Articles data={data} />

      {/* TODO this should be a button.. And all tags page needs to be created */}
      <AnimatedLink to="/tags"> All Tags</AnimatedLink>
    </Container>
  );
}

export const pageQuery = graphql`
  query TagsPageQuery($tag: String!) {
    allMdx(
      limit: 2000
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      nodes {
        frontmatter {
          slug
          title
          date
          excerpt
        }
      }
    }
  }
`;
