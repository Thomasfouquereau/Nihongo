import Proptype from 'prop-types';

export default function Reponse( {article} ) {
    return (
        <div>
            <h1>{article.title}</h1>
        </div>
    )
}

Reponse.propTypes = {
    article: Proptype.object,
}