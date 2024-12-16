import PropTypes from 'prop-types';

export default function Question({ question, isCorrect, reponseArray }) {
    // Convertir reponseArray en tableau si ce n'est pas déjà un tableau
    const reponses = Array.isArray(reponseArray) ? reponseArray : [reponseArray];

    return (
        <div>
            <p>{question.questionInFrench || null}</p>
            {question.type === 'Type1' ? (
                <div>
                    {question.questionPart1}
                    <span style={{ backgroundColor: 'lightblue', padding: '0.5rem' }}>
                        {reponses.map((reponse, index) => (
                            <span key={index}>{reponse}</span>
                        ))}
                    </span>
                    {question.questionPart2}
                </div>
            ) : question.type === 'Type2' ? (
                <div style={{ display: 'flex' }}>
                    <div>
                        <span style={{ backgroundColor: 'lightblue', padding: '0.5rem' }}>
                            {/* Contenu pour Type2 */}
                        </span>
                    </div>
                    <p>{question.question}</p>
                    <div>
                        <span style={{ backgroundColor: 'lightblue', padding: '0.5rem' }}>
                            {/* Contenu pour Type2 */}
                        </span>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

Question.propTypes = {
    question: PropTypes.object.isRequired,
    isCorrect: PropTypes.bool,
    allIsCorrect: PropTypes.bool,
    reponseArray: PropTypes.array,
};