import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Container from '../components/Container';
import Article from '../components/Article';
import Seo from '../components/Seo';
import FeatureImage from '../components/FeatureImage';

// TODO
// for articles we would need some elements that will need to be created that can be reused like H1, Link etc.

export default function singleArticle({ data }) {
  const { frontmatter, body } = data.mdx;
  let featureImage = frontmatter.featureImage
    ? frontmatter.featureImage.childImageSharp.fluid
    : false;
  return (
    <Container>
      <Seo
        title={frontmatter.title}
        description={frontmatter.excerpt}
        article={true}
      />
      {featureImage && <FeatureImage fluid={featureImage} />}

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
        featureImage {
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
