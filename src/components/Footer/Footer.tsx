import Button from "../Button/Button";
import { Container, CopyrightText, FooterBox, Logo } from "./Footer.Styled";
import Navfooter from "./Navfooter/Navfooter";
import SocialMedia from "./SocialMedia/SocialMedia";
import logo from "../../assets/white-logo.svg";
function Footer() {
  return (
    <Container>
      <FooterBox>
        <Logo src={logo} />
        <SocialMedia />
        <Navfooter />
        <Button>Request Invite</Button>
        <CopyrightText>© Easybank. All Rights Reserved</CopyrightText>
      </FooterBox>
    </Container>
  );
}

export default Footer;
