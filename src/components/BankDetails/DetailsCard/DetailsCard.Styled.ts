import styled from "styled-components";

export const CardBox = styled.div`
  padding: 1rem 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  text-align: center;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    text-align: start;
    max-width: 45%;
  }
  @media screen and (min-width: 1024px) {
    max-width: 23%;
  }
`;

export const Image = styled.img``;

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.darkblue};
`;

export const Content = styled.p`
  line-height: 1.5;
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.grayishBlue};
`;
