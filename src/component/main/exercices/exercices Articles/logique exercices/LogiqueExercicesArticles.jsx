import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Question from '../component/component exercices/Question';
import Reponse from '../component/component exercices/Reponse';

export default function LogiqueExercicesArticles({ article }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null);
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [reponseArray, setReponseArray] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const difficulty = queryParams.get('difficulty');
        const questions = article.exercises.questions.filter(
            (q) => q.question.difficulty === difficulty
        );
        setFilteredQuestions(questions);
    }, [location.search, article.exercises.questions]);

    useEffect(() => {
        if (isCorrect === true) {
            setTimeout(() => {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
                console.log('correct');
                setIsCorrect(null);
                setReponseArray([]);
            }, 1000);
        } else if (isCorrect === false) {
            setTimeout(() => {
                setIsCorrect(null);
                setReponseArray([]);
            }, 1000);
        }
    }, [isCorrect]);

    if (currentQuestionIndex >= filteredQuestions.length) {
        return <div>Vous avez terminé tous les exercices de ce niveau!</div>;
    }

    const currentQuestion = filteredQuestions[currentQuestionIndex].question;

    const handleReponseClick = (reponse) => {
        setReponseArray(Array.isArray(reponse) ? reponse : [reponse]);
    };

    const isCorrectAnswer = (reponse) => {
        if (reponse === currentQuestion.reponse || reponse === currentQuestion.reponse1 || reponse === currentQuestion.reponse2) {
            setIsCorrect(true);
            return true;
        } else {
            setIsCorrect(false);
            return false;
        }
    }

    return (
        <div>
            <Question
                question={currentQuestion}
                isCorrect={isCorrect}
                reponseArray={reponseArray}
            />
            <Reponse
                question={currentQuestion}
                onReponseClick={handleReponseClick}
                isCorrectAnswer={isCorrectAnswer}
            />
        </div>
    );
}

LogiqueExercicesArticles.propTypes = {
    article: PropTypes.object.isRequired,
};