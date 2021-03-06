import styled from 'styled-components';

export const ArticleWrapper = styled.main`
  grid-column: 4 / span 8;
  position: relative;
  /* grid-row: 2 / auto; */

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 10;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-column: 2 / span 12;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme.colors.primaryText};
    margin-top: 2rem;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 2.5rem;
    font-weight: 400;
  }

  h2 {
    font-size: 1.8rem;
    line-height: 1.875rem;
    font-weight: 400;
  }

  h3 {
    font-size: 1.375rem;
    line-height: 1.625rem;
    font-weight: 700;
  }

  h4 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 700;
  }

  h5 {
    font-size: 1.125rem;
    line-height: 1.375rem;
    font-weight: 700;
  }

  h6 {
    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  p {
    font-size: 1.125rem;
    line-height: 1.875rem;
    font-weight: 400;
    margin-top: 2rem;
    /* font-family: 'Inter'; */
  }
  a {
    text-decoration: underline;
  }
  strong {
    font-weight: 700;
  }
  em {
    font-style: italic;
  }
  del {
    text-decoration: line-through;
  }

  blockquote p {
    font-style: italic;
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align: center;
    max-width: 36rem;
    margin: 3rem auto;
  }

  ul,
  ol {
    margin: 1rem 0 1rem 2rem;
  }

  li {
    margin: 0.25rem 0;
  }

  code {
    padding: 0.3rem;
    border-radius: 0.3rem;
    color: rgb(215, 58, 73);
    background-color: rgb(250, 248, 245);
  }

  hr {
    border: 0;
    height: 1px;
  }

  table {
    width: 100%;
    border-spacing: 0.25rem;
    border-collapse: collapse;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
  }

  th {
    font-weight: 700;
  }

  table,
  th,
  td {
    border: 1px solid ${(props) => props.theme.colors.primaryText};
  }

  th,
  td {
    text-align: left;
    padding: 0.5rem;
  }

  a {
    color: ${(props) => props.theme.colors.primaryBorder} !important;
    font-weight: 700;
    border-bottom: 2px solid ${(props) => props.theme.colors.primaryBorder};
  }
`;
