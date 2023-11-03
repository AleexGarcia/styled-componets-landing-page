import styled from "styled-components";

export const Header = styled.header`
  max-height: 10vh;
  padding: 1rem 0;
  width: 100vw;
`;

export const Logo = styled.img``;

export const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 90%;
`;

export const MenuButton = styled.button`
  border: none;
  background: none;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
