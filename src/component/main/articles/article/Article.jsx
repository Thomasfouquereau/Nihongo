import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import articles from '../../../data/articles/articles.json';
import ArticleHeader from './component/ArticleHeader';
import ArticlesNavBar from '../component/ArticleNavBar';
import ArticleAuthor from './component/ArticleAuthor';
import ArticleSommaire from './component/ArticleSommaire';

const Container = styled.div`
    margin-top: 6.3vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vw;
    @media screen and (max-width: 560px){
        gap: 5vw;
        margin-top: 21vw;
    }
`

export default function Article() {
    const { id } = useParams();
    const [articleData, setArticleData] = useState(null);

    useEffect(() => {
        const foundArticle = articles.find((item) => item.id === parseInt(id));
        setArticleData(foundArticle);
    }, [id]);

    if (!articleData) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <ArticleAuthor article={articleData} />
            <ArticlesNavBar />
            <ArticleHeader article={articleData} />
            <ArticleSommaire article={articleData} />
        </Container>
    );
}

Article.propTypes = {
    article: propTypes.object,
};