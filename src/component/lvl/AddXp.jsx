import { setKanjiXp, setVocabulaireXp, setHiraganaXp, setKatakanaXp, setNombreXp } from '../store';
const xpDébutant = 5;
const xpIntermédiaire = parseFloat(6.25);
const xpAvancé = parseFloat(7.8);

const getXp = (exerciceDifficulté) => {
    if (exerciceDifficulté === 'Débutant') {
        return xpDébutant;
    } else if (exerciceDifficulté === 'Intermédiaire') {
        return xpIntermédiaire;
    } else if (exerciceDifficulté === 'Confirmer') {
        return xpAvancé;
    } 
};

export const addXp = (dispatch, exerciceDifficulté, hiraganaXp, katakanaXp, vocabulaireXp, kanjiXp, nombreXp, location) => {
    const xp = Number(getXp(exerciceDifficulté));
    if (location.pathname.includes('/Exercices/Kanji')) {
        dispatch(setKanjiXp(Number(kanjiXp + xp)));
    } else if (location.pathname.includes('/Exercices/Hiragana')) {
        dispatch(setHiraganaXp(Number(hiraganaXp + xp)));
    } else if (location.pathname.includes('/Exercices/Vocabulaire')) {
        dispatch(setVocabulaireXp(Number(vocabulaireXp + xp)));
    } else if (location.pathname.includes('/Exercices/Katakana')) {
        dispatch(setKatakanaXp(Number(katakanaXp + xp)));
    } else if (location.pathname.includes('/Exercices/Nombres')) {
        dispatch(setNombreXp(Number(nombreXp + xp)));
    }
};