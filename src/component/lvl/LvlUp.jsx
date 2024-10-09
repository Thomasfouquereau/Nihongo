import { useDispatch, useSelector } from 'react-redux';
import { setUserXp, setUserXpToNextLvL, setUserLvL, setKanjiXp, setKanjiXpToNextLvL, setKanjiLvL, setkanjiUserXp, setVocabulaireXp, setVocabulaireXpToNextLvL, setVocabulaireLvL, setvocabulaireUserXp, setHiraganaXp, setHiraganaXpToNextLvL, setHiraganaLvL, sethiraganaUserXp, setKatakanaXp, setKatakanaXpToNextLvL, setKatakanaLvL, setkatakanaUserXp, setNombreXp, setNombreXpToNextLvL, setNombreLvL, setnombreUserXp } from '../store';

function levelUp(xp, xpToNextLevel, lvl, category, kanjiUserXp, vocabulaireUserXp, hiraganaUserXp, katakanaUserXp, nombreUserXp) {
    let initialLvl = lvl;
    let xpForUser =  0;
    while (xp >= xpToNextLevel) {
        xp -= xpToNextLevel;
        lvl = parseInt(lvl, 10) + 1;
        xpToNextLevel = calculateNextLevelXp(xpToNextLevel, category);
    }
    if (category === 'kanji' && initialLvl !== lvl) {
        xpForUser = kanjiUserXp;
    } else if (category === 'vocabulaire' && initialLvl !== lvl) {
        xpForUser = vocabulaireUserXp;
    } else if (category === 'hiragana' && initialLvl !== lvl) {
        xpForUser = hiraganaUserXp;
    } else if (category === 'katakana' && initialLvl !== lvl) {
        xpForUser = katakanaUserXp;
    } else if (category === 'nombre' && initialLvl !== lvl) {
        xpForUser = nombreUserXp;
    }
    return { xp, xpToNextLevel, lvl, levelChanged: initialLvl !== lvl, xpForUser };
}

function calculateNextLevelXp(currentXpToNextLevel, category) {
    switch (category) {
        case 'user':
            return Math.floor(currentXpToNextLevel * 1.35);
        case 'kanji':
            return Math.floor(currentXpToNextLevel * 1.35);
        case 'vocabulaire':
            return Math.floor(currentXpToNextLevel * 1.35);
        case 'hiragana':
            return Math.floor(currentXpToNextLevel * 1.35);
        case 'katakana':
            return Math.floor(currentXpToNextLevel * 1.35);
        case 'nombre':
            return Math.floor(currentXpToNextLevel * 1.35);
        default:
            throw new Error('Catégorie inconnue');
    }
}

export default function UpdateLevels() {
    const dispatch = useDispatch();
    const userXp = useSelector((state) => state.lvl.userXp);
    const kanjiUserXp = useSelector((state) => state.xpPerLvLForUser.kanjiUserXp);
    const vocabulaireUserXp = useSelector((state) => state.xpPerLvLForUser.vocabulaireUserXp);
    const hiraganaUserXp = useSelector((state) => state.xpPerLvLForUser.hiraganaUserXp);
    const katakanaUserXp = useSelector((state) => state.xpPerLvLForUser.katakanaUserXp);
    const nombreUserXp = useSelector((state) => state.xpPerLvLForUser.nombreUserXp);

    const calculateUserXpBonus = (category, lvl) => {
        const baseXp = 2;
        const bonusMultiplier = parseFloat(0.25);
        if (['kanji', 'vocabulaire', 'hiragana', 'katakana', 'nombre'].includes(category)) {
            return baseXp + (baseXp * bonusMultiplier * lvl);
        }
        return baseXp;
    };

    return (xp, xpToNextLevel, lvl, category) => {
        const validCategories = ['user', 'kanji', 'vocabulaire', 'hiragana', 'katakana', 'nombre'];
        if (!validCategories.includes(category)) {
            throw new Error(`Catégorie inconnue: ${category}`);
        }
        const result = levelUp(xp, xpToNextLevel, lvl, category, kanjiUserXp, vocabulaireUserXp, hiraganaUserXp, katakanaUserXp, nombreUserXp);
        
        // Initialize result.xpForUser if not already defined
        if (typeof result.xpForUser === 'undefined') {
            result.xpForUser = 0;
        }
        
        const userXpBonus = calculateUserXpBonus(category, lvl);
        result.xpForUser += userXpBonus;

        if (category === 'user') {
            dispatch(setUserXp(result.xp));
            dispatch(setUserXpToNextLvL(result.xpToNextLevel));
            dispatch(setUserLvL(result.lvl));
        } else if (category === 'kanji') {
            dispatch(setKanjiXp(result.xp));
            dispatch(setKanjiXpToNextLvL(result.xpToNextLevel));
            dispatch(setKanjiLvL(result.lvl));
            dispatch(setkanjiUserXp(result.xpForUser));
            if (result.levelChanged) {
                dispatch(setUserXp(userXp + kanjiUserXp));
            }
        } else if (category === 'vocabulaire') {
            dispatch(setVocabulaireXp(result.xp));
            dispatch(setVocabulaireXpToNextLvL(result.xpToNextLevel));
            dispatch(setVocabulaireLvL(result.lvl));
            dispatch(setvocabulaireUserXp(result.xpForUser));
            if (result.levelChanged) {
                dispatch(setUserXp(userXp + vocabulaireUserXp));
            }
        } else if (category === 'hiragana') {
            dispatch(setHiraganaXp(result.xp));
            dispatch(setHiraganaXpToNextLvL(result.xpToNextLevel));
            dispatch(setHiraganaLvL(result.lvl));
            dispatch(sethiraganaUserXp(result.xpForUser));
            if (result.levelChanged) {
                dispatch(setUserXp(userXp + hiraganaUserXp));
            }
        } else if (category === 'katakana') {
            dispatch(setKatakanaXp(result.xp));
            dispatch(setKatakanaXpToNextLvL(result.xpToNextLevel));
            dispatch(setKatakanaLvL(result.lvl));
            dispatch(setkatakanaUserXp(result.xpForUser));
            if (result.levelChanged) {
                dispatch(setUserXp(userXp + katakanaUserXp));
            }
        } else if (category === 'nombre') {
            dispatch(setNombreXp(result.xp));
            dispatch(setNombreXpToNextLvL(result.xpToNextLevel));
            dispatch(setNombreLvL(result.lvl));
            dispatch(setnombreUserXp(result.xpForUser));
            if (result.levelChanged) {
                dispatch(setUserXp(userXp + nombreUserXp));
            }
        }
    };
}