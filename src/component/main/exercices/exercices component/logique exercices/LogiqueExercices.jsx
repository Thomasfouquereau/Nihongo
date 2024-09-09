import { useEffect, useState, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Question from '../component/Question';
import Reponse from '../component/Reponse';
import Footer from '../component/FooterExercices';
import listeKanji from '../../../../data/kanji/listeKanji.json';
import listeHiragana from '../../../../data/hiragana/listeHiragana.json';
import listeKatakana from '../../../../data/katakana/listeKatakana.json';
import listeVocabulaire from '../../../../data/vocabulaire/listeVocabulaire.json';
import { setTotalTimer, setTotalfaute, setTotalreussite } from '../../../../store';

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

const TimerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 2vw;
    left: 1vw;
    background-color: ${(props) => props.$color};
    width: 9vw;
    height: 4vw;
    border-radius: 0.5vw;
    color: #F7F7F2;
    p{
        font-size: 2vw;
        font-weight: 600;
        span{
            font-size: 1.5vw;
        }
    }
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

export default function LogiqueExercices() {
    const modeDeJeu = useSelector((state) => state.parametersExercice.exerciceModeDeJeu);
    const nombreDeQuestions = useSelector((state) => state.parametersExercice.exerciceNumber);
    const dataChoice = useSelector((state) => state.dataChoice);
    const typeDeKana = useSelector((state) => state.parametersExercice.exerciceTypeDeKana);
    const exerciceTimerActive = useSelector((state) => state.parametersExercice.exerciceTimerActive);
    const totalfaute = useSelector((state) => state.exercice.totalfaute);
    const totalreussite = useSelector((state) => state.exercice.totalreussite);
    const { bgColor } = useSelector((state) => state.mode);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null);
    const [time, setTime] = useState(0);
    const [reussite, setReussite] = useState(totalreussite);
    const [faute, setFaute] = useState(totalfaute);
    const resetTimerRef = useRef(null);
    const timerRef = useRef(null);
    const dispatch = useDispatch();
    const location = useLocation();
    const exerciceTimer = useSelector((state) => state.parametersExercice.exerciceTimer);
    const [timer, setTimer] = useState(exerciceTimer);
    const { color } = useSelector((state) => state.color);

    // Fonction pour le timer
    const startExerciseTimer = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        setTime(0);
        timerRef.current = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
    }, []);

    const stopExerciseTimer = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    const reset = useCallback(() => {
        setTimer(exerciceTimer);
        if (resetTimerRef.current) {
            resetTimerRef.current();
        }
    }, [exerciceTimer]);

    const handleTimeUp = useCallback(() => {
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setIsCorrect(null);
                dispatch(setTotalfaute(faute + 1));
            } else {
                stopExerciseTimer();
                dispatch(setTotalTimer(time));
                alert(`Exercice terminé! Votre score est de ${isCorrect ? score + 1 : score}/${questions.length}, vous avez fait ${reussite} réponses correctes et ${faute} réponses incorrectes. Votre temps total est de ${time} secondes.`);
                dispatch(setTotalfaute(0));
                dispatch(setTotalreussite(0));
                setFaute(0);
                setReussite(0);
            }
            setIsCorrect(null);
        }, 700);
    }, [currentQuestionIndex, questions.length, dispatch, score, stopExerciseTimer, time, reussite, faute, isCorrect]);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimer((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timerInterval);
                    handleTimeUp();
                    setTimeout(() => {
                        setTimer(exerciceTimer); // Reset the timer after 700ms
                    }, 700);
                    return 0; // Set time to 0 before the reset
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [exerciceTimer, handleTimeUp]);

    useEffect(() => {
        setTimer(exerciceTimer);
    }, [exerciceTimer]);

    useEffect(() => {
        if (reset) {
            reset();
        }
    }, [reset, exerciceTimer]);

    const loadQuestions = useCallback(() => {
        let data;
        // Récupérer les données en fonction de la page d'exercice
        if (location.pathname.includes('/Exercices/Kanji')) {
            startExerciseTimer();
            data = listeKanji.kanji;
        } else if (location.pathname.includes('/Exercices/Hiragana')) {
            startExerciseTimer();
            if (typeDeKana === 'normal') {
                data = listeHiragana.Hiragana;
            } else if (typeDeKana === 'accents') {
                data = [
                    ...listeHiragana.Dakuten,
                    ...listeHiragana.Handakuten
                ];
            } else if (typeDeKana === 'combinaison') {
                data = listeHiragana.Combinaison;
            } else if (typeDeKana === 'tout') {
                data = [
                    ...listeHiragana.Dakuten,
                    ...listeHiragana.Handakuten,
                    ...listeHiragana.Combinaison,
                    ...listeHiragana.Hiragana
                ];
            }
        } else if (location.pathname.includes('/Exercices/Vocabulaire')) {
            startExerciseTimer();
            data = listeVocabulaire.vocabulaire;
        } else if (location.pathname.includes('/Exercices/Nombres')) {
            startExerciseTimer();
            data = listeVocabulaire.nombres;
        } else if (location.pathname.includes('/Exercices/Katakana')) {
            startExerciseTimer();
            if (typeDeKana === 'normal') {
                data = listeKatakana.Katakana;
            } else if (typeDeKana === 'accents') {
                data = [
                    ...listeKatakana.Dakuten,
                    ...listeKatakana.Handakuten
                ];
            } else if (typeDeKana === 'combinaison') {
                data = listeKatakana.Combinaison;
            } else if (typeDeKana === 'tout') {
                data = [
                    ...listeKatakana.Dakuten,
                    ...listeKatakana.Handakuten,
                    ...listeKatakana.Combinaison,
                    ...listeKatakana.Katakana
                ];
            } else {
                stopExerciseTimer();
                dispatch(setTotalfaute(0));
                dispatch(setTotalreussite(0));
            }
        }

        // Filtrer les questions en fonction du mode de jeu et du nombre de questions choisi par l'utilisateur 
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
                    const chosenHiragana = dataChoice.hiragana.map(item => item.hiragana);
                    filteredData = data.filter(item => chosenHiragana.includes(item.hiragana)).slice(0, nombreDeQuestions);
                } else if (location.pathname.includes('/Exercices/Katakana') && dataChoice.katakana) {
                    const chosenKatakana = dataChoice.katakana.map(item => item.Katakana);
                    filteredData = data.filter(item => chosenKatakana.includes(item.Katakana)).slice(0, nombreDeQuestions);
                } else if (location.pathname.includes('/Exercices/Nombres') && dataChoice.nombre) {
                    const chosenNombre = dataChoice.nombre.map(item => item.francais);
                    filteredData = data.filter(item => chosenNombre.includes(item.francais)).slice(0, nombreDeQuestions);
                }
            }

            // Ajouter des options de réponse à chaque question et les stocker dans le store
            const questionsWithOptions = filteredData.map(question => {
                if (location.pathname.includes('/Exercices/Hiragana') || location.pathname.includes('/Exercices/Katakana')) {
                    const correctAnswer = question.Romaji;
                    const options = generateOptions(correctAnswer, data.map(item => item.Romaji));
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
    }, [location.pathname, modeDeJeu, nombreDeQuestions, dataChoice, typeDeKana, stopExerciseTimer, startExerciseTimer, dispatch]);

    // Fonction pour gérer le changement de question et le score
    useEffect(() => {
        const resetExercice = () => {
            dispatch(setTotalfaute(0));
            dispatch(setTotalreussite(0));
        };
        loadQuestions();
        stopExerciseTimer();
        startExerciseTimer();
        resetExercice();
    }, [loadQuestions, stopExerciseTimer, startExerciseTimer, dispatch]);

    // Fonction pour passer à la question suivante ou terminer l'exercice si la réponse est correcte ou incorrecte 
    const handleNextQuestion = (isCorrect) => {
        setIsCorrect(isCorrect);
        // Mettre à jour le score et le nombre de réponses correctes et incorrectes
        if (isCorrect) {
            setScore(prevScore => prevScore + 1);
            setReussite(prevReussite => prevReussite === 0 ? 1 : prevReussite + 1);
            dispatch(setTotalreussite(reussite + 1));
        } else {
            setFaute(prevFaute => prevFaute === 0 ? 1 : prevFaute + 1);
            dispatch(setTotalfaute(faute + 1));
        }
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setIsCorrect(null);
            } else {
                stopExerciseTimer();
                dispatch(setTotalTimer(time));
                alert(`Exercice terminé! Votre score est de ${isCorrect ? score + 1 : score}/${questions.length}, vous avez fait ${reussite} réponses correctes et ${faute} réponses incorrectes. Votre temps total est de ${time} secondes.`);
                dispatch(setTotalfaute(0));
                dispatch(setTotalreussite(0));
                setFaute(0);
                setReussite(0);
            }
            setIsCorrect(null);
        }, 700);
        if (resetTimerRef.current) {
            resetTimerRef.current();
        }
    };

    // Fonction pour passer à la question suivante si l'utilisateur décide de passer une question
    const handleSkipQuestion = () => {
        handleNextQuestion(false);
        dispatch(setTotalfaute(faute + 1));
    };

    return (
        <Container>
            <QuestionContainer $bgColor={bgColor}>
                {exerciceTimerActive === true && <TimerContainer $color={color}>
                    <p>{timer}<span>s</span></p>
                </TimerContainer>}
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