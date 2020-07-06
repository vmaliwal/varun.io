import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Container from '../components/Container';
import Article, { ArticleTags } from '../components/Article';
import Seo from '../components/Seo';
import FeatureImage from '../components/FeatureImage';

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
        keywords={frontmatter.tags}
      />
      {featureImage && (
        <FeatureImage
          fluid={featureImage}
          imgText={frontmatter.featureImageText}
        />
      )}

      <Article>
        <h1>{frontmatter.title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
        <ArticleTags keywords={frontmatter.tags} />
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
        tags
        featureImageText
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
