import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const P = styled.p`
  margin: ${(props) => (props.margin ? props.margin : 0)};
  font-size: ${(props) => {
    switch (props.size) {
      case 'large':
        return `1.5rem`;
      case 'medium':
        return `1.125rem`;
      case 'small':
        return `1rem`;
      case 'xSmall':
        return `0.875rem`;
      case 'xxSmall':
        return `0.5rem`;
      default:
        return `1.125rem`;
    }
  }};
  line-height: ${(props) => {
    switch (props.size) {
      case 'large':
        return `1.8rem`;
      case 'medium':
        return `1.4375rem`;
      case 'small':
        return `1.375rem`;
      case 'xSmall':
        return `1.125rem`;
      case 'xxSmall':
        return `0.875rem`;
      default:
        return `1.4375rem`;
    }
  }};
  text-decoration: ${(props) =>
    props.textDecoration ? props.textDecoration : 'none'};

  font-weight: ${(props) => {
    switch (props.weight) {
      case 'normal':
        return 400;
      case 'bold':
        return 700;
      default:
        return 400;
    }
  }};

  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
`;

export const H1 = styled.h1`
  font-size: 2.25rem;
  line-height: 2.25rem;
  color: ${(props) => (props.color ? props.color : props.theme.primaryText)};
  font-weight: 400;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : 0)};
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  line-height: 1.875rem;
  color: ${(props) => (props.color ? props.color : props.theme.primaryText)};
  font-weight: 400;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : 0)};
`;

export const AnimatedLink = styled((props) => <Link {...props} />)`
  &:visited,
  &:link {
    text-decoration: none;
    color: ${(props) => getColor(props)};
    & div {
      transform: perspective(1px) translateZ(0);
      transition-duration: 0.3s;
      transition-property: transform;
      transform-origin: 0 100%;
    }
    & div:hover,
    & div:focus,
    & div:active {
      transform: skew(-10deg);
    }
  }
`;

export const RectangleWrapper = styled.div`
  border: 1px solid ${(props) => getColor(props)};
  border-radius: 10px;
  width: 100vw;
  box-shadow: 0.6rem 0.6rem 0px ${(props) => getColor(props)};
`;

function getColor(props) {
  if (props.color) return props.color;
  if (props.articlecolorindex !== undefined)
    return props.theme.colors.articles[props.articlecolorindex];

  return props.theme.colors.primaryText;
}
