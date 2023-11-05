import { ArticleBox ,Image, Author, Title, Description} from "./ArticleCard.Styled";
import { ContentBox } from "./ArticleCard.Styled";

interface IArticleCard {
  author: string,
  title: string,
  resume: string,
  url: string
}

function ArticleCard({author,title,resume,url}:IArticleCard) {
  return (
    <ArticleBox>
      <Image src={url}/>
      <ContentBox>
        <Author>{author}</Author>
        <Title>{title}</Title>
        <Description>{resume}</Description>
      </ContentBox>
    </ArticleBox>
  );
}

export default ArticleCard;
