import React from 'react';
import { AboutWrapper } from '../elements';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Container from '../components/Container';

export default function about({ data }) {
  const { body } = data.mdx;

  return (
    <Container>
      <AboutWrapper>
        <MDXRenderer>{body}</MDXRenderer>
      </AboutWrapper>
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
