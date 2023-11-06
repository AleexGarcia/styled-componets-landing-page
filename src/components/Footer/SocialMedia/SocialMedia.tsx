import { Box, Link, Icon } from "./SocialMedia.Styled";

function SocialMedia() {
  const socialmedia = [
    {
      icon: "src/assets/images/IconFacebook.svg",
      url: "#",
    },
    {
      icon: "src/assets/images/IconYoutube.svg",
      url: "#",
    },
    {
      icon: "src/assets/images/IconTwitter.svg",
      url: "#",
    },
    {
      icon: "src/assets/images/IconPinterest.svg",
      url: "#",
    },
    {
      icon: "src/assets/images/IconInstagram.svg",
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
