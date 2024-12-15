import PropTypes from 'prop-types';

export default function Question({ question, isCorrect}) {
    
    return (
        <div>
            <p>{question.questionInFrench || null}</p>
            {question.type === 'DragAndDrop1' ? (
                <div >
                    {question.questionPart1}
                    <span style={{ backgroundColor: 'lightblue', padding: '0.5rem' }}>
                        
                    </span>
                    {question.questionPart2}
                </div>
            ) : question.type === 'DragAndDrop2' ? (
                <div style={{ display: 'flex' }}>
                    <div  >
                        <span style={{ backgroundColor: 'lightblue', padding: '0.5rem' }}>
                            
                        </span>
                    </div>
                    <p>{question.question}</p>
                    <div >
                        <span style={{ backgroundColor: 'lightblue', padding: '0.5rem' }}>

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
};