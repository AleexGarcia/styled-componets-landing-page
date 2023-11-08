import { Box, Link } from "./SocialMedia.Styled";

import IconFacebook  from '../../../assets/images/IconFacebook.svg?react'
import IconTwitter  from '../../../assets/images/IconTwitter.svg?react'
import IconInstagram  from '../../../assets/images/IconInstagram.svg?react'
import IconPinterest  from '../../../assets/images/IconPinterest.svg?react'
import IconYoutube  from '../../../assets/images/IconYoutube.svg?react'

function SocialMedia() {
  const socialmedia = [
    {
      name: 'facebooks',
      icon: <IconFacebook/>,
      url: "#facebook",
    },
    {
      name: 'twitter',
      icon: <IconTwitter/>,
      url: "#twitter",
    },
    {
      name: 'instagram',
      icon: <IconInstagram/>,
      url: "#",
    },
    {
      name: 'pinterest',
      icon: <IconPinterest/>,
      url: "#",
    },
    {
      name: 'youtube',
      icon: <IconYoutube/>,
      url: "#",
    },
  ];
  
  return (
    <Box>
      {socialmedia.map((media) => (
        <Link key={media.name} target="_blank" href={media.url}>
          {media.icon}
        </Link>
      ))}
    </Box>
  );
}

export default SocialMedia;
