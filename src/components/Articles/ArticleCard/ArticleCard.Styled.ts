import styled from "styled-components";

export const ArticleBox = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 100%;
`;
export const Image = styled.img`
    border-radius: .5rem .5rem 0 0;
    width: 100%;
`;
export const Author = styled.span`
  color: ${(props) => props.theme.colors.grayishBlue};
  font-size: 14px;
`;
export const Title = styled.h4``;
export const Description = styled.p`
  color: ${(props) => props.theme.colors.grayishBlue};
`;
export const ContentBox = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
