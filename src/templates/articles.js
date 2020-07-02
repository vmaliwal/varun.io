import React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/Container';
import Articles from '../components/Articles';
import Seo from '../components/Seo';

export default function ArticlesPageTemplate({ pageContext, data }) {
  return (
    <Container>
      <Seo />
      <Articles data={data} />
    </Container>
  );
}

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      limit: $limit
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { posted: { eq: true } } }
      skip: $skip
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
`;
