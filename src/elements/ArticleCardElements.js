import styled from 'styled-components';

export const ArticleCardWrapper = styled.div`
  grid-column: 3 / span 10;
  display: flex;
  min-height: 11rem;
  margin-bottom: 0.6rem;
  margin-right: 0.6rem;

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 10;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-column: 1 / span 14;
    margin-left: 0.25rem;
  }
`;

export const ArticleTextWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 0.3fr);
  min-height: 11rem;

  & .article-title {
    grid-column: 2 / span 11;
    grid-row: 2 / auto;
    line-height: 180%;
    font-weight: 600;
    font-size: 1.5rem;

    @media ${(props) => props.theme.breakpoints.tablet} {
      /* grid-column: 2 / span 6; */
    }

    @media ${(props) => props.theme.breakpoints.mobile} {
      grid-row: 1 / auto;
    }
  }

  & .article-excerpt {
    grid-column: 2 / span 11;
    grid-row: 3 / 6;
    color: ${(props) => props.theme.colors.primaryText};
    line-height: 180%;
    font-weight: 600;
    font-size: 0.9rem;
    @media ${(props) => props.theme.breakpoints.tablet} {
      /* grid-column: 2 / span 6; */
    }

    @media ${(props) => props.theme.breakpoints.mobile} {
      grid-row: 3 / span 3;
    }
  }

  & .article-date {
    grid-column: 2 / span 4;
    grid-row: 5;
    color: ${(props) => props.theme.colors.primaryText};
    line-height: 180%;
    font-weight: 600;
    font-size: 0.6rem;
  }
`;
