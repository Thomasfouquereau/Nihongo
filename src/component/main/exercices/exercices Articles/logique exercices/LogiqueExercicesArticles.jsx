import { useState } from 'react';
import PropTypes from 'prop-types';
import Question from '../component/component exercices/Question';
import Reponse from '../component/component exercices/Reponse';

export default function LogiqueExercicesArticles({ article }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null);

    const handleDrop = (answer) => {
        const currentQuestion = article.exercises.questions[currentQuestionIndex].question;
        if (answer === currentQuestion.reponse) {
            setIsCorrect(true);
            console.log('correct');
            setTimeout(() => {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
                setIsCorrect(null);
            }, 1000);
        } else {
            setIsCorrect(false);
        }
    };

    const currentQuestion = article.exercises.questions[currentQuestionIndex].question;

    return (
        <div>
            <Question question={currentQuestion} isCorrect={isCorrect} onDrop={handleDrop} />
            <Reponse question={currentQuestion} />
        </div>
    );
}

LogiqueExercicesArticles.propTypes = {
    article: PropTypes.object.isRequired,
};