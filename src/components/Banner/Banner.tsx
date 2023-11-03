import Button from "../Button/Button";
import {
  Container,
  Title,
  Text,
  Box,
  Image,
  ImageRatio,
  ContentBox,
} from "./Banner.Styled";
import srcImge from "../../assets/images/image-mockups.png";

function Banner() {
  return (
    <Box>
      <Container>
        <ImageRatio>
          <Image src={srcImge} />
        </ImageRatio>
        <ContentBox>
          <Title>Next generation digital banking</Title>
          <Text>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing , and much
            more.
          </Text>
          <Button>Request invite</Button>
        </ContentBox>
      </Container>
    </Box>
  );
}

export default Banner;
