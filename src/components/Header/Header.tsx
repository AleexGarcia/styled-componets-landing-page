import {
  Container,
  Header as HeaderBox,
  Logo,
  MenuButton,
} from "./Header.Styled";
import srcLogo from "../../assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "../Button/Button";

function Header() {
  const [isOpen, setMenu] = useState<boolean>(false);
  const toggleMenu = () => {
    isOpen ? setMenu(false) : setMenu(true);
  };
  const matches = useMediaQuery('(min-width:1024px');

  return (
    <HeaderBox>
      <Container>
        <Logo src={srcLogo} />
        <MenuButton onClick={toggleMenu}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </MenuButton>
        {isOpen || matches && <Navbar />}
        {matches && <Button>Request invite</Button>}
      </Container>
    </HeaderBox>
  );
}

export default Header;
