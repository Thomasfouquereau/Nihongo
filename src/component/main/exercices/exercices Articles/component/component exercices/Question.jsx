import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function Question({ question, isCorrect, onDrop }) {
    const [droppedAnswer, setDroppedAnswer] = useState('');

    const handleDrop = (e) => {
        e.preventDefault();
        const answer = e.dataTransfer.getData('text');
        if (answer) {
            onDrop(answer);
            setDroppedAnswer(answer);
            setTimeout(() => {
                setDroppedAnswer('');
            }, 1000);
        }
    };

    useEffect(() => {
        if (isCorrect !== null) {
            setTimeout(() => {
                setDroppedAnswer('');
            }, 1000);
        }
    }, [isCorrect]);

    return (
        <div style={{ backgroundColor: isCorrect === false ? 'red' : 'transparent' }}>
            <p>{question.questionInFrench || null}</p>
            {question.type === 'DragAndDrop1' ? (
                <div onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
                    {question.questionPart1}
                    <span style={{ backgroundColor: 'lightblue', padding: '0.5rem' }}>
                        {droppedAnswer}
                    </span>
                    {question.questionPart2}
                </div>
            ) : question.type === 'DragAndDrop2' ? (
                <div style={{display:'flex'}}>
                    <div onDragOver={(e) => e.preventDefault()} onDrop={handleDrop} style={{ display: 'inline-block', width: '45%' }}>
                        <span style={{ backgroundColor: 'lightblue', padding: '0.5rem' }}>
                            {droppedAnswer}
                        </span>
                    </div>
                    <p>{question.question}</p>
                    <div onDragOver={(e) => e.preventDefault()} onDrop={handleDrop} style={{ display: 'inline-block', width: '45%' }}>
                        <span style={{ backgroundColor: 'lightblue', padding: '0.5rem' }}>
                            {droppedAnswer}
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
    onDrop: PropTypes.func.isRequired,
};