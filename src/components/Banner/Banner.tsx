import Button from "../Button/Button";
import {
  Container,
  Title,
  Text,
  Box,
  Image,
  ContentBox,
} from "./Banner.Styled";

function Banner() {
  return (
    <Box>
      <Container>
          <Image  />
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
