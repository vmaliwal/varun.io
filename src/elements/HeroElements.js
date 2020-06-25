import styled from 'styled-components';

export const HeroWrapper = styled.div`
  grid-column: 3 / span 10;
  grid-row: 2 / 13;
  display: flex;
  min-height: 11rem;
  margin-bottom: 0.6rem;
  margin-right: 0.6rem;

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 10;
    grid-row: 2 / 13;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-column: 1 / span 14;
    grid-row: 2 / 13;
    min-height: 5rem;
    margin-left: 0.25rem;
  }
`;

export const HeroTextWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 0.5fr);
  min-height: 11rem;
  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-template-rows: repeat(13, 0.5fr);
  }
  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-template-rows: repeat(7, 0.5fr);
  }

  & .text-primary {
    grid-column: 2 / span 6;
    grid-row: 2 / span 3;
    color: ${(props) => props.theme.colors.primaryBorder};
    line-height: 180%;
    font-weight: 600;
    font-size: 2rem;

    @media ${(props) => props.theme.breakpoints.tablet} {
      grid-column: 2 / span 10;
      grid-row: 2 / span 3;
    }

    @media ${(props) => props.theme.breakpoints.mobile} {
      grid-column: 2 / span 10;
      grid-row: 1 / span 3;
      font-size: 1.75rem;
    }
  }

  & .text-secondary {
    grid-column: 2 / span 6;
    grid-row: 6 / span 8;
    color: ${(props) => props.theme.colors.primaryText};
    line-height: 180%;
    font-weight: 600;
    font-size: 1rem;

    @media ${(props) => props.theme.breakpoints.tablet} {
      grid-column: 2 / span 10;
      grid-row: 12 / span 2;
    }

    @media ${(props) => props.theme.breakpoints.mobile} {
      grid-column: 2 / span 10;
      grid-row: 5 / span 3;
    }
  }
`;

export const HeroSketchWrapper = styled.div`
  grid-column: 8 / span 4;
  grid-row: 2 / span 8;
  margin-left: 1rem;

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 4 / span 5;
    grid-row: 5 / span 6;
    /* grid-row: 2 / span 7; */
    /* display: none; */
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    display: none;
  }

  & p {
    font-size: 0.5rem;
    padding-right: 1.1rem;
    font-style: italic;
    font-weight: 700;
    padding-top: 0.1rem;

    @media ${(props) => props.theme.breakpoints.tablet} {
      font-size: 0.6rem;
      padding-right: 1.66rem;
    }
  }
`;
