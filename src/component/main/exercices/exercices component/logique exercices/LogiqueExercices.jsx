import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Question from '../main/Question';
import Reponse from '../main/Reponse';
import listeKanji from '../../../../data/kanji/listeKanji.json';
import listeHiragana from '../../../../data/hiragana/listeHiragana.json';
import listeVocabulaire from '../../../../data/vocabulaire/listeVocabulaire.json';

export default function Exercice() {
    const [questions, setQuestions] = useState([]);
    const modeDeJeu = useSelector((state) => state.parametersExercice.exerciceModeDeJeu);
    const nombreDeQuestions = useSelector((state) => state.parametersExercice.exerciceNumber);
    const location = useLocation();

    console.log( modeDeJeu);

    useEffect(() => {
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
            data = listeHiragana.Katakana;
        }

        if (data) {
            let filteredData;
            if (modeDeJeu === 'Aléatoire') {
                filteredData = data.sort(() => 0.5 - Math.random()).slice(0, nombreDeQuestions);
            } else if (modeDeJeu === 'N5') {
                filteredData = data.filter(item => item.JLPTLevel === 'N5').slice(0, nombreDeQuestions);
            } 
            // else if (modeDeJeu === 'Choisir ses questions') {
            //     const chosenQuestions = useSelector((state) => state.dataChoice.kanji); // Assuming kanji for example
            //     filteredData = data.filter(item => chosenQuestions.includes(item.id));
            // }
            setQuestions(filteredData);
        }
    }, [location.pathname, modeDeJeu, nombreDeQuestions]);

    return (
        <div>
            {questions && questions.length > 0 ? (
                questions.map((question, index) => (
                    <div key={index}>
                        <Question question={question} />
                        <Reponse question={question} />
                    </div>
                ))
            ) : (
                <p>Aucune question disponible.</p>
            )}
        </div>
    );
}