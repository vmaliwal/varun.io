import styled from 'styled-components';

export const HeroWrapper = styled.div`
  grid-column: 3 / span 10;
  grid-row: 2 / 13;
  display: flex;
  min-height: 11rem;
  margin-bottom: 0.6rem;
  margin-right: 0.6rem;
`;

export const HeroTextWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 4.2rem));
  grid-template-rows: repeat(12, minmax(auto, auto));
  min-height: 11rem;

  & .text-primary {
    grid-column: 2 / span 7;
    grid-row: 3 / span 7;
    color: ${(props) => props.theme.colors.primaryBorder};
    line-height: 180%;
    font-weight: 600;
    font-size: 2rem;
  }

  & .text-secondary {
    grid-column: 2 / span 7;
    grid-row: 9;
    color: ${(props) => props.theme.colors.primaryText};
    line-height: 180%;
    font-weight: 600;
    font-size: 1rem;
  }
`;
