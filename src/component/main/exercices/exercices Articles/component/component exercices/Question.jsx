import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function Question({ question, isCorrect, onDrop, allIsCorrect }) {
    const [droppedAnswer, setDroppedAnswer] = useState('');
    const [droppedAnswer1, setDroppedAnswer1] = useState('');
    const [droppedAnswer2, setDroppedAnswer2] = useState('');

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

    const handleDrop1 = (e) => {
        e.preventDefault();
        const answer = e.dataTransfer.getData('text');
        if (answer) {
            onDrop(answer);
            setDroppedAnswer1(answer);
        }
    };

    const handleDrop2 = (e) => {
        e.preventDefault();
        const answer = e.dataTransfer.getData('text');
        if (answer) {
            onDrop(answer);
            setDroppedAnswer2(answer);
        }
    };

    useEffect(() => {
        if (isCorrect !== null) {
            setTimeout(() => {
                setDroppedAnswer('');
            }, 1000);
        }
    }, [isCorrect]);

    useEffect(() => {
        if (allIsCorrect !== null) {
            setTimeout(() => {
                setDroppedAnswer1('');
                setDroppedAnswer2('');
            }, 1000);
        }
    } , [allIsCorrect]);

    return (
        <div>
            <p>{question.questionInFrench || null}</p>
            {question.type === 'DragAndDrop1' ? (
                <div onDragOver={(e) => e.preventDefault()} onDrop={handleDrop} style={{ backgroundColor: isCorrect === false ? 'red' : 'transparent' }}>
                    {question.questionPart1}
                    <span style={{ backgroundColor: 'lightblue', padding: '0.5rem' }}>
                        {droppedAnswer}
                    </span>
                    {question.questionPart2}
                </div>
            ) : question.type === 'DragAndDrop2' ? (
                <div style={{ display: 'flex' }}>
                    <div onDragOver={(e) => e.preventDefault()} onDrop={handleDrop1} style={{ display: 'inline-block', width: '45%', backgroundColor: isCorrect === false ? 'red' : 'transparent' }} >
                        <span style={{ backgroundColor: 'lightblue', padding: '0.5rem' }}>
                            {droppedAnswer1}
                        </span>
                    </div>
                    <p>{question.question}</p>
                    <div onDragOver={(e) => e.preventDefault()} onDrop={handleDrop2} style={{ display: 'inline-block', width: '45%', backgroundColor: isCorrect === false ? 'red' : 'transparent' }}>
                        <span style={{ backgroundColor: 'lightblue', padding: '0.5rem' }}>
                            {droppedAnswer2}
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
    allIsCorrect: PropTypes.bool,
};