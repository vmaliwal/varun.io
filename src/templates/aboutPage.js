import React from 'react';
import { ArticleWrapper } from '../elements';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Container from '../components/Container';
import Seo from '../components/Seo';

export default function about({ data }) {
  const { body } = data.mdx;

  return (
    <Container>
      <Seo />
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
