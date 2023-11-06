import styled from "styled-components";
export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.darkblue};
`;
export const FooterBox = styled.section`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: auto auto;
    max-width: 90%;
    margin: 0 auto;
    justify-items: flex-start;
  }
`;
export const Logo = styled.img`
  
`;
export const CopyrightText = styled.p`
  color: ${(props) => props.theme.colors.grayishBlue};
`;
