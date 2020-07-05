import styled from 'styled-components';

export const FeatureImageWrapper = styled.div`
  grid-column: 3 / span 10;
  overflow: hidden;
  position: relative;
  display: flex;
  max-height: 50vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 10;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-column: 2 / span 12;
  }

  & img {
    object-fit: contain !important;
  }

  & p {
    font-size: 0.7rem;
    font-style: italic;
    font-weight: 700;
    margin-top: 0.4rem;
  }
`;
