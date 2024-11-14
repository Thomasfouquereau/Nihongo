import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Question({ question, isCorrect, onDrop }) {
    const [droppedAnswer, setDroppedAnswer] = useState('');

    const handleDrop = (e) => {
        e.preventDefault();
        const answer = e.dataTransfer.getData('text');
        if (answer) {
            onDrop(answer);
            setDroppedAnswer(answer);
        }
    };

    return (
        <div style={{ backgroundColor: isCorrect === false ? 'red' : 'transparent' }}>
            <div onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
                {question.questionPart1}
                <span style={{ backgroundColor: 'lightblue', padding: '0.5rem' }}>
                    {droppedAnswer}
                </span>
                {question.questionPart2}
            </div>
        </div>
    );
}

Question.propTypes = {
    question: PropTypes.object.isRequired,
    isCorrect: PropTypes.bool,
    onDrop: PropTypes.func.isRequired,
};