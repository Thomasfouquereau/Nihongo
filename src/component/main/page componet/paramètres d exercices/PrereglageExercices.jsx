import { useSelector } from 'react-redux';
import styled from 'styled-components';

import SaveIcon from '../../../../svg/SaveIcon';
import crossIconLight from '../../../../assets/icon-cross-white.svg';
import crossIconDark from '../../../../assets/icon-cross-dark.svg';
import ReglageIcon1 from '../../../../assets/icon-reglage-1.svg';
import ReglageIcon2 from '../../../../assets/icon-reglage-2.svg';
import ReglageIcon3 from '../../../../assets/icon-reglage-3.svg';
import ReglageIcon4 from '../../../../assets/icon-reglage-4.svg';

const PrereglageExercicesContainer = styled.div`
    display: flex;
    background-color: ${props => props.$bgColor};
    padding: 1vw;
    border-radius: 0.8vw;
    width: calc(100% - 5vw);
    height: 17vw;
    gap: 0.6vw;
    @media screen and (max-width: 560px){
        flex-direction: column;
        height: 100%;
        border-radius: 4vw;
        padding: 3vw;
        width: 90%;
        gap: 1.5vw;
    }
`

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35%;
    gap: 0.6vw;
    @media screen and (max-width: 560px){
        width: 100%;
        height: 50vw;
        gap: 1.5vw;
    }
    p{
        font-size: 2vw;
        color: ${props => props.$fontColor};
        background-color: ${props => props.$mainBgColor};
        border-radius: 0.5vw;
        height: 45%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 560px){
            border-radius: 3vw;
            font-size: 7vw;
        }
    }
`

const ReglageContainer = styled.div`
    display: flex;
    gap: 0.6vw;
    width: 100%;
    height: 100%;
    position: relative;
    @media screen and (max-width: 560px){
        gap: 1.5vw;
    }
    &::after{
        content: '';
        height: 100%;
        width: 100%;
        background-color: ${props => props.$color};
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 0.5vw;
        z-index: 100;
        background-color: #858585c1;
        @media screen and (max-width: 560px) {
            border-radius: 3vw;  
        }
    }
    &::before{
        content: 'a venir';
        font-size: 2vw;
        text-transform: uppercase;
        font-weight: bold;
        position: absolute;
        color: #F7F7F2;
        top: 50%;
        left: 50%;
        z-index: 101;
        transform: translate(-50%, -50%);
    }
`

const ReglageCommand = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    width: 45%;
    min-height: 65%;
    @media screen and (max-width: 560px){
        gap: 1.5vw;
    }
    button{
        background-color: ${props => props.$mainBgColor};
        border-radius: 0.5vw;
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
        will-change: transform;
        @media screen and (max-width: 560px) {
            border-radius: 3vw;   
        }
        &:hover{
            transform: scale(1.02);
        }
        span{
            font-size: 1.5vw;
            color: ${props => props.$color};
            font-weight: bold;
            @media screen and (max-width: 560px) {
                font-size: 7vw;   
            }
        }
    }
    div{
        display: flex;
        min-height: 50%;
        gap: 0.6vw;
        @media screen and (max-width: 560px){
            gap: 1.5vw;
        }
        button{
            background-color: ${props => props.$mainBgColor};
            border-radius: 0.5vw;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
            will-change: transform;
            @media screen and (max-width: 560px) {
                border-radius: 3vw;   
            }
            &:hover{
                transform: scale(1.02);
            }
        }
        button:nth-child(1){
            background-color: ${props => props.$color};
        }
    }
`

const DisplyReglage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6vw;
    width: 55%;
    background-color: ${props => props.$mainBgColor};
    border-radius: 0.5vw;
    @media screen and (max-width: 560px) {
            border-radius: 3vw;  
            gap: 1.5vw; 
        }
    div{
        width: 50%;
        height: 90%;
        border-radius: 0.5vw;
        background-color: ${props => props.$color};
        @media screen and (max-width: 560px) {
            border-radius: 3vw;   
        }
    }
    div:nth-child(1){
        margin-left: 0.5vw;
        @media screen and (max-width: 560px) {
            margin-left: 1.5vw;  
        }
    }
    div:nth-child(2){
        margin-right: 0.5vw;
        @media screen and (max-width: 560px) {
            margin-right: 1.5vw;  
        }
    }

`

const RightContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6vw;
    width: 65%;
    @media screen and (max-width: 560px){
        width: 100%;
        gap: 1.5vw;
    }
`

const PreReglageButton = styled.button`
    width: 49.4%;
    border-radius: 0.5vw;
    background-color: ${props => props.$mainBgColor};
    color: ${props => props.$fontColor};
    display: flex;
    flex-direction: column;
    position: relative;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    @media screen and (max-width: 560px){
        width: 100%;
        height: 35vw;
        border-radius: 3vw;
    }
    h3{
        font-size: 1.5vw;
        color: ${props => props.$color};
        margin-top: 0.3vw;
        margin-left: 0.5vw;
        @media screen and (max-width: 560px){
            font-size: 7vw;
            margin-top: 1vw;
            margin-left: 1.5vw;
        }
    }
    p{
        font-size: 1vw;
        margin-left: 0.5vw;
        margin-top: -0.4vw;
        @media screen and (max-width: 560px){
            font-size: 5vw;
            margin-top: -0.7vw;
            margin-left: 1.5vw;
            text-align:left;
            width: 70%;
        }
    }
    img{
        position: absolute;
        right: 2.5vw;
        bottom: 2.5vw;
    }
    &:hover{
        transform: scale(1.02);
    }
`

export default function PrereglageExercices() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const activeMode = localStorage.getItem('mode') || 'light';
    const mobile = window.innerWidth <= 560 ? '10vw' : '3vw';

    return (
        <PrereglageExercicesContainer $bgColor={bgColor}   >
            <LeftContainer $fontColor={fontColor} $mainBgColor={mainBgColor} $color={color}>
                <p>Prereglage Exercices</p>
                <ReglageContainer>
                    <ReglageCommand $fontColor={fontColor} $mainBgColor={mainBgColor} $color={color}>
                        <div>
                            <button>
                                <SaveIcon width={mobile} height={mobile} color={color} mainColor={mainBgColor}></SaveIcon>
                            </button>
                            <button>
                                <img src={activeMode === 'light' ? crossIconDark : crossIconLight } />
                            </button>
                        </div>
                        <button>
                            <span>Créer</span>
                        </button>
                    </ReglageCommand>
                    <DisplyReglage $fontColor={fontColor} $mainBgColor={mainBgColor} $color={color}>
                        <div>

                        </div>
                        <div>

                        </div>
                    </DisplyReglage>
                </ReglageContainer>
            </LeftContainer>
            <RightContainer>
                <PreReglageButton $fontColor={fontColor} $mainBgColor={mainBgColor} $color={color}>
                    <h3>Premier pas</h3>
                    <p>Parfait pour découvrir</p>
                    <img src={ReglageIcon1} />
                </PreReglageButton>
                <PreReglageButton $fontColor={fontColor} $mainBgColor={mainBgColor} $color={color}>
                    <h3>Découverte</h3>
                    <p>Parfait pour en apprendre plus</p>
                    <img src={ReglageIcon2} />
                </PreReglageButton>
                <PreReglageButton $fontColor={fontColor} $mainBgColor={mainBgColor} $color={color}>
                    <h3>Développement Avancé</h3>
                    <p>Parfait pour développer ses compétences</p>
                    <img src={ReglageIcon3} />
                </PreReglageButton>
                <PreReglageButton $fontColor={fontColor} $mainBgColor={mainBgColor} $color={color}>
                    <h3>Mises à Jour</h3>
                    <p>Parfait pour continue à se perfectionner</p>
                    <img src={ReglageIcon4} />
                </PreReglageButton>
            </RightContainer>

        </PrereglageExercicesContainer>
    )
}