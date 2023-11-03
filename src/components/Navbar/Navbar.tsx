import { Container, Link, Navigation } from "./Navbar.Styled";

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
        {links.map((link) => (
          <Link key={link.name} href={link.url}>
            {link.name}
          </Link>
        ))}
      </Navigation>
    </Container>
  );
}

export default Navbar;
