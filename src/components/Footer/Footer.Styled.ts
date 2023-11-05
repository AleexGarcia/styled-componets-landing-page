import styled from "styled-components";

export const FooterBox = styled.section`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.darkblue};
`;
export const Logo = styled.img`
  fill: #fff;
  color: #fff;
`;
export const CopyrightText = styled.p`
    color: ${props => props.theme.colors.grayishBlue};
    
`;
