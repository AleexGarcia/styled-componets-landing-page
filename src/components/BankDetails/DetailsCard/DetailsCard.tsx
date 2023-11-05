import { CardBox, Content, Image, Title } from "./DetailsCard.Styled";

interface IDetailsCard {
  url: string;
  title: string;
  content: string;
}

function DetailsCard({ url, title, content }: IDetailsCard) {
  return (
    <CardBox>
      <Image src={url} />
      <Title>{title}</Title>
      <Content>{content}</Content>
    </CardBox>
  );
}

export default DetailsCard;
