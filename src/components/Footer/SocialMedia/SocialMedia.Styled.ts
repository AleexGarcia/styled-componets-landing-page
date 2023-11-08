import styled from "styled-components";
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  @media screen and (min-width: 1024px) {
    grid-row: 2 /3;
    grid-column: 1 / 2;
  }
`;
export const Link = styled.a`
  color: white;
  transition: ease-in-out .25s;
  &:hover{
    color: ${props => props.theme.colors.limeGreen};
  }
`;


