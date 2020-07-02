import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Container from '../components/Container';
import Article from '../components/Article';
import Seo from '../components/Seo';

// TODO
// for articles we would need some elements that will need to be created that can be reused like H1, Link etc.

export default function singleArticle({ data }) {
  const { frontmatter, body } = data.mdx;
  return (
    <Container>
      <Seo
        title={frontmatter.title}
        description={frontmatter.excerpt}
        article={true}
      />
      <Article>
        <h1>{frontmatter.title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
      </Article>
    </Container>
  );
}

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        excerpt
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
