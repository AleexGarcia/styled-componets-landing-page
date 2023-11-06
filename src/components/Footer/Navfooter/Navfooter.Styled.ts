import styled from "styled-components";

export const NavBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  @media screen and (min-width: 1024px) {
    grid-row: 1 /3;
    grid-column: 2 / 3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap:4rem;
  }
`;
export const Link = styled.a`
  color: ${(props) => props.theme.colors.lightGravishBlue};
  text-decoration: none;
`;
