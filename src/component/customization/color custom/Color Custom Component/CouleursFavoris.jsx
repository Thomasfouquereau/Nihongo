import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { setColor, addColorToFavorites, removeColorFromFavorites } from '../../../store';
import styled from 'styled-components';

import FavIcon from '../../../../svg/FavIcon';

const ColorCutomTitle = styled.div`
    font-size: 1.5vw;
    background-color: ${props => props.$bgColor};
    border-radius:  0.8vw 0.8vw 0 0 ;
    padding: 1vw;
    padding-bottom: 0;
    width: 10vw;
    height: 3vw;
    position: relative; 
    display: flex;
    justify-content: center;
    align-items: flex-end;
    @media screen and (max-width: 560px){
        border-radius: 3vw 3vw 0 0 ;
        width: 45vw;
        height: 10vw;
        padding: 3vw;
        padding-bottom: 0;
        font-size: 5vw;
    }
    span{
        background-color: ${props => props.$mainBgColor};
        color: ${props => props.$fontColor};
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius:  0.5vw;
        font-weight: 700;
        text-transform: uppercase;
        @media screen and (max-width: 560px){
            border-radius:  3vw ;
        }
    }
    &::after {
        content: '';
        position: absolute;
        background-color: ${props => props.$bgColor};
        width: 2vw;
        height: 2vw;
        right: -2vw;
        bottom:0;
        @media screen and (max-width: 560px){
            width: 5vw;
            right: -5vw;
            height: 5vw;
        }
    }
    &::before {
        content: '';
        position: absolute;
        background-color: ${props => props.$mainBgColor};
        width: 2vw;
        height: 2vw;
        right: -2vw;
        bottom:0;
        z-index: 1;
        border-radius:  0vw 0vw 0vw 0.8vw ;
        @media screen and (max-width: 560px){
            border-radius:  0vw 0vw 0vw 3vw ;
            width: 5vw;
            right: -5vw;
            height: 5vw;
        }
    }
`

const ColorCutomContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center ;
    gap: 1vw;
    background-color: ${props => props.$bgColor};
    padding: 1vw;
    border-radius: 0 0.8vw 0.8vw 0.8vw ;
    min-height: 12vw;
    min-width: 12vw;
    @media screen and (max-width: 560px){
        flex-wrap: wrap;
        gap: 3vw;
        padding: 3vw;
        width: 88vw;
        border-radius: 0 3vw 3vw 3vw ;
        min-height: 44vw;
    }
`

const ColorCutomItemCadre = styled.div`
    padding: 0.8vw;
    background-color: ${props => props.$mainBgColor};
    border-radius: 0.8vw;
    transition: transform 0.3s;
    will-change: transform;
    cursor: pointer;
    @media screen and (max-width: 560px){
        border-radius: 3vw; 
        padding: 2vw;
    }
    &:hover{
        transform: scale(1.07);
    }
`

const ColorCutomItem = styled.div`
    width: 10vw;
    height: 10vw;
    border-radius: 0.5vw ;
    position: relative;
    @media screen and (max-width: 560px){
        width: 38.5vw;
        height: 40vw;
        border-radius: 3vw 
    }
    button{
        background-color: transparent;
        border: none;
        width: 10%;
        height: 10%;
        position: absolute;
        right: 1.7vw;
        bottom: 1.5vw;
        svg{
            margin: 0.5vw;
        }
        @media screen and (max-width: 560px){
            width: 25%;
            height: 25%;
            right: 2vw;
            bottom: 1vw;
            svg{
                margin: 1.5vw;
                margin-right: 0.3vw;
                
            }
        }
    }
`

const MesCouleursFavorites = () => {
    const mesCouleurs = useSelector(state => state.colorCustomFav.colorCustomFav);
    const { fontColor, mainBgColor, bgColor } = useSelector((state) => state.mode);
    const dispatch = useDispatch();
    const { color } = useSelector((state) => state.color);
    const [, setColorsState] = useState(color);
    const favCouleurs = '#F8FF22';



    const handleColorChange = (newColor) => () => {
        setColorsState(newColor);
        dispatch(setColor(newColor));
    };

    const mobile = window.innerWidth < 560 ? '7vw' : '1.5vw';

    const handleFavColor = (color) => {
        const mesCouleursFav = JSON.parse(localStorage.getItem('mesCouleursFavoris')) || [];
        if (mesCouleursFav.includes(color)) {
            dispatch(removeColorFromFavorites(color));
        } else {
            dispatch(addColorToFavorites(color));
        }
    }

    return (
        <div>
            <ColorCutomTitle $fontColor={fontColor} $bgColor={bgColor} $mainBgColor={mainBgColor}>
                <span>
                    favoris
                </span>
            </ColorCutomTitle>
            <ColorCutomContainer $bgColor={bgColor}>
                {mesCouleurs.map((couleur, index) => (
                    <ColorCutomItemCadre key={index} $mainBgColor={mainBgColor}>
                        <ColorCutomItem style={{ backgroundColor: couleur }} onClick={handleColorChange(couleur)}>
                            <button onClick={() => handleFavColor(couleur)}>
                                <FavIcon color={favCouleurs} width={mobile} height={mobile} />
                            </button>
                        </ColorCutomItem>
                    </ColorCutomItemCadre>
                ))}
            </ColorCutomContainer>
        </div>
    );
};

export default MesCouleursFavorites;