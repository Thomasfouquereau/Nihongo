import PropTypes from 'prop-types';

export default function Question({ question, isCorrect, reponseArray }) {
    console.log('isCorrect', isCorrect);
    return (
        <div>
            <p>{question.questionInFrench || null}</p>
            {question.type === 'Type1' ? (
                <div>
                    {question.questionPart1}
                    <span style={{ backgroundColor: 'lightblue', padding: '0.5rem' }}>
                        {reponseArray.map((reponse, index) => (
                            <span key={index}>{reponse}</span>
                        ))}
                    </span>
                    {question.questionPart2}
                </div>
            ) : question.type === 'Type2' ? (
                <div style={{ display: 'flex' }}>
                    <div>
                        <span style={{ backgroundColor: 'lightblue', padding: '0.5rem' }}>
                            {reponseArray[0]}
                        </span>
                    </div>
                    <p>{question.question}</p>
                    <div>
                        <span style={{ backgroundColor: 'lightblue', padding: '0.5rem' }}>
                            {reponseArray[1]}
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
    reponseArray: PropTypes.array.isRequired,
};