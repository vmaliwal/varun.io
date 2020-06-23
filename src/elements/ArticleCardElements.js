import styled from 'styled-components';

export const ArticleCardWrapper = styled.div`
  grid-column: 3 / span 10;
  display: flex;
  min-height: 11rem;
  margin-bottom: 0.6rem;
  margin-right: 0.6rem;
`;

export const ArticleTextWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 0.3fr);
  min-height: 11rem;

  & .article-title {
    grid-column: 2 / span 11;
    grid-row: 2 / 3;
    color: #36ba7b;
    line-height: 180%;
    font-weight: 600;
    font-size: 1.5rem;
  }

  & .article-excerpt {
    grid-column: 2 / span 11;
    grid-row: 3 / 6;
    color: ${(props) => props.theme.colors.primaryText};
    line-height: 180%;
    font-weight: 600;
    font-size: 0.9rem;
  }

  & .article-date {
    grid-column: 2 / span 4;
    grid-row: 5;
    color: ${(props) => props.theme.colors.primaryText};
    line-height: 180%;
    font-weight: 600;
    font-size: 0.6rem;
  }

  & .article-title {
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;
    transform-origin: 0 100%;
  }

  & .article-title:hover,
  & .article-title:focus,
  & .article-title:active {
    transform: skew(-10deg);
  }
`;
