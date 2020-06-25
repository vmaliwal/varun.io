import styled from 'styled-components';

export const NavWrapper = styled.nav`
  grid-column: 3 / span 10;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  min-height: 5rem;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 10;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-column: 2 / span 12;
    grid-row: 1 / span 1;
    min-height: 4rem;
  }

  & .nav-right div {
    display: inline-block;
    padding-left: 2rem;

    @media ${(props) => props.theme.breakpoints.tablet} {
      /* grid-column: 2 / span 6; */
    }

    @media ${(props) => props.theme.breakpoints.mobile} {
      padding-left: 1rem;
    }
  }
`;
