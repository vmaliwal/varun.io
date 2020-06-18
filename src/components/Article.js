import React from 'react';
import {
  ArticleWrapper,
  RectangleWrapper,
  ArticleTextWrapper,
  ArticleImageWraper,
} from '../elements';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

export default function Article() {
  return (
    <ArticleWrapper>
      <RectangleWrapper color="#36BA7B">
        <ArticleTextWrapper>
          <p className="article-title">
            Getting Started with Gatsby. How this blog was built.
          </p>
          <p className="article-excerpt">
            We will look into GatsbyJS and understand innerworkings of React
            with Gatsby.
          </p>
          {/* <ArticleImage></ArticleImage> */}
        </ArticleTextWrapper>
      </RectangleWrapper>
    </ArticleWrapper>
  );
}

export function ArticleImage() {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fluid: { originalName: { eq: "feature-image.jpg" } }) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `);

  return (
    <ArticleImageWraper>
      <Img fluid={data.imageSharp.fluid}></Img>
    </ArticleImageWraper>
  );
}
