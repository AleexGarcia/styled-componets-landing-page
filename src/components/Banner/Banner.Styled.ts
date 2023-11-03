import styled from "styled-components";
export const Box = styled.div`
  min-height: 100vh;
  background-repeat: no-repeat;
  background-image: url("src/assets/images/bg-intro-mobile.svg");
  background-size: 100% 66vh;
  background-position: top;
`;
export const ImageRatio = styled.div`
  height: 50vh;
  width: 100%;
  margin-bottom: 1rem;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-position: bottom;
  object-fit: cover;
`;
export const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 50%;
    flex-direction: row;
  }
`;
export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: #000;
`;
export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes.normal};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.veryLightGray};
`;

export const ContentBox = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.25em;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 50%;
    order: -1;
  }
`;
