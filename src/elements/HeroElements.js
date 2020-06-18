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
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 0.5fr);
  min-height: 11rem;

  & .text-primary {
    grid-column: 2 / span 6;
    grid-row: 2 / span 3;
    color: ${(props) => props.theme.colors.primaryBorder};
    line-height: 180%;
    font-weight: 600;
    font-size: 2rem;
  }

  & .text-secondary {
    grid-column: 2 / span 6;
    grid-row: 6 / span 8;
    color: ${(props) => props.theme.colors.primaryText};
    line-height: 180%;
    font-weight: 600;
    font-size: 1rem;
  }
`;
