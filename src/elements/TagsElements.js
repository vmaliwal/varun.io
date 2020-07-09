import styled from 'styled-components';

export const TagsArticleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  margin-top: 3.5rem;
  border-top: 1px solid rgb(240, 240, 242);

  & > em {
    font-size: 0.87rem;
    font-style: normal;

    & > a {
      font-weight: normal;
    }
  }
`;

export const TagsHeaderWrapper = styled.div`
  grid-column: 3 / span 10;
`;

export const AllTagsButtonWrapper = styled.div`
  grid-column: 3 / span 10;
  /* direction: rtl; */
`;
