import ArticleCard from "./ArticleCard/ArticleCard";
import { ArticleBox, ArticlesCardsBox, Title } from "./Articles.Styled";

function Articles() {
  const articles = [
    {
      author: "Claire Robinson",
      title: "Receive money in any currency with no fees",
      resume: "",
      url: "",
    },
  ];
  return (
    <ArticleBox>
      <Title>Latest Articles</Title>
      <ArticlesCardsBox>
        {articles.map((article) => (
          <ArticleCard key={article.title} {...article}/>
        ))}
      </ArticlesCardsBox>
    </ArticleBox>
  );
}

export default Articles;
