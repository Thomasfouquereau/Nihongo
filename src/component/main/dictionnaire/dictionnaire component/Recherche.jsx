import BarDeRecherche from '../bar de recherche/BarDeRecherche';
import { useLocation } from 'react-router-dom';
import JlptFilter from '../bar de recherche/JlptFilter';
import KanaFilter from '../bar de recherche/KanaFilter';
import VocabulaireFilter from '../bar de recherche/VocabulaireFilter';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setSearchText, setJlptLevel, setkanaType, setVocabulaireCategorie } from '../../../store';

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.6vw;
    background-color: ${(props) => props.$bgColor};
    padding: 1vw;
    border-radius: 0.8vw;
    width: calc(100% - 5vw);
    height: 5vw;
`;

const VocabulairFilterContainer = styled.div`
    display: flex;
    gap: 1vw;
    flex-direction: column;
`

export default function Recherche() {
    const { bgColor } = useSelector((state) => state.mode);
    const dispatch = useDispatch();
    const location = useLocation();

    const handleSearchChange = (text) => {
        dispatch(setSearchText(text.toLowerCase()));
    };

    const filterJlpt = (value) => {
        dispatch(setJlptLevel(value));
    };

    const filterKana = (value) => {
        dispatch(setkanaType(value));

    };

    const filterVocabulaire = (value) => {
        dispatch(setVocabulaireCategorie(value));
    };

    return (
        <div id="recherche">
            {location.pathname === '/Dictionnaire/Kanji' || location.pathname === '/choisir-ses/Kanji' && (
                <FilterContainer $bgColor={bgColor}>
                    <BarDeRecherche onSearchChange={handleSearchChange} />
                    <JlptFilter filterJlpt={filterJlpt} />
                </FilterContainer>
            )}
            {location.pathname === '/Dictionnaire/Vocabulaire' || location.pathname === '/choisir-ses/Vocabulaire' && (
                <VocabulairFilterContainer>
                    <FilterContainer $bgColor={bgColor}>
                        <BarDeRecherche onSearchChange={handleSearchChange} />
                        <JlptFilter filterJlpt={filterJlpt} />
                    </FilterContainer>
                    <div>
                        <VocabulaireFilter filterVocabulaire={filterVocabulaire} />
                    </div>
                </VocabulairFilterContainer>
            )}
            {(location.pathname === '/Dictionnaire/Katakana' || location.pathname === '/Dictionnaire/Hiragana' || location.pathname === '/choisir-ses/Katakana' || location.pathname === '/choisir-ses/Hiragana') && (
                <FilterContainer $bgColor={bgColor}>
                    <BarDeRecherche onSearchChange={handleSearchChange} />
                    <KanaFilter filterKana={filterKana} />
                </FilterContainer>
            )}
            {location.pathname === '/Dictionnaire/Nombres' || location.pathname === '/choisir-ses/Nombres'  && (
                <FilterContainer $bgColor={bgColor}>
                    <BarDeRecherche onSearchChange={handleSearchChange} />
                </FilterContainer>
            )}
        </div>
    )
}