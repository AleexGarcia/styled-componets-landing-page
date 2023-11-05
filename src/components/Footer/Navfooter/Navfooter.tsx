import { Link, NavBox } from "./Navfooter.Styled";

function Navfooter() {
  const links = [
    {
      title: "About Us",
      url: "#",
    },
    {
      title: "Contact",
      url: "#",
    },
    {
      title: "Blog",
      url: "#",
    },
    {
      title: "Careers",
      url: "#",
    },
    {
      title: "Support",
      url: "#",
    },
    {
      title: "Privacy Policy",
      url: "#",
    },
  ];
  return (<NavBox>
    {links.map(link => <Link key={link.title} href={link.url}>{link.title}</Link> )}
  </NavBox>);
}

export default Navfooter;
