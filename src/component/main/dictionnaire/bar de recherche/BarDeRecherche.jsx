import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import IconSearch from '../../../../assets/icon-search.svg';

const BarDeRechercheContainer = styled.div`
    position: relative;
    width: 60%;
    height: calc(3vw - (0.15vw * 2)); ;
    display: flex;
    align-items: center;
    img{
        position: absolute;
        right: 1vw;
        top: 50%;
        transform: translateY(-50%);
        width: 3vw;
    }
    input{
        width: 100%;
        height: 100%;
        padding: 1vw;
        border-radius: 0.5vw;
        border: none;
        background-color: #f1f1f1;
        font-size: 1.2vw;
        border: 0.15vw solid ${(props) => props.$color};
        background-color: ${(props) => props.$mainBgColor};
    }
    input::placeholder{
        color: ${(props) => props.$fontColor};
        font-size: 2vw;
        transform: translateY(0.25vw);
    }
`
    

export default function BarDeRecherche({ onSearchChange }) {
    const { fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const location = useLocation();
    const [searchText, setSearchText] = useState('');

    const getText = () => {
        switch (location.pathname) {
            case '/Dictionnaire/Kanji':
                return { titleFr: 'Kanji' };
            case '/Dictionnaire/Hiragana':
                return { titleFr: 'Hiragana' };
            case '/Dictionnaire/Katakana':
                return { titleFr: 'Katakana' };
            case '/Dictionnaire/Vocabulaire':
                return { titleFr: 'Vocabulaire' };
            case '/Dictionnaire/Nombres':
                return { titleFr: 'Nombres' };
            default:
                return 'Accueil';
        }
    };

    const text = getText();

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
        onSearchChange(e.target.value); // Appeler la fonction de rappel pour transmettre la valeur de l'input
    };

    return (
        <BarDeRechercheContainer $mainBgColor={mainBgColor} $fontColor={fontColor} $color={color}>
            <input
                type="text"
                placeholder={`Rechercher un ${text.titleFr}`}
                value={searchText}
                onChange={handleInputChange}
            />
            <img src={IconSearch} />
        </BarDeRechercheContainer>
    );
}

BarDeRecherche.propTypes = {
    onSearchChange: PropTypes.func.isRequired,
};