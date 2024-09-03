import Header from '../page componet/Header';
import styled from 'styled-components';
import DictionnaireComponent from './dictionnaire component/DictionnaireComponent';
import Recherche from './dictionnaire component/Recherche';
import { useLocation } from 'react-router-dom';
import KanjiEnter from './dictionnaire component/dictionnaire enter/KanjiEnter';
import { useSelector } from 'react-redux';
import listeKanji from '../../data/kanji/listeKanji.json';
import HiraganaEnter from './dictionnaire component/dictionnaire enter/HiraganaEnter';
import listeHiragana from '../../data/hiragana/listeHiragana.json';
import KatakanaEnter from './dictionnaire component/dictionnaire enter/KatakanaEnter';
import listeKatakana from '../../data/katakana/listeKatakana.json';

const HeaderPage = styled.header`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
`;

export default function Dictionnaire() {
    const location = useLocation();
    const searchText = useSelector((state) => state.search.searchText);
    const jlptLevel = useSelector((state) => state.search.jlptLevel);
    const kanaType = useSelector((state) => state.search.kanaType);
    console.log(kanaType);

    const filteredKanjiList = listeKanji.kanji
        .filter((kanji) =>
            (kanji.Kanji.toLowerCase().includes(searchText) ||
                kanji.OnReading.some((reading) => reading.toLowerCase().includes(searchText)) ||
                kanji.KunReading.some((reading) => reading.toLowerCase().includes(searchText)) ||
                kanji.Meaning.toLowerCase().includes(searchText)) &&
            (jlptLevel === '' || kanji.JLPTLevel === jlptLevel)
        )
        .sort((a, b) => {
            const aMatches = a.Kanji.toLowerCase().startsWith(searchText) ||
                a.OnReading.some((reading) => reading.toLowerCase().startsWith(searchText)) ||
                a.KunReading.some((reading) => reading.toLowerCase().startsWith(searchText)) ||
                a.Meaning.toLowerCase().startsWith(searchText);

            const bMatches = b.Kanji.toLowerCase().startsWith(searchText) ||
                b.OnReading.some((reading) => reading.toLowerCase().startsWith(searchText)) ||
                b.KunReading.some((reading) => reading.toLowerCase().startsWith(searchText)) ||
                b.Meaning.toLowerCase().startsWith(searchText);

            if (aMatches && !bMatches) return -1;
            if (!aMatches && bMatches) return 1;
            return 0;
        });

        const filteredHiraganaList = [
            ...listeHiragana.Hiragana,
            ...listeHiragana.Dakuten,
            ...listeHiragana.Handakuten,
            ...listeHiragana.Combinaison
        ].filter((hiragana) =>
            (hiragana.Hiragana.toLowerCase().includes(searchText) ||
                hiragana.Romaji.toLowerCase().includes(searchText)) &&
            (kanaType === '' || hiragana.Type === kanaType)
        ).sort((a, b) => {
            const aMatches = a.Hiragana.toLowerCase().startsWith(searchText) ||
                a.Romaji.toLowerCase().startsWith(searchText);
        
            const bMatches = b.Hiragana.toLowerCase().startsWith(searchText) ||
                b.Romaji.toLowerCase().startsWith(searchText);
        
            if (aMatches && !bMatches) return -1;
            if (!aMatches && bMatches) return 1;
            return 0;
        });

        const filteredKatakanaList = [
            ...listeKatakana.Katakana,
            ...listeKatakana.Dakuten,
            ...listeKatakana.Handakuten,
            ...listeKatakana.Combinaison
        ].filter((katakana) =>
            (katakana.Katakana.toLowerCase().includes(searchText) ||
                katakana.Romaji.toLowerCase().includes(searchText)) &&
            (kanaType === '' || katakana.Type === kanaType)
        ).sort((a, b) => {
            const aMatches = a.Katakana.toLowerCase().startsWith(searchText) ||
                a.Romaji.toLowerCase().startsWith(searchText);
        
            const bMatches = b.Katakana.toLowerCase().startsWith(searchText) ||
                b.Romaji.toLowerCase().startsWith(searchText);
        
            if (aMatches && !bMatches) return -1;
            if (!aMatches && bMatches) return 1;
            return 0;
        });

    return (
        <HeaderPage>
            <Header />
            <DictionnaireComponent />
            <Recherche />
            {location.pathname === '/Dictionnaire/Kanji' && (
                <KanjiEnter kanjiList={filteredKanjiList} />
            )}
            {location.pathname === '/Dictionnaire/Hiragana' && (
                <HiraganaEnter hiraganaList={filteredHiraganaList} />
            )}
            {location.pathname === '/Dictionnaire/Katakana' && (
                <KatakanaEnter katakanaList={filteredKatakanaList} />
            )}
        </HeaderPage>
    );
}