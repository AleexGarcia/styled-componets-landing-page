import ArticleCard from "./ArticleCard/ArticleCard";
import { ArticleBox, ArticlesCardsBox, Title } from "./Articles.Styled";

function Articles() {
  const articles = [
    {
      author: "Claire Robinson",
      title: "Receive money in any currency with no fees",
      resume: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      url: "src/assets/images/image-currency.jpg",
    },
    {
      author: "Wilson Hutton",
      title: "Treat yourself without worrying about money",
      resume: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you",
      url: "src/assets/images/image-restaurant.jpg",
    },
    {
      author: "Claire Robinson",
      title: "Take your Easybank card wherever you go",
      resume: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you",
      url: "src/assets/images/image-plane.jpg",
    },
    {
      author: "Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      resume: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site",
      url: "src/assets/images/image-confetti.jpg",
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
