import styled from "styled-components";

export const NavList = styled.ul``;
export const ItemList = styled.li`
  list-style: none;
  margin-bottom: 1rem;
  &:last-child{
    margin-bottom: 0;
  }
  @media screen and (min-width: 1024px) {
    display: inline;
    margin-right: 1rem;
    &:last-child{
      margin-right: 0;
    }
  }

  
`;

export const Link = styled.a`
  color: #000;
  text-decoration: none;
  border: 0;
  @media screen and (min-width: 1024px) {
    &:hover {
      cursor: pointer;
      border-image: linear-gradient(
        to left,
        ${(props) => props.theme.colors.brightCyan},
        ${(props) => props.theme.colors.limeGreen}
      );
      border-bottom-width: 5px;
      border-image-slice: 1;
      border-style: solid;
      padding-bottom: 24px;
    }
  }
`;
export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  height: 90vh;
  left: 0;
  position: absolute;
  top: 10vh;
  width: 100vw;
  @media screen and (min-width: 1024px) {
    background: none;
    height: auto;
    position: static;
    top: auto;
    width: min-content;
  }
`;
export const Navigation = styled.nav`
  background-color: white;
  border-radius: 8px;
  font-weight: 700;
  gap: 1rem;
  margin: 0 auto;
  max-width: 88%;
  padding: 1.5rem 0;
  position: relative;
  top: 1rem;
  text-align: center;
  @media screen and (min-width: 600px) {
    max-width: 50%;
  }
  @media screen and (min-width: 1024px) {
    max-width: max-content;
    flex-direction: row;
    margin: auto;
    padding: 0;
    position: inherit;
    width: 100%;
  }
`;
