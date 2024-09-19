import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const JlptFilterContainer = styled.div`
    display: flex;
    gap: 0.6vw;
    height: 100%;
    min-width: calc(40% - 0.7vw);
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
        width: 100%;
        flex-wrap: wrap;
    }
    button{
        width: 25%;
        padding: 1vw;
        border-radius: 0.5vw;
        border: none;
        background-color: ${(props) => props.$mainBgColor};
        color: ${(props) => props.$fontColor};
        font-size: 2.5vw;
        font-weight: 700;
        @media screen and (max-width: 560px) {
            font-size: 7vw;
            width: 32%;
            padding: 3vw;
            border-radius: 3vw;
        }
        &:hover{
            background-color: #858585;
        }
    }
`

export default function JlptFilter({ filterJlpt }) {
    const [selectedOption, setSelectedOption] = useState('N5');

    const handleChange = (event) => {
        const value = event.target.value;
        if (selectedOption === value) {
            setSelectedOption(''); // Réinitialise la sélection si le même bouton est cliqué
            filterJlpt(''); // Appelle la fonction de rappel avec une chaîne vide
        } else {
            setSelectedOption(value);
            filterJlpt(value); // Appelle la fonction de rappel avec la valeur sélectionnée
        }
    };

    const { fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

    return (
        <JlptFilterContainer name="jlpt" id="jlpt" value={selectedOption}  $mainBgColor={mainBgColor} $fontColor={fontColor} $color={color}>
            <button value="N5" onClick={handleChange}>N5</button>
            <button value="N4" onClick={handleChange}>N4</button>
            <button value="N3" onClick={handleChange}>N3</button>
            <button value="N2" onClick={handleChange}>N2</button>
            <button value="N1" onClick={handleChange}>N1</button>
        </JlptFilterContainer>
    );
}

JlptFilter.propTypes = {
    filterJlpt: PropTypes.func.isRequired,
};