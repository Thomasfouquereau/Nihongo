import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Question from '../component/component exercices/Question';
import Reponse from '../component/component exercices/Reponse';

export default function LogiqueExercicesArticles({ article }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null);
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const difficulty = queryParams.get('difficulty');
        const questions = article.exercises.questions.filter(
            (q) => q.question.difficulty === difficulty
        );
        console.log(questions);
        setFilteredQuestions(questions);
    }, [location.search, article.exercises.questions]);

    useEffect(() => {
        if (isCorrect === true) {
            setTimeout(() => {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
                console.log('correct');
                setIsCorrect(null);
            }, 1000);
        }
    }, [isCorrect]);

    const handleDrop = (answer) => {
        const currentQuestion = filteredQuestions[currentQuestionIndex].question;
        if (answer === currentQuestion.reponse) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    if (currentQuestionIndex >= filteredQuestions.length) {
        return <div>Vous avez terminé tous les exercices de ce niveau!</div>;
    }

    const currentQuestion = filteredQuestions[currentQuestionIndex].question;

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