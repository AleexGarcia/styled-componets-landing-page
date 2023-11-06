import styled from "styled-components";

export const ArticleBox = styled.section`
    max-width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;

`;
export const Title = styled.h2`
    font-size: 2rem;
    text-align: center;

`;
export const ArticlesCardsBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1%;
    }

`;