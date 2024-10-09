import { levelUp } from './levelUp';

function updateLevels(
    xp, xpToNextLevel, lvl,
    setXp, setXpToNextLevel, setLvl
) {
    const result = levelUp(xp, xpToNextLevel, lvl);
    setXp(result.xp);
    setXpToNextLevel(result.xpToNextLevel);
    setLvl(result.lvl);
}

const userXp = 0;
const userXpToNextLevel = 50;
const userLvL = 1;
const setUserXp = (xp) => console.log('User XP:', xp);
const setUserXpToNextLvL = (xpToNextLevel) => console.log('User XP to Next Level:', xpToNextLevel);
const setUserLvL = (lvl) => console.log('User Level:', lvl);

const kanjiXp = 0;
const kanjiXpToNextLevel = 100;
const kanjilVL = 1;
const setKanjiXp = (xp) => console.log('Kanji XP:', xp);
const setKanjiXpToNextLvL = (xpToNextLevel) => console.log('Kanji XP to Next Level:', xpToNextLevel);
const setKanjilVL = (lvl) => console.log('Kanji Level:', lvl);

const vocabulaireXp = 0;
const vocabulaireXpToNextLevel = 100;
const vocabulaireLvL = 1;
const setVocabulaireXp = (xp) => console.log('Vocabulaire XP:', xp);
const setVocabulaireXpToNextLvL = (xpToNextLevel) => console.log('Vocabulaire XP to Next Level:', xpToNextLevel);
const setVocabulaireLvL = (lvl) => console.log('Vocabulaire Level:', lvl);

const hiraganaXp = 0;
const hiraganaXpToNextLevel = 100;
const hiraganaLvL = 1;
const setHiraganaXp = (xp) => console.log('Hiragana XP:', xp);
const setHiraganaXpToNextLvL = (xpToNextLevel) => console.log('Hiragana XP to Next Level:', xpToNextLevel);
const setHiraganaLvL = (lvl) => console.log('Hiragana Level:', lvl);

const katakanaXp = 0;
const katakanaXpToNextLevel = 100;
const katakanaLvL = 1;
const setKatakanaXp = (xp) => console.log('Katakana XP:', xp);
const setKatakanaXpToNextLvL = (xpToNextLevel) => console.log('Katakana XP to Next Level:', xpToNextLevel);
const setKatakanaLvL = (lvl) => console.log('Katakana Level:', lvl);

const nombreXp = 0;
const nombreXpToNextLevel = 100;
const nombreLvL = 1;
const setNombreXp = (xp) => console.log('Nombre XP:', xp);
const setNombreXpToNextLvL = (xpToNextLevel) => console.log('Nombre XP to Next Level:', xpToNextLevel);
const setNombreLvL = (lvl) => console.log('Nombre Level:', lvl);

updateLevels(
    userXp, userXpToNextLevel, userLvL,
    setUserXp, setUserXpToNextLvL, setUserLvL
);

updateLevels(
    kanjiXp, kanjiXpToNextLevel, kanjilVL,
    setKanjiXp, setKanjiXpToNextLvL, setKanjilVL
);

updateLevels(
    vocabulaireXp, vocabulaireXpToNextLevel, vocabulaireLvL,
    setVocabulaireXp, setVocabulaireXpToNextLvL, setVocabulaireLvL
);

updateLevels(
    hiraganaXp, hiraganaXpToNextLevel, hiraganaLvL,
    setHiraganaXp, setHiraganaXpToNextLvL, setHiraganaLvL
);

updateLevels(
    katakanaXp, katakanaXpToNextLevel, katakanaLvL,
    setKatakanaXp, setKatakanaXpToNextLvL, setKatakanaLvL
);

updateLevels(
    nombreXp, nombreXpToNextLevel, nombreLvL,
    setNombreXp, setNombreXpToNextLvL, setNombreLvL
);