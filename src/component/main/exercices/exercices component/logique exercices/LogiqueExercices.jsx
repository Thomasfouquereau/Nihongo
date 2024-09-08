import { useEffect, useState, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Question from '../component/Question';
import Reponse from '../component/Reponse';
import Footer from '../component/FooterExercices';
import Timer from '../component/Timer';
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
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null);
    const [time, setTime] = useState(0);
    const [reussite, setReussite] = useState(0);
    const [faute, setFaute] = useState(0);
    const modeDeJeu = useSelector((state) => state.parametersExercice.exerciceModeDeJeu);
    const nombreDeQuestions = useSelector((state) => state.parametersExercice.exerciceNumber);
    const dataChoice = useSelector((state) => state.dataChoice);
    const exerciceTimer = useSelector((state) => state.parametersExercice.exerciceTimer);
    const typeDeKana = useSelector((state) => state.parametersExercice.exerciceTypeDeKana);
    const exerciceTimerActive = useSelector((state) => state.parametersExercice.exerciceTimerActive);
    const resetTimerRef = useRef(null);
    const timerRef = useRef(null);
    const dispatch = useDispatch();
    const location = useLocation();

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
    }, [location.pathname, modeDeJeu, nombreDeQuestions, dataChoice, typeDeKana, stopExerciseTimer, startExerciseTimer]);

    // Fonction pour gérer le changement de question et le score
    useEffect(() => {
        loadQuestions();
        stopExerciseTimer();
        startExerciseTimer();
    }, [loadQuestions, stopExerciseTimer, startExerciseTimer]);

    // Fonction pour passer à la question suivante si le temps est écoulé et qu'aucune réponse n'a été donnée
    const handleTimeUp = () => {
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setIsCorrect(null);
            } else {
                alert(`Exercice terminé! Votre score est de ${isCorrect ? score + 1 : score}/${questions.length}`);
                stopExerciseTimer();
                dispatch(setTotalTimer(time));
                dispatch(setTotalfaute(0));
                dispatch(setTotalreussite(0));
            }
            setIsCorrect(null);
        }, 700);
    };

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
                alert(`Exercice terminé! Votre score est de ${isCorrect ? score + 1 : score}/${questions.length}`);
                stopExerciseTimer();
                dispatch(setTotalTimer(time));
                dispatch(setTotalfaute(0));
                dispatch(setTotalreussite(0));
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
    };

    return (
        <Container>
            <QuestionContainer $bgColor={bgColor}>
                {exerciceTimerActive === true && <Timer duration={exerciceTimer} onTimeUp={handleTimeUp} onReset={(reset) => resetTimerRef.current = reset} />}
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