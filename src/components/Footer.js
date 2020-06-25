import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  FooterWrapper,
  FooterSocialIcons,
  FooterSocialWrapper,
} from '../elements';

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      github: file(relativePath: { eq: "github.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <p>&#169; {new Date().getFullYear()} Varun Maliwal</p>
        <FooterSocialIcons>
          <a
            href="https://linkedin.com/in/varun-maliwal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.linkedin.publicURL} alt="LinkedIn logo" />
          </a>
          <a
            href="https://github.com/vmaliwal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.github.publicURL} alt="Github logo" />
          </a>
          <a
            href="https://twitter.com/vroom_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.twitter.publicURL} alt="Twitter logo" />
          </a>
        </FooterSocialIcons>
      </FooterSocialWrapper>
    </FooterWrapper>
  );
}
