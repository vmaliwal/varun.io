import React from 'react';
import { ArticleWrapper } from '../elements';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Container from '../components/Container';

export default function about({ data }) {
  const { body } = data.mdx;

  return (
    <Container>
      <ArticleWrapper>
        <MDXRenderer>{body}</MDXRenderer>
      </ArticleWrapper>
    </Container>
  );
}

export const pageQuery = graphql`
  query AboutPageQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        slug
      }
    }
  }
`;
