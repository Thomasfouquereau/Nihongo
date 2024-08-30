import { useState } from 'react';
import vocabulaireFilter from '../../../data/filter/VocabulaireFilter.json';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import iconDownArrow from '../../../../assets/icon-down-arrow.svg';

const VocabulaireFilterContainer = styled.div`
    display: flex;
    gap: 0.6vw;
    max-height: 8.3vw;
    height: 100%;
    width: calc(100% - 5vw);
    border-radius: 0.8vw;
    padding: 1vw;
    background-color: ${(props) => props.$bgColor};
`

const VocabulaireFilterTitle = styled.span`
    font-size: 2.5vw;
    font-weight: 700;
    color: ${(props) => props.$fontColor};
    background-color: ${(props) => props.$mainBgColor};
    border-radius: 0.5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    min-height: 100%;
`

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    border-radius: 0.5vw;
    width: 80%;
`

const VocabulaireFilterButtonContainer = styled.div`
    max-width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    align-content: flex-start;
    gap: 1vw;
    border-radius: 0.5vw;
    padding: 1vw;
    flex-wrap: wrap;
    overflow: hidden;
    background-color: ${(props) => props.$mainBgColor};
    button{
        padding: 1vw;
        border-radius: 0.5vw;
        border: none;
        background-color: ${(props) => props.$color};
        color:#F7F7F2;
        font-size: 1.5vw;
        font-weight: 700;
        &:hover{
            background-color: #858585;
        }
    }
`

const MoreButton = styled.button`
    max-width: 100%;
    height: 20%;
    max-height: 1.5vw;
    padding: 1vw;
    border-radius: 0.5vw;
    background-color: ${(props) => props.$color};
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 3.5vw;
        height: 3.5vw;
    }
`

export default function VocabulaireFilter({ filterVocabulaire }) {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

    const [selectedVocabulaire, setSelectedVocabulaire] = useState('Tous');
    const filter = vocabulaireFilter.filtres.map(item => item.filtre); // Accédez aux valeurs 'filtre'

    const handleVocabulaireChange = (e) => {
        setSelectedVocabulaire(e.target.value);
        filterVocabulaire(e.target.value);
    };

    const handleMore = () => {
        const buttonContainer = document.querySelector('.VocabulaireFilterButtonContainer');
        const containerHeight = document.querySelector('.VocabulaireFilterContainer');
        const MoreButtonIcon = document.querySelector('.MoreButtonIcon');
        if (buttonContainer && containerHeight) {
            if (buttonContainer.style.overflow === 'visible') {
                buttonContainer.style.overflow = 'hidden';
                containerHeight.style.maxHeight = '8.3vw';
                MoreButtonIcon.style.transform = 'rotate(0deg)';
            } else {
                buttonContainer.style.overflow = 'visible';
                containerHeight.style.maxHeight = '100%';
                MoreButtonIcon.style.transform = 'rotate(180deg)';
            }
        } else {
            console.error('Element with class VocabulaireFilterButtonContainer or VocabulaireFilterContainer not found');
        }
    };

    return (
        <VocabulaireFilterContainer className="VocabulaireFilterContainer" $bgColor={bgColor}>
            <VocabulaireFilterTitle $fontColor={fontColor} $mainBgColor={mainBgColor}>Filtre</VocabulaireFilterTitle>
            <FilterContainer $mainBgColor={mainBgColor}>
                <VocabulaireFilterButtonContainer className="VocabulaireFilterButtonContainer" $mainBgColor={mainBgColor} $color={color} onChange={handleVocabulaireChange} value={selectedVocabulaire}>
                    {filter.map((option) => (
                        <button key={option} value={option} onClick={handleVocabulaireChange}>
                            {option}
                        </button>
                    ))}
                </VocabulaireFilterButtonContainer>
                <MoreButton $color={color} onClick={handleMore}>
                    <img className='MoreButtonIcon' src={iconDownArrow} alt="More" />
                </MoreButton>
            </FilterContainer>
        </VocabulaireFilterContainer>
    );
}

VocabulaireFilter.propTypes = {
    filterVocabulaire: PropTypes.func.isRequired,
};