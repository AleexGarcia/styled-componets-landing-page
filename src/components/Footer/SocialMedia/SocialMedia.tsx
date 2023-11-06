import { Box, Link, Icon } from "./SocialMedia.Styled";

function SocialMedia() {
  const socialmedia = [
    {
      icon: "src/assets/images/icon-facebook.svg",
      url: "#",
    },
    {
      icon: "src/assets/images/icon-youtube.svg",
      url: "#",
    },
    {
      icon: "src/assets/images/icon-twitter.svg",
      url: "#",
    },
    {
      icon: "src/assets/images/icon-pinterest.svg",
      url: "#",
    },
    {
      icon: "src/assets/images/icon-instagram.svg",
      url: "#",
    },
  ];
  return (
    <Box>
      {socialmedia.map((media) => (
        <Link key={media.icon} target="_blank" href={media.url}>
          <Icon src={media.icon} />
        </Link>
      ))}
    </Box>
  );
}

export default SocialMedia;
