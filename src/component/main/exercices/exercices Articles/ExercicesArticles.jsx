import PropType from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import articles from '../../../data/articles/articles.json';
import ExercicesComponent from './component/ExercicesComponent';

const Container = styled.div`
    width: 100vw;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`


export default function ExercicesArticles() {
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
            <ExercicesComponent article={articleData} />
        </Container>
    )
}

ExercicesArticles.propTypes = {
    article: PropType.object,
}