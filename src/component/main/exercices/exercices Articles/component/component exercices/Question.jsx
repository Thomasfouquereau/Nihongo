import Proptype from 'prop-types';

export default function Question( {article} ) {
    return (
        <div>
            <h1>{article.title}</h1>
        </div>
    )
}

Question.propTypes = {
    article: Proptype.object,
}