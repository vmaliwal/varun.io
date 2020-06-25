import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  grid-column: 3 / span 10;
  min-height: 1rem;
  margin-top: 3rem;
  margin-bottom: -10rem;
  display: flex;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 10;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    min-height: 1rem;
    grid-column: 2 / span 12;
  }
`;

export const FooterSocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & p {
    font-size: 0.8rem;
    align-self: center;
  }
`;

export const FooterSocialIcons = styled.div`
  margin: 2rem 0;
  & img {
    height: 22px;
    padding: 0 1rem;
    transition: filter 0.3s ease;
  }

  & img:hover,
  img:focus {
    filter: brightness(50%);
  }
`;
