import Header from '../page componet/header';
import styled from 'styled-components';
import DictionnaireComponent from './dictionnaire component/DictionnaireComponent';
import Recherche from './dictionnaire component/Recherche';
import { useLocation } from 'react-router-dom';
import KanjiEnter from './dictionnaire component/dictionnaire enter/KanjiEnter';
import { useSelector } from 'react-redux';
import listeKanji from '../../data/kanji/listeKanji.json';

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

    return (
        <HeaderPage>
            <Header />
            <DictionnaireComponent />
            <Recherche />
            {location.pathname === '/Dictionnaire/Kanji' && (
                <KanjiEnter kanjiList={filteredKanjiList} />
            )}
        </HeaderPage>
    );
}