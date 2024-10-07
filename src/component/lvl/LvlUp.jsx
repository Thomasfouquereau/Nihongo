import { useDispatch } from 'react-redux';
import { 
    setUserLvL,
    setUserXp,
    setUserXpToNextLvL,
    setKanjiLvL,
    setKanjiXp,
    setKanjiXpToNextLvL,
    setVocabulaireLvL,
    setVocabulaireXp,
    setVocabulaireXpToNextLvL,
    setHiraganaLvL,
    setHiraganaXp,
    setHiraganaXpToNextLvL,
    setKatakanaLvL,
    setKatakanaXp,
    setKatakanaXpToNextLvL,
    setNombreLvL,
    setNombreXp,
    setNombreXpToNextLvL
 } from '../store';

function levelUp(xp, xpToNextLevel, lvl, category) {
    while (xp >= xpToNextLevel) {
        xp -= xpToNextLevel;
        lvl = parseInt(lvl, 10) + 1;
        xpToNextLevel = calculateNextLevelXp(xpToNextLevel, category);
    }
    return { xp, xpToNextLevel, lvl };
}

function calculateNextLevelXp(currentXpToNextLevel, category) {
    switch (category) {
        case 'user':
            return Math.floor(currentXpToNextLevel * 1.25);
        case 'kanji':
            return Math.floor(currentXpToNextLevel * 1.3);
        case 'vocabulaire':
            return Math.floor(currentXpToNextLevel * 1.2);
        case 'hiragana':
            return Math.floor(currentXpToNextLevel * 1.15);
        case 'katakana':
            return Math.floor(currentXpToNextLevel * 1.1);
        case 'nombre':
            return Math.floor(currentXpToNextLevel * 1.05);
        default:
            throw new Error('Catégorie inconnue');
    }
}

export default function UpdateLevels() {
    const dispatch = useDispatch();

    return (xp, xpToNextLevel, lvl, category) => {
        const validCategories = ['user', 'kanji', 'vocabulaire', 'hiragana', 'katakana', 'nombre'];
        if (!validCategories.includes(category)) {
            throw new Error(`Catégorie inconnue: ${category}`);
        }
        const result = levelUp(xp, xpToNextLevel, lvl, category);
        if (category === 'user') {
            dispatch(setUserXp(result.xp));
            dispatch(setUserXpToNextLvL(result.xpToNextLevel));
            dispatch(setUserLvL(result.lvl));
        } else if (category === 'kanji') {
            dispatch(setKanjiXp(result.xp));
            dispatch(setKanjiXpToNextLvL(result.xpToNextLevel));
            dispatch(setKanjiLvL(result.lvl));
        } else if (category === 'vocabulaire') {
            dispatch(setVocabulaireXp(result.xp));
            dispatch(setVocabulaireXpToNextLvL(result.xpToNextLevel));
            dispatch(setVocabulaireLvL(result.lvl));
        } else if (category === 'hiragana') {
            dispatch(setHiraganaXp(result.xp));
            dispatch(setHiraganaXpToNextLvL(result.xpToNextLevel));
            dispatch(setHiraganaLvL(result.lvl));
        } else if (category === 'katakana') {
            dispatch(setKatakanaXp(result.xp));
            dispatch(setKatakanaXpToNextLvL(result.xpToNextLevel));
            dispatch(setKatakanaLvL(result.lvl));
        } else if (category === 'nombre') {
            dispatch(setNombreXp(result.xp));
            dispatch(setNombreXpToNextLvL(result.xpToNextLevel));
            dispatch(setNombreLvL(result.lvl));
        }
    };
}