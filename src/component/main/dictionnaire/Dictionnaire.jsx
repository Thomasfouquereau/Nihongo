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
import VocabulaireEnter from './dictionnaire component/dictionnaire enter/VocabulaireEnter';
import listeVocabulaire from '../../data/vocabulaire/listeVocabulaire.json';

import iconUpArrowLight from '../../../assets/icon-up-arrow-light.svg';
import iconUpArrowDark from '../../../assets/icon-up-arrow-dark.svg';

const HeaderPage = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
    margin-bottom: 6vw;
    @media screen and (max-width: 560px) {
        margin-top: 20vw;
        margin-left: 0vw;
        align-items: center;
        gap: 3vw;
    }
`;

const UpButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 3vw);
 `

const UpButton = styled.button`
    background-color: ${(props) => props.$color};
    width: 5vw;
    height: 4.3vw;
    border-radius: 0.8vw;
    border: ${(props) => props.$mainBgColor} 0.2vw solid;
    position: fixed;
    bottom: 1vw;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        width: 15vw;
        height: 13vw;  
        border-radius: 3vw;
        bottom: 5vw; 
    }
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
        border: ${(props) => props.$mainBgColor} 1vw solid;
    }
    img{
        width: 2.6vw;
        height: 2.6vw;
        resize: none;
        @media screen and (max-width: 560px) {
            width: 8vw;
            height: 8vw;
        }
    }
`

export default function Dictionnaire() {
    const { mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const location = useLocation();
    const searchText = useSelector((state) => state.search.searchText);
    const jlptLevel = useSelector((state) => state.search.jlptLevel);
    const kanaType = useSelector((state) => state.search.kanaType);
    const mode = useSelector(state => state.mode);
    const vocabulaireCategorie = useSelector(state => state.search.vocabulaireCategorie);

    const filteredKanjiList = listeKanji.kanji
        .filter((kanji) =>
            (kanji.Meaning?.toLowerCase().includes(searchText) ||
                kanji.SecondaryMeaning?.toLowerCase().includes(searchText)) &&
            (jlptLevel === '' || kanji.JLPTLevel === jlptLevel)
        )
        .sort((a, b) => {
            const aMatches = a.Kanji?.toLowerCase().startsWith(searchText) ||
                a.OnReading?.some((reading) => reading.toLowerCase().startsWith(searchText)) ||
                a.KunReading?.some((reading) => reading.toLowerCase().startsWith(searchText)) ||
                a.Meaning?.toLowerCase().startsWith(searchText) ||
                a.SecondaryMeaning?.toLowerCase().startsWith(searchText);

            const bMatches = b.Kanji?.toLowerCase().startsWith(searchText) ||
                b.OnReading?.some((reading) => reading.toLowerCase().startsWith(searchText)) ||
                b.KunReading?.some((reading) => reading.toLowerCase().startsWith(searchText)) ||
                b.Meaning?.toLowerCase().startsWith(searchText) ||
                b.SecondaryMeaning?.toLowerCase().startsWith(searchText);

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
        (hiragana.Hiragana?.toLowerCase().includes(searchText) ||
            hiragana.Dakuten?.toLowerCase().includes(searchText) ||
            hiragana.Handakuten?.toLowerCase().includes(searchText) ||
            hiragana.Romaji?.toLowerCase().includes(searchText)) &&
        (kanaType === '' || hiragana.Type === kanaType)
    ).sort((a, b) => {
        const aMatches = a.Hiragana?.toLowerCase().startsWith(searchText) ||
            a.Dakuten?.toLowerCase().startsWith(searchText) ||
            a.Handakuten?.toLowerCase().startsWith(searchText) ||
            a.Romaji?.toLowerCase().startsWith(searchText);
        const bMatches = b.Hiragana?.toLowerCase().startsWith(searchText) ||
            b.Dakuten?.toLowerCase().startsWith(searchText) ||
            b.Handakuten?.toLowerCase().startsWith(searchText) ||
            b.Romaji?.toLowerCase().startsWith(searchText);
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
        (katakana.Katakana?.toLowerCase().includes(searchText) ||
            katakana.Dakuten?.toLowerCase().includes(searchText) ||
            katakana.Handakuten?.toLowerCase().includes(searchText) ||
            katakana.Romaji?.toLowerCase().includes(searchText)) &&
        (kanaType === '' || katakana.Type === kanaType)
    ).sort((a, b) => {
        const aMatches = a.Katakana?.toLowerCase().startsWith(searchText) ||
            a.Dakuten?.toLowerCase().startsWith(searchText) ||
            a.Handakuten?.toLowerCase().startsWith(searchText) ||
            a.Romaji?.toLowerCase().startsWith(searchText);

        const bMatches = b.Katakana?.toLowerCase().startsWith(searchText) ||
            b.Dakuten?.toLowerCase().startsWith(searchText) ||
            b.Handakuten?.toLowerCase().startsWith(searchText) ||
            b.Romaji?.toLowerCase().startsWith(searchText);

        if (aMatches && !bMatches) return -1;
        if (!aMatches && bMatches) return 1;
        return 0;
    });

    const filteredVocabulaireList = Array.isArray(listeVocabulaire.vocabulaire) ? listeVocabulaire.vocabulaire.filter((vocabulaire) =>
        (vocabulaire.kanji?.toLowerCase().includes(searchText) ||
            vocabulaire.hiragana?.toLowerCase().includes(searchText) ||
            vocabulaire.francais?.toLowerCase().includes(searchText) ||
            vocabulaire.Romaji?.toLowerCase().includes(searchText)) &&
        (jlptLevel === '' || vocabulaire.niveau === jlptLevel) &&
        (vocabulaireCategorie.length === 0 || vocabulaireCategorie.includes(vocabulaire.categorie))
    ).sort((a, b) => {
        const aMatches = a.kanji?.toLowerCase().startsWith(searchText) ||
            a.hiragana?.toLowerCase().startsWith(searchText) ||
            a.francais?.toLowerCase().startsWith(searchText) ||
            a.Romaji?.toLowerCase().startsWith(searchText);
        const bMatches = b.kanji?.toLowerCase().startsWith(searchText) ||
            b.hiragana?.toLowerCase().startsWith(searchText) ||
            b.francais?.toLowerCase().startsWith(searchText) ||
            b.Romaji?.toLowerCase().startsWith(searchText);
        if (aMatches && !bMatches) return -1;
        if (!aMatches && bMatches) return 1;
        return 0;
    }) : [];

    const handleScrollToRecherche = () => {
        const rechercheElement = document.getElementById('recherche');
        rechercheElement.scrollIntoView({ behavior: 'smooth' });
    };

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
            {location.pathname === '/Dictionnaire/Vocabulaire' && (
                <VocabulaireEnter vocabulaireList={filteredVocabulaireList} />
            )}
            <UpButtonContainer>
                <UpButton onClick={handleScrollToRecherche} $mainBgColor={mainBgColor} $color={color}>
                    <img src={mode.mode === 'light' ? iconUpArrowLight : iconUpArrowDark} />
                </UpButton>
            </UpButtonContainer>
        </HeaderPage>
    );
}