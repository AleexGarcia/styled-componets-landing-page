import styled from "styled-components";

export const ArticleBox = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
  @media screen and (min-width: 768px) {
    max-width: 45%;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1024px) {
    max-width: 24%;
  }
`;
export const Image = styled.img`
  border-radius: 0.5rem 0.5rem 0 0;
  width: 100%;
  height: 200px;
  object-fit: cover;
 
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
  background-color: ${props => props.theme.colors.lightGravishBlue};
  border-radius: 0 0 .5rem .5rem;
`;
