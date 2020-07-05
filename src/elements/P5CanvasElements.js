import styled from 'styled-components';

export const P5CanvasWrapper = styled.div`
  display: flex;
  margin: 1.3rem 0;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.tablet} {
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
