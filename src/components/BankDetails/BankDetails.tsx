import {
  CardsBox,
  ContentBox,
  DetailsBox,
  SubTitle,
  Title,
} from "./BankDetails.Styled";
import DetailsCard from "./DetailsCard/DetailsCard";

function BankDetails() {
  const cards = [
    {
      url: "src/assets/images/icon-online.svg",
      title: "Online Banking",
      content:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      url: "src/assets/images/icon-budgeting.svg",
      title: "Simple Bugdeting",
      content:
        "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
    },
    {
      url: "src/assets/images/icon-onboarding.svg",
      title: "Fast Onboarding",
      content:
        "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      url: "src/assets/images/icon-api.svg",
      title: "Open API",
      content:
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];
  return (
    <DetailsBox>
      <ContentBox>
        <Title>Why choose Easybank?</Title>
        <SubTitle>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </SubTitle>
      </ContentBox>
      <CardsBox>{cards.map(card => <DetailsCard key={card.title} {...card}/>)}</CardsBox>
    </DetailsBox>
  );
}

export default BankDetails;
