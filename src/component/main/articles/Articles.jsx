import styled from 'styled-components';

import ArticleCard from '../articles/component/ArticleCard';
import articles from '../../data/articles/articles.json';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vw;
    width: 100%;
    margin-top: 7vw;
    @media screen and (max-width: 560px){
        gap: 5vw;
    }
`

const CardContainer = styled.div`
    display: flex;
    gap: 1vw;
    width: 94%;
`

export default function Articles() {
    return (
        <Container>
            
            <CardContainer>
                {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </CardContainer>
        </Container>
    );
}