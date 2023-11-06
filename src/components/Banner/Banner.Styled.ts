import styled from "styled-components";
export const Box = styled.div`
  padding-bottom: 2rem;
  background-repeat: no-repeat;
  background-image: url("src/assets/images/bg-intro-mobile.svg");
  background-size: 100% 66vh;
  background-position: top;
  @media screen and (min-width: 768px) {
    background-image: url("src/assets/images/bg-intro-desktop.svg");
    background-position: 70vh -36vh;
    background-size: 90%;
    height: 75vh;
  }
  @media screen and (min-width: 1024px) {
    min-height: auto;
    height: 75vh;
  }
`;

export const Image = styled.div`
  background-image: url("src/assets/images/image-mockups.png");
  background-size: cover;
  background-position: 0% 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 52vh;
  @media screen and (min-width: 768px) {
    height: 100vh;
    position: relative;
    object-fit: cover;
    right: -15%;
    bottom: 5%;
  }
`;

export const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1.25fr 1fr;
    grid-template-rows: 100%;
    height: 85vh;
    max-width: 100%;
    overflow: hidden;
  }
`;

export const ContentBox = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.25em;
  justify-content: space-between;
 
  @media screen and (min-width: 768px) {
    order: -1;
    text-align: left;
    align-items: flex-start;
    margin-left: 10%;
  }
  
  @media screen and (min-width: 1024px) {
    width: 60%;
  }
 
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.darkblue};
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes.normal};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.grayishBlue};
`;
