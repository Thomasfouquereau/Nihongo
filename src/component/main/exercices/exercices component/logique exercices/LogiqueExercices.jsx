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
import { setTotalTimer, setTotalfaute, setTotalreussite, setExerciceTypeDeKana, addQuestionIncorrecte, resetQuestionsIncorrectes, setQuestionsCorrectes } from '../../../../store';
import RecapDeFin from '../component/RecapDeFin';
import { addXp } from '../../../../lvl/AddXp';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 1vw;
    position: relative;
    @media screen and (max-width: 560px){
        gap: 1.5vw;
    }
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
    @media screen and (max-width: 560px){
        gap: 3vw;
        padding: 3vw;
        border-radius: 4vw;
        height: 80%;
    }
`;

const ReponseContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%; 
    gap: 0.5vw;
    @media screen and (max-width: 560px){
        gap: 1.5vw;
    }
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
    @media screen and (max-width: 560px){
        top:3vw;
        left: 0;
        width: 25vw;
        height: 12vw;
        border-radius: 2.9vw 0  2.9vw 0;
    }
    p{
        font-size: 2vw;
        font-weight: 600;
        @media screen and (max-width: 560px){
            font-size: 7vw;
        }
        span{
            font-size: 1.5vw;
            @media screen and (max-width: 560px){
                font-size: 5vw;
            }
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
    const KatakanaChoisie = useSelector((state) => state.dataChoice.katakana);
    const HiraganaChoisie = useSelector((state) => state.dataChoice.hiragana);
    const exerciceDifficulté = useSelector((state) => state.parametersExercice.exerciceDifficulté);
    const hiraganaXp = useSelector((state) => state.lvl.hiraganaXp);
    const kanjiXp = useSelector((state) => state.lvl.KanjiXp);
    const vocabulaireXp = useSelector((state) => state.lvl.vocabulaireXp);
    const nombreXp = useSelector((state) => state.lvl.nombreXp);
    const katakanaXp = useSelector((state) => state.lvl.katakanaXp);
    const { bgColor } = useSelector((state) => state.mode);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null);
    const [time, setTime] = useState(0);
    const resetTimerRef = useRef(null);
    const timerRef = useRef(null);
    const dispatch = useDispatch();
    const location = useLocation();
    const exerciceTimer = useSelector((state) => state.parametersExercice.exerciceTimer);
    const [timer, setTimer] = useState(exerciceTimer);
    const { color } = useSelector((state) => state.color);
    const [totalFaute, setTotalFaute] = useState(1);
    const [totalReussite, setTotalReussite] = useState(1);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [finDeLExercice, setFinDeLExercice] = useState(false);

    // Fonction pour incrémenter le nombre de réponses correctes et incorrectes
    const Reussite = useCallback((resetTotal) => {
        setTotalReussite(prevTotalReussite => prevTotalReussite + 1);
        dispatch(setTotalreussite(totalReussite));
        if (resetTotal === true) {
            setTotalReussite(1);
            dispatch(setTotalreussite(totalReussite));
        }
    }, [setTotalReussite, dispatch, totalReussite]);

    const Faute = useCallback((resetTotal, question) => {
        setTotalFaute(prevTotalFaute => prevTotalFaute + 1);
        dispatch(setTotalfaute(totalFaute));
        dispatch(addQuestionIncorrecte(question));
        if (resetTotal === true) {
            setTotalFaute(1);
            dispatch(setTotalfaute(totalFaute));
        }
    }, [setTotalFaute, dispatch, totalFaute]);
    
    // Fonction pour le chronomètre total de l'exercice
    const startExerciseTimer = useCallback(() => {     ////////////////bug sur le timer
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        setTime(0);
        if (exerciceTimerActive === false) {
            timerRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }
    }, [exerciceTimerActive]);

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

    // Fonction pour gérer le temps imparti pour chaque question
    const handleTimeUp = useCallback(() => {
        if (exerciceTimerActive === true) {
            const currentQuestion = questions[currentQuestionIndex];
            setTimeout(() => {
                if (currentQuestionIndex < questions.length - 1) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    Faute(false, currentQuestion);
                } else {
                    Faute(false, currentQuestion);
                    setFinDeLExercice(true);
                    dispatch(setTotalTimer(time));
                    stopExerciseTimer();
                }
            }, 900);
        }
    }, [currentQuestionIndex, questions, exerciceTimerActive, Faute, stopExerciseTimer, dispatch, time]);

    useEffect(() => {
        if (exerciceTimerActive === true) {
            if (finDeLExercice === false) {
                const timerInterval = setInterval(() => {
                    setTimer((prevTime) => {
                        if (prevTime <= 1) {
                            clearInterval(timerInterval);
                            handleTimeUp();
                            setTimeout(() => {
                                setTimer(exerciceTimer);
                            }, 900);
                            return 0; // Set time to 0 before the reset
                        }
                        return prevTime - 1;
                    });

                }, 1000);
                return () => clearInterval(timerInterval);
            }
        }
    }, [exerciceTimer, handleTimeUp, dispatch, exerciceTimerActive, finDeLExercice]);

    useEffect(() => {
        setTimer(exerciceTimer);
    }, [exerciceTimer]);

    useEffect(() => {
        if (reset) {
            reset(exerciceTimer);
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
                    ...listeHiragana.Hiragana,
                    ...listeHiragana.Dakuten,
                    ...listeHiragana.Handakuten,
                    ...listeHiragana.Combinaison
                ];
                if (modeDeJeu === 'Choisir ses questions') {
                    data = HiraganaChoisie.map(entry => {
                        if (entry.affiche === 'Hiragana') {
                            return { ...entry, Type: 'Hiragana' };
                        } else if (entry.affiche === 'Accents') {
                            return { ...entry, Type: entry.affiche === 'Accents' ? 'Dakuten' : 'Handakuten' };
                        } else {
                            return { ...entry, Type: 'Combinaison' };
                        }
                    });
                }
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
                    ...listeKatakana.Katakana,
                    ...listeKatakana.Dakuten,
                    ...listeKatakana.Handakuten,
                    ...listeKatakana.Combinaison
                ];
                if (modeDeJeu === 'Choisir ses questions') {
                    data = KatakanaChoisie.map(entry => {
                        if (entry.affiche === 'Katakana') {
                            return { ...entry, Type: 'Katakana' };
                        } else if (entry.affiche === 'Accents') {
                            return { ...entry, Type: entry.affiche === 'Accents' ? 'Dakuten' : 'Handakuten' };
                        } else {
                            return { ...entry, Type: 'Combinaison' };
                        }
                    });
                }
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
                filteredData = data.filter(item => item.JLPTLevel === 'N5').sort(() => 0.5 - Math.random()).slice(0, nombreDeQuestions);
            } else if (modeDeJeu === 'Choisir ses questions') {
                dispatch(setExerciceTypeDeKana("tout"));
                if (location.pathname.includes('/Exercices/Kanji') && dataChoice.kanji) {
                    const chosenKanji = dataChoice.kanji.map(item => item.Kanji);
                    filteredData = data.filter(item => chosenKanji.includes(item.Kanji)).sort(() => 0.5 - Math.random()).slice(0, nombreDeQuestions);
                } else if (location.pathname.includes('/Exercices/Vocabulaire') && dataChoice.vocabulaire) {
                    const chosenVocabulaire = dataChoice.vocabulaire.map(item => item.francais);
                    filteredData = data.filter(item => chosenVocabulaire.includes(item.francais)).sort(() => 0.5 - Math.random()).slice(0, nombreDeQuestions);
                } else if (location.pathname.includes('/Exercices/Hiragana') && dataChoice.hiragana) {
                    const chosenHiragana = dataChoice.hiragana.map(item => item.hiragana);
                    filteredData = data.filter(item => chosenHiragana.includes(item.hiragana)).sort(() => 0.5 - Math.random()).slice(0, nombreDeQuestions);
                } else if (location.pathname.includes('/Exercices/Katakana') && dataChoice.katakana) {
                    const chosenKatakana = dataChoice.katakana.map(item => item.Katakana);
                    filteredData = data.filter(item => chosenKatakana.includes(item.Katakana)).sort(() => 0.5 - Math.random()).slice(0, nombreDeQuestions);
                } else if (location.pathname.includes('/Exercices/Nombres') && dataChoice.nombre) {
                    const chosenNombre = dataChoice.nombre.map(item => item.francais);
                    filteredData = data.filter(item => chosenNombre.includes(item.francais)).sort(() => 0.5 - Math.random()).slice(0, nombreDeQuestions);
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
        }
    }, [modeDeJeu, nombreDeQuestions, dataChoice, typeDeKana, location.pathname, startExerciseTimer, stopExerciseTimer, dispatch, KatakanaChoisie, HiraganaChoisie]);

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
        const currentQuestion = questions[currentQuestionIndex]; // Récupérer la question actuelle
        if (isCorrect) {
            Reussite();
            setButtonDisabled(true);
            stopExerciseTimer();
            addXp(dispatch, exerciceDifficulté, hiraganaXp, katakanaXp, vocabulaireXp, kanjiXp, nombreXp, location); // Appeler la fonction addXp
            dispatch(setQuestionsCorrectes(true));
            setTimeout(() => { 
                dispatch(setQuestionsCorrectes(false));
            }, 900);
            
        } else {
            Faute(false, currentQuestion); // Passer la question actuelle
            setButtonDisabled(true);
            stopExerciseTimer();
        }
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setIsCorrect(null);
            } else {
                dispatch(setTotalTimer(time));
                setFinDeLExercice(true);
            }
            setIsCorrect(null);
            setButtonDisabled(false);
            setTimer(exerciceTimer);
        }, 900);
        if (resetTimerRef.current) {
            resetTimerRef.current();
        }
    };

    // Fonction pour passer à la question suivante si l'utilisateur décide de passer une question
    const handleSkipQuestion = () => {
        handleNextQuestion(false);
    };

    const totalReset = () => {
        const resetTotal = true;
        Reussite(resetTotal);
        Faute(resetTotal);
        dispatch(setTotalreussite(0));
        dispatch(setTotalfaute(0));
        loadQuestions();
        stopExerciseTimer();
        startExerciseTimer();
        setFinDeLExercice(false);
        dispatch(resetQuestionsIncorrectes());
        setTimer(exerciceTimer);
    }

    return (
        <Container>
            {finDeLExercice === true ? <RecapDeFin onReload={totalReset} /> : null}
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
                            buttonDisabled={buttonDisabled}
                        />
                    </ReponseContainer>
                ) : (
                    <p>Aucune question disponible.</p>
                )}
            </QuestionContainer>
            <Footer onReload={totalReset} onSkip={handleSkipQuestion} buttonDisabled={buttonDisabled} />
        </Container>
    );
}