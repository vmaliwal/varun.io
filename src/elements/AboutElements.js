import styled from 'styled-components';

export const AboutWrapper = styled.main`
  grid-column: 3 / span 10;
  grid-row: 2 / auto;

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 10;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-column: 2 / span 12;
  }
`;
