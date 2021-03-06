import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { FeatureImageWrapper } from '../elements';

export default function FeatureImage({ fluid, imgText }) {
  const data = useStaticQuery(graphql`
    query FeatureImageDefault {
      imageSharp(fluid: { originalName: { eq: "feature-image.jpg" } }) {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `);

  return (
    <FeatureImageWrapper>
      <Img
        fluid={fluid ? fluid : data.imageSharp.fluid}
        style={{ width: `100%`, height: `100%` }}
      />
      {imgText && <p>{imgText}</p>}
    </FeatureImageWrapper>
  );
}
