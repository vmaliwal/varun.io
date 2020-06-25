import styled from 'styled-components';

export const ArticlesNavigationWrapper = styled.div`
  grid-column: 3 / span 10;
  grid-row: 13 / span 1;
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  font-weight: 600;

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 10;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-column: 2 / span 12;
  }
`;
