import styled from "styled-components";
export const Container = styled.div`
    max-width: 90%;
    margin: 0 auto;
`;
export const DetailsBox = styled.section`
    padding: 2rem 0;
    background-color: ${props => props.theme.colors.lightGravishBlue};
`;
export const ContentBox = styled.div`
    text-align: center;
    @media screen and (min-width: 1024px) {
        text-align: start;
        width: 66vw;
    }
`;
export const Title = styled.h2`
    font-size: 2rem;
    font-weight: ${props => props.theme.fontWeight.regular};
    color: ${props => props.theme.colors.darkblue};
`;

export const SubTitle = styled.p`
    line-height: 1.5;
    margin-top: 1rem;
    color: ${props => props.theme.colors.grayishBlue};
`;
export const CardsBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
        margin-top: 1rem;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
    @media screen and (min-width: 1024px) {
        margin-top: 4rem;
    }
`;
