import PropType from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import articles from '../../../data/articles/articles.json';


export default function ExercicesArticles(  ) {
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
        <div>
            <h1>{articleData.title}</h1>
        </div>
    )
}

ExercicesArticles.propTypes = {
    article: PropType.object,
}