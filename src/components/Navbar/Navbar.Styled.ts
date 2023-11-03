import styled from "styled-components";

export const Link = styled.a`
  color: #000;
  text-decoration: none;
`;
export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  height: 90vh;
  left: 0;
  position: absolute;
  top: 10vh;
  width: 100vw;
  @media screen and (min-width: 1024px) {
    position: initial;
    height: auto;
    top: auto;
    width: auto;
    background: none;
  }
`;
export const Navigation = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  gap: 1rem;
  justify-content: center;
  margin: 0 auto;
  max-width: 88%;
  padding: 1.5rem 0;
  position: relative;
  top: 1rem;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    padding: 0;
    margin: 0;
    width: auto;
    position: initial;
  }
`;
