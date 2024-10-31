import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { setColor } from '../../../store';
import styled from 'styled-components';

import FavIcon from '../../../../svg/FavIcon';

const ColorCutomTitle = styled.div`
    font-size: 1.5vw;
    background-color: ${props => props.$bgColor};
    border-radius:  0.8vw 0.8vw 0 0 ;
    padding: 1vw;
    padding-bottom: 0;
    width: 15vw;
    height: 3vw;
    position: relative; 
    display: flex;
    justify-content: center;
    align-items: center;
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
    }
    &::after {
        content: '';
        position: absolute;
        background-color: ${props => props.$bgColor};
        width: 2vw;
        height: 2vw;
        right: -2vw;
        bottom:0;
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
    }
`

const ColorCutomContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center ;
    gap: 1vw;
    background-color: ${props => props.$bgColor};
    width: 92vw;
    padding: 1vw;
    border-radius: 0 0.8vw 0.8vw 0.8vw ;
`

const ColorCutomItemCadre = styled.div`
    padding: 0.8vw;
    background-color: ${props => props.$mainBgColor};
    border-radius: 0.8vw;
    transition: transform 0.3s;
    will-change: transform;
    cursor: pointer;
    &:hover{
        transform: scale(1.07);
    }
`

const ColorCutomItem = styled.div`
    width: 10vw;
    height: 10vw;
    border-radius: 0.5vw ;
    button{
        background-color: transparent;
        border: none;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        svg{
            margin: 0.5vw;
        }
    }
`

const MesCouleurs = () => {
    const mesCouleurs = useSelector(state => state.colorCustom.mesCouleurs);
    const { fontColor, mainBgColor, bgColor } = useSelector((state) => state.mode);
    const dispatch = useDispatch();
    const { color } = useSelector((state) => state.color);
    const [, setColorsState] = useState(color);
    const handleColorChange = (newColor) => () => {
        setColorsState(newColor);
        dispatch(setColor(newColor));
    };
    const mobile = window.innerWidth < 560 ? '9vw' : '1.5vw';
    const favCouleur = '#D9D9D9';   

    const handleFavColor = (color) => {
        if (color === favCouleur) {
            console.log('couleur favorite');
            return '#D9D9D9';
            
        } else {
            return favCouleur;
        }
    }

    return (
        <div>
            <ColorCutomTitle $fontColor={fontColor} $bgColor={bgColor} $mainBgColor={mainBgColor}>
                <span>
                    mes couleurs
                </span>
            </ColorCutomTitle>
            <ColorCutomContainer $bgColor={bgColor}>
                {mesCouleurs.map((couleur, index) => (
                    <ColorCutomItemCadre key={index} $mainBgColor={mainBgColor}>
                        <ColorCutomItem style={{ backgroundColor: couleur }} onClick={handleColorChange(couleur)}>
                        <button onClick={handleFavColor}>
                            <FavIcon  color={favCouleur} width={mobile} height={mobile} />
                        </button>
                        </ColorCutomItem>
                    </ColorCutomItemCadre>
                ))}
            </ColorCutomContainer>
        </div>
    );
};

export default MesCouleurs;