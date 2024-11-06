import ArticleCard from '../articles/component/ArticleCard';
import articles from '../../data/articles/articles.json';

export default function Articles() {
    return (
        <div>
            {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    );
}