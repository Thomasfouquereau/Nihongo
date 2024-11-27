import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Question from '../component/component exercices/Question';
import Reponse from '../component/component exercices/Reponse';

export default function LogiqueExercicesArticles({ article }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null);
    const [allIsCorrect, setAllIsCorrect] = useState(null);
    const [filteredQuestions, setFilteredQuestions] = useState([]);
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
            }, 1000);
        } else if (isCorrect === false) {
            setTimeout(() => {
                setIsCorrect(null);
            }, 1000);
        } else if (allIsCorrect === true) {
            console.log('null');
        }
    }, [isCorrect, allIsCorrect]);

    const handleDrop = (answer) => {
        const currentQuestion = filteredQuestions[currentQuestionIndex].question;
        const queryParams = new URLSearchParams(location.search);
        const difficulty = queryParams.get('difficulty');
        if (difficulty === 'Premier pas') {
            if (answer === currentQuestion.reponse) {
                setIsCorrect(true);
            } else {
                setIsCorrect(false);
            }
        }
        if (difficulty === 'Développement Avancé') {
            if (answer === currentQuestion.reponse1 && answer === currentQuestion.reponse2) {
                setAllIsCorrect(true);
                console.log('correct');
            } else {
                setAllIsCorrect(false);
                console.log('false');
            }
        }
    };

    if (currentQuestionIndex >= filteredQuestions.length) {
        return <div>Vous avez terminé tous les exercices de ce niveau!</div>;
    }

    const currentQuestion = filteredQuestions[currentQuestionIndex].question;

    return (
        <div>
            <Question question={currentQuestion} isCorrect={isCorrect} allIsCorrect={allIsCorrect} onDrop={handleDrop} />
            <Reponse question={currentQuestion} />
        </div>
    );
}

LogiqueExercicesArticles.propTypes = {
    article: PropTypes.object.isRequired,
};