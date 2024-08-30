import BarDeRecherche from './bar de recherche/BarDeRecherche';
import { useLocation } from 'react-router-dom';
import JlptFilter from './bar de recherche/JlptFilter';
import KanaFilter from './bar de recherche/KanaFilter';
import VocabulaireFilter from './bar de recherche/VocabulaireFilter';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useState } from 'react';

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
    gap: 0.6vw;
    flex-direction: column;
`

export default function Recherche() {
    const { bgColor } = useSelector((state) => state.mode);

    const [searchText, setSearchText] = useState('');
    const location = useLocation();

    console.log(searchText);

    const handleSearchChange = (text) => {
        setSearchText(text);
    };

    const filterJlpt = (value) => {
        console.log(`Selected JLPT level: ${value}`);
        // Ajoutez ici la logique pour filtrer les résultats en fonction du niveau JLPT sélectionné
    };

    const filterKana = (value) => {
        console.log(`Selected Kana: ${value}`);
        // Ajoutez ici la logique pour filtrer les résultats en fonction du type de Kana sélection
    }

    const filterVocabulaire = (value) => {
        console.log(`Selected Vocabulaire: ${value}`);
        // Ajoutez ici la logique pour filtrer les résultats en fonction du type de vocabulaire sélectionné
    }
    return (
        <div>
            {location.pathname === '/Dictionnaire/Kanji' && (
                <FilterContainer $bgColor={bgColor}>
                    <BarDeRecherche onSearchChange={handleSearchChange} />
                    <JlptFilter filterJlpt={filterJlpt} />
                </FilterContainer>
            )}
            {location.pathname === '/Dictionnaire/Vocabulaire' && (
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
            {(location.pathname === '/Dictionnaire/Katakana' || location.pathname === '/Dictionnaire/Hiragana') && (
                <FilterContainer $bgColor={bgColor}>
                    <BarDeRecherche onSearchChange={handleSearchChange} />
                    <KanaFilter filterKana={filterKana} />
                </FilterContainer>
            )}
            {location.pathname === '/Dictionnaire/Nombres' && (
                <FilterContainer $bgColor={bgColor}>
                    <BarDeRecherche onSearchChange={handleSearchChange} />
                </FilterContainer>
            )}
        </div>
    )
}