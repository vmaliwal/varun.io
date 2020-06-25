import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: 2fr auto auto auto auto;
  grid-gap: 2.5rem 2.5rem;

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-template-columns: 1fr repeat(10, 1fr) 1fr;
    grid-gap: 1rem 1rem;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr repeat(12, 1fr) 1fr;
    grid-gap: 1fr 1fr;
  }
`;
