import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import SearchIcon from '../../../../svg/SearchIcon';
import CrossIcon from '../../../../svg/CrossIcon';

const BarDeRechercheContainer = styled.div`
    position: relative;
    min-width: 60%;
    width: 100%;
    max-width: 100%;
    height: calc(3vw - (0.15vw * 2)); ;
    display: flex;
    align-items: center;
    @media screen and (max-width: 560px) {
        height: 16vw;
    }
    button{
        position: absolute;
        right: 2vw;
        top: 50%;
        transform: translateY(-50%);
        width: 3vw;
        background-color: transparent;
        @media screen and (max-width: 560px) {
            right: 0vw;
            width: 13vw;
            height: 100%;
        }
    }
`
const Input = styled.input` 
    width: 100%;
    height: 100%;
    padding: 1vw;
    border-radius: 0.5vw;
    border: none;
    background-color: #f1f1f1;
    border: 0.15vw solid ${(props) => props.$color};
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    font-size: 2vw;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;  
        font-size: 6vw;   
        padding-left: 3vw ;
        padding-bottom: 0;
        padding-top: 0;
    }
    &::placeholder{
        color: ${(props) => props.$fontColor};
        font-size: 2vw;
        @media screen and (max-width: 560px) {
            font-size: 6vw;        
        }
    }
`

export default function BarDeRecherche({ onSearchChange }) {
    const { fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const searchText = useSelector((state) => state.search.searchText); // Récupérer searchText depuis le store
    const location = useLocation();
    const [searchTextw, setSearchTextw] = useState('');

    const getText = () => {
        switch (location.pathname) {
            case '/Dictionnaire/Kanji':
            case '/choisir-ses/Kanji':
                return { titleFr: 'Kanji' };
            case '/Dictionnaire/Hiragana':
            case '/choisir-ses/Hiragana':
                return { titleFr: 'Hiragana' };
            case '/Dictionnaire/Katakana':
            case '/choisir-ses/Katakana':
                return { titleFr: 'Katakana' };
            case '/Dictionnaire/Vocabulaire':
            case '/choisir-ses/Vocabulaire':
                return { titleFr: 'Vocabulaire' };
            case '/Dictionnaire/Nombres':
            case '/choisir-ses/Nombres':
                return { titleFr: 'Nombres' };
            default:
                return 'Accueil';
        }
    };

    const text = getText();

    const handleInputChange = (e) => {
        setSearchTextw(e.target.value);
        onSearchChange(e.target.value); // Appeler la fonction de rappel pour transmettre la valeur de l'input
    };

    const handleClearInput = () => {
        setSearchTextw('');
        onSearchChange('');
    };

    const mobile = window.innerWidth <= 560 ? '10vw' : '3.5vw';

    return (
        <BarDeRechercheContainer>
            <Input
                type="text"
                placeholder={`Rechercher un ${text.titleFr}`}
                value={searchText || searchTextw} // Utiliser searchText récupéré du store
                onChange={handleInputChange}
                $color={color}
                $mainBgColor={mainBgColor}
                $fontColor={fontColor}
            />
            {searchText ? <button onClick={handleClearInput}><CrossIcon width={mobile} height={mobile} color={color} ></CrossIcon></button> : <button><SearchIcon width={mobile} height={mobile} color={color}></SearchIcon></button>}
        </BarDeRechercheContainer>
    );
}

BarDeRecherche.propTypes = {
    onSearchChange: PropTypes.func.isRequired,
};