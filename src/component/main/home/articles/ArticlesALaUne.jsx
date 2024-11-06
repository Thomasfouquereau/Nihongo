import styled from 'styled-components';

import ArticleCard from '../../articles/component/ArticleCard';
import articles from '../../../data/articles/articles.json';

const Container = styled.div`
    display: flex;
    gap: 1vw;
    width: 100%;
    @media screen  and (max-width: 560px){
        flex-direction: column;
        align-items: center;
        gap: 3vw;
    }
`

export default function ArticlesALaUne() {
    const featuredArticles = articles.filter(article => article.ALaUne);

    return (
        <Container>
            {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </Container>
    );
}