import { useEffect, useState, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Question from '../main/Question';
import Reponse from '../main/Reponse';
import Footer from '../main/FooterExercices';
import Timer from '../main/Timer';
import listeKanji from '../../../../data/kanji/listeKanji.json';
import listeHiragana from '../../../../data/hiragana/listeHiragana.json';
import listeKatakana from '../../../../data/katakana/listeKatakana.json';
import listeVocabulaire from '../../../../data/vocabulaire/listeVocabulaire.json';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 1vw;
    position: relative;
`;

const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vw;
    padding: 1vw;
    border-radius: 0.8vw;
    width: 100%;
    height: 77%;
    background-color: ${(props) => props.$bgColor};
`;

const ReponseContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%; 
    gap: 0.5vw;
`;

// Fonction pour générer des options de réponse
const generateOptions = (correctAnswer, data) => {
    const options = [correctAnswer];
    const incorrectAnswers = data.filter(item => item !== correctAnswer);
    while (options.length < 4) {
        const randomIndex = Math.floor(Math.random() * incorrectAnswers.length);
        const randomAnswer = incorrectAnswers[randomIndex];
        if (!options.includes(randomAnswer)) {
            options.push(randomAnswer);
        }
    }
    return options.sort(() => 0.5 - Math.random());
};

export default function Exercice() {
    const { bgColor } = useSelector((state) => state.mode);
    const exerciceTimerActive = useSelector((state) => state.parametersExercice.exerciceTimerActive);

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null);
    const modeDeJeu = useSelector((state) => state.parametersExercice.exerciceModeDeJeu);
    const nombreDeQuestions = useSelector((state) => state.parametersExercice.exerciceNumber);
    const dataChoice = useSelector((state) => state.dataChoice);
    const exerciceTimer = useSelector((state) => state.parametersExercice.exerciceTimer);
    const location = useLocation();
    const resetTimerRef = useRef(null);

    const loadQuestions = useCallback(() => {
        let data;
        if (location.pathname.includes('/Exercices/Kanji')) {
            data = listeKanji.kanji;
        } else if (location.pathname.includes('/Exercices/Hiragana')) {
            data = listeHiragana.Hiragana;
        } else if (location.pathname.includes('/Exercices/Vocabulaire')) {
            data = listeVocabulaire.vocabulaire;
        } else if (location.pathname.includes('/Exercices/Nombres')) {
            data = listeVocabulaire.nombres;
        } else if (location.pathname.includes('/Exercices/Katakana')) {
            data = listeKatakana.Katakana;
        }

        if (data) {
            let filteredData = [];
            if (modeDeJeu === 'Aléatoire') {
                filteredData = data.sort(() => 0.5 - Math.random()).slice(0, nombreDeQuestions);
            } else if (modeDeJeu === 'N5') {
                filteredData = data.filter(item => item.JLPTLevel === 'N5').slice(0, nombreDeQuestions);
            } else if (modeDeJeu === 'Choisir ses questions') {
                if (location.pathname.includes('/Exercices/Kanji') && dataChoice.kanji) {
                    const chosenKanji = dataChoice.kanji.map(item => item.Kanji);
                    filteredData = data.filter(item => chosenKanji.includes(item.Kanji)).slice(0, nombreDeQuestions);
                } else if (location.pathname.includes('/Exercices/Vocabulaire') && dataChoice.vocabulaire) {
                    const chosenVocabulaire = dataChoice.vocabulaire.map(item => item.francais);
                    filteredData = data.filter(item => chosenVocabulaire.includes(item.francais)).slice(0, nombreDeQuestions);
                } else if (location.pathname.includes('/Exercices/Hiragana') && dataChoice.hiragana) {
                    const chosenHiragana = dataChoice.hiragana.map(item => item.Hiragana);
                    filteredData = data.filter(item => chosenHiragana.includes(item.Hiragana)).slice(0, nombreDeQuestions);
                } else if (location.pathname.includes('/Exercices/Katakana') && dataChoice.katakana) {
                    const chosenKatakana = dataChoice.katakana.map(item => item.Katakana);
                    filteredData = data.filter(item => chosenKatakana.includes(item.Katakana)).slice(0, nombreDeQuestions);
                } else if (location.pathname.includes('/Exercices/Nombres') && dataChoice.nombre) {
                    const chosenNombre = dataChoice.nombre.map(item => item.francais);
                    filteredData = data.filter(item => chosenNombre.includes(item.francais)).slice(0, nombreDeQuestions);
                }
            }

            // Ajouter des options de réponse à chaque question
            const questionsWithOptions = filteredData.map(question => {
                if (location.pathname.includes('/Exercices/Hiragana') || location.pathname.includes('/Exercices/Katakana')) {
                    const correctAnswer = question.Romaji;
                    const options = generateOptions(correctAnswer, data.map(item => item.Romaji ));
                    return { ...question, options, id: question.id.toString() };
                } else {
                    const correctAnswer = question.Meaning || question.francais;
                    const options = generateOptions(correctAnswer, data.map(item => item.Meaning || item.francais));
                    return { ...question, options, id: question.id.toString() };
                }

            });
            setQuestions(questionsWithOptions);
            setCurrentQuestionIndex(0);
            setScore(0);
        }
    }, [location.pathname, modeDeJeu, nombreDeQuestions, dataChoice]);

    useEffect(() => {
        loadQuestions();
    }, [loadQuestions]);


    const handleTimeUp = () => {
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setIsCorrect(null);
            } else {
                alert(`Exercice terminé! Votre score est de ${isCorrect ? score + 1 : score}/${questions.length}`);
            }
            setIsCorrect(null);
        }, 700);
    };


    const handleNextQuestion = (isCorrect) => {
        setIsCorrect(isCorrect);
        if (isCorrect) {
            setScore(prevScore => prevScore + 1);
        }
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setIsCorrect(null);
                
            } else {
                alert(`Exercice terminé! Votre score est de ${isCorrect ? score + 1 : score}/${questions.length}`);
            }
            setIsCorrect(null);
            
        }, 700);
        if (resetTimerRef.current) {
            resetTimerRef.current();
        }
    };

    const handleSkipQuestion = () => {
        handleNextQuestion(false);
    };

    return (
        <Container>
            <QuestionContainer $bgColor={bgColor}>
                {exerciceTimerActive === true && <Timer duration={exerciceTimer} onTimeUp={handleTimeUp}  onReset={(reset) => resetTimerRef.current = reset} />}
                {questions && questions.length > 0 ? (
                    <ReponseContainer key={questions[currentQuestionIndex].id}>
                        <Question question={questions[currentQuestionIndex]} isCorrect={isCorrect} />
                        <Reponse
                            question={questions[currentQuestionIndex]}
                            options={questions[currentQuestionIndex].options}
                            onAnswer={handleNextQuestion}
                            isCorrect={isCorrect}
                        />
                    </ReponseContainer>
                ) : (
                    <p>Aucune question disponible.</p>
                )}
            </QuestionContainer>
            <Footer onReload={loadQuestions} onSkip={handleSkipQuestion} />
        </Container>
    );
}