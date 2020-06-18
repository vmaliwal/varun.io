import styled from 'styled-components';

export const ArticleWrapper = styled.div`
  grid-column: 2 / span 12;
  grid-row: 13 / span auto;
  display: flex;
  min-height: 11rem;
  margin-bottom: 0.6rem;
  margin-right: 0.6rem;
`;

export const ArticleTextWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(10, minmax(auto, 4.2rem));
  grid-template-rows: repeat(10, minmax(auto, auto));
  min-height: 11rem;

  & .article-title {
    grid-column: 2 / span 7;
    grid-row: 2 / 3;
    color: ${(props) => props.theme.colors.primaryBorder};
    line-height: 180%;
    font-weight: 600;
    font-size: 1.5rem;
  }

  & .article-excerpt {
    grid-column: 2 / span 7;
    grid-row: 4 / 6;
    color: ${(props) => props.theme.colors.primaryText};
    line-height: 180%;
    font-weight: 600;
    font-size: 0.9rem;
  }
`;
