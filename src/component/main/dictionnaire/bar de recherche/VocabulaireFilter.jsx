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
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
        max-height: 100%;
        width: 90%;
        padding: 3vw;
        flex-direction: column;
        align-items: center;
        border-radius: 4vw;
    }
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
    @media screen and (max-width: 560px) {
        font-size: 7vw;
        width: 100%;
        border-radius: 3vw;
        padding: 0vw;
        padding-bottom: 3vw;
        padding-top: 3vw;
        max-height: 100%
    }
`

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    border-radius: 0.5vw;
    width: 80%;
    @media screen and (max-width: 560px) {
        width: 100%;
        gap: 1.5vw;
    }
`

const VocabulaireFilterButtonContainer = styled.div`
    max-width: 100%;
    display: flex;
    align-items: center;
    align-content: flex-start;
    gap: 1vw;
    border-radius: 0.5vw;
    padding: 1vw;
    flex-wrap: wrap;
    overflow: hidden;
    background-color: ${(props) => props.$mainBgColor};
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
        padding: 3vw;
        border-radius: 3vw;
        max-height: 50vw;
        overflow: hidden;
    }
    button{
        padding: 1vw;
        border-radius: 0.5vw;
        border: none;
        background-color: ${(props) => props.$color};
        color:#F7F7F2;
        font-size: 1.5vw;
        font-weight: 700;
        text-transform: capitalize;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
        will-change: transform;
        @media screen and (max-width: 560px) {
            font-size: 5vw;
            padding: 3vw 6vw;
            width: 100%;
            border-radius: 3vw;
        }
        &:hover{
            transform: scale(1.07);
        }
    }
`

const MoreButton = styled.button`
    max-width: 100%;
    max-height: 2vw;
    padding: 1vw;
    border-radius: 0.5vw;
    background-color: ${(props) => props.$color};
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 560px) {
        padding: 5vw;
        border-radius: 3vw;
    }
    img{
        width: 3.5vw;
        height: 3.5vw;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
        @media screen and (max-width: 560px) {
            width: 5vw;
            height: 5vw;
        }
    }
    &:hover{
        img{
            transform: scale(1.1);
        }
    }
`

export default function VocabulaireFilter({ filterVocabulaire }) {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

    const [selectedVocabulaire, setSelectedVocabulaire] = useState('Tous');
    const filter = vocabulaireFilter.filtres.map(item => item.filtre); 

    const handleVocabulaireChange = (event) => {

        const value = event.target.value;
        if (selectedVocabulaire === value) {
            setSelectedVocabulaire(''); 
            filterVocabulaire('');
        } else {
            setSelectedVocabulaire(value);
            filterVocabulaire(value);
        }
    };

    const handleMore = () => {
        const buttonContainer = document.querySelector('.VocabulaireFilterButtonContainer');
        const containerHeight = document.querySelector('.VocabulaireFilterContainer');
        const MoreButtonIcon = document.querySelector('.MoreButtonIcon');
        if (window.innerWidth > 560) {
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
            }
        } else {
            if (buttonContainer && containerHeight) {
                if (buttonContainer.style.overflow === 'visible') {
                    buttonContainer.style.overflow = 'hidden';
                    buttonContainer.style.maxHeight = '50vw';
                    MoreButtonIcon.style.transform = 'rotate(0deg)';
                } else {
                    buttonContainer.style.overflow = 'visible';
                    buttonContainer.style.maxHeight = '100%';
                    MoreButtonIcon.style.transform = 'rotate(180deg)';
                }
            }
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