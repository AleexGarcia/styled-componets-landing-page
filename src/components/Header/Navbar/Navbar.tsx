import { Container, ItemList, Link, NavList, Navigation } from "./Navbar.Styled";

function Navbar() {
  const links = [
    {
      name: "Home",
      url: "#",
    },
    {
      name: "About",
      url: "#",
    },
    {
      name: "Contact",
      url: "#",
    },
    {
      name: "Blog",
      url: "#",
    },
    {
      name: "Careers",
      url: "#",
    },
  ];

  return (
    <Container>
      <Navigation>
        <NavList>
          {links.map((link) => (
            <ItemList key={link.name}>
              <Link  href={link.url}>
                {link.name}
              </Link>
            </ItemList>
          ))}
        </NavList>
      </Navigation>
    </Container>
  );
}

export default Navbar;
