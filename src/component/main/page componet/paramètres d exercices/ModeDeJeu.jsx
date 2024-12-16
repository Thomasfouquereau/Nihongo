import { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setExerciceModeDeJeu } from '../../../store';
import CrossIconLight from '../../../../assets/icon-cross-white.svg';
import { useState } from 'react';

const SectionModeDeJeu = styled.div`
    display: flex;
    width: calc(100% - 3vw);
    margin-right: 3vw;
    gap: 1vw;
    height: 28vw;
    @media screen and (max-width: 560px) {
        flex-direction: column;
        height: 100%;
        width: 100%;
        align-items: center;
        margin-right: 0vw;
        gap: 3vw;
    }
`;

const ModeDeJeuContainerCadre = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding: 1vw;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    @media screen and (max-width: 560px) {
            width: 95%;
            padding: 3vw;
            border-radius: 4vw;
        }
    div:nth-child(1){
        will-change: transform;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    }
    div:nth-child(1):hover {
        transform: scale(1.025);
    }
`;

const ModeDeJeuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% - 2vw);
    height: 100%;
    padding: 1vw;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    position: relative;
    @media screen and (max-width: 560px) {
        height: 80vw;
        border-radius: 3vw;
    }
`;

const ModeDeJeuTitle = styled.span`
    font-size: 1.5vw;
    position: absolute;
    top: 1vw;
    left: 50%;
    transform: translateX(-50%);
    color: ${(props) => props.$color};
    @media screen and (max-width: 560px) {
        font-size: 5vw;
        top: 5vw;
    }
`;

const ModeDeJeu1Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 4vw;
    font-weight: 700;
    color: ${(props) => props.$fontColor};
    @media screen and (max-width: 560px) {
        font-size: 10vw;
    }
`;

const ModeDeJeu2Title = styled.span`
    font-size: 8vw;
    font-weight: 700;
    @media screen and (max-width: 560px) {
        font-size: 20vw;
    }
`;

const JlptContainer = styled.div`
    position: absolute;
    bottom: 1vw;
    width: 88%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    @media screen and (max-width: 560px) {
        bottom: 5vw;    
    }
`

const Jlpt = styled.span`
    font-size: 1.4vw;
    @media screen and (max-width: 560px) {
        font-size: 5vw;
    }
`;

const JlptSelectContainer = styled.div`
    display: flex;
    gap: 0.7vw;
    div{
        background-color: transparent;
        color: ${(props) => props.$fontColor};
        font-size: 1vw;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
        will-change: transform;
        @media screen and (max-width: 560px) {
            font-size: 4vw;
        }
        &:hover{
            transform: scale(1.4) !important;
        }
    }
    @media screen and (max-width: 560px) {
        gap: 4vw;
    }
`

const ModeDeJeu3Title = styled.span`
    font-size: 4vw;
    text-align: center;
    font-weight: 700;
    @media screen and (max-width: 560px) {
        font-size: 10vw;
        width: 90%;
    }
`;

const Alert = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #929291dd;
    z-index: 100;
`;

const AlertContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 50vw;
    height: 85%;
    gap: 0.6vw;
    @media screen and (max-width: 560px) {
        width: 90vw;
        height: 80%;
        gap: 3vw
    }
`;

const Close = styled.button`
    background-color: ${(props) => props.$color};
    border-radius: 0.5vw;   
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 560px) {
            border-radius: 3vw;
        }
    img{
        width: 3vw;
        height: 3vw;
        @media screen and (max-width: 560px) {
            width: 9vw;
            height: 9vw;
        }
    }
`;

const AlertItem = styled.button`
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: 100%;
    max-height: 50%;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.5vw;
    z-index: 101;
    padding: 1vw;
    gap: 0.6vw;
    font-size: 1vw;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        width: 90vw;
        border-radius: 3vw;
        padding: 3vw;
        gap: 1.5vw
    }
    &:hover{
        transform: scale(1.04);
        
    }
    span{
        color: ${(props) => props.$color};
        margin-left: 0.4vw;
        @media screen and (max-width: 560px) {
            margin-left: 1.4vw;
        }
    }
    h1{
        background-color: ${(props) => props.$mainBgColor};
        border-radius: 0.5vw;
        height: 40%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.$fontColor};
        @media screen and (max-width: 560px) {
            border-radius: 1.5vw;
            font-size: 4vw;
            height: 30%;
        }
    }
    div{
        background-color: ${(props) => props.$mainBgColor};
        border-radius: 0.5vw;
        height: 60%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.$fontColor};
        @media screen and (max-width: 560px) {
            border-radius: 1.5vw;
            height: 70%;
        }
        p{
            font-size: 1.5vw;
            margin-left: 0.4vw;
            @media screen and (max-width: 560px) {
                font-size: 4.5vw;
                width: 90%;
            }
        }
    }
`;

export default function ModeDeJeu() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const dispatch = useDispatch();
    const location = useLocation();
    const modeDeJeu = useSelector((state) => state.parametersExercice.exerciceModeDeJeu);
    const [selectedMode, setSelectedMode] = useState(null);
    const [selectedJlpt, setSelectedJlpt] = useState('N5');

    useEffect(() => {
        if ((location.pathname === '/Katakana' || location.pathname === '/Hiragana') && modeDeJeu === 'N5') {
            dispatch(setExerciceModeDeJeu(''));
        }
    }, [location.pathname, modeDeJeu, dispatch]);

    const getText = () => {
        switch (location.pathname) {
            case '/Kanji':
                return {
                    modeTitle: 'Kanji',
                };
            case '/Hiragana':
                return {
                    modeTitle: 'Hiragana',
                };
            case '/Katakana':
                return {
                    modeTitle: 'Katakana',
                };
            case '/Vocabulaire':
                return {
                    modeTitle: 'Vocabulaire',
                };
            case '/Nombres':
                return {
                    modeTitle: 'Nombres',
                };
            default:
                return 'Accueil';
        }
    };

    const text = getText();
    const navigate = useNavigate();

    const handleClick = (mode) => {
        dispatch(setExerciceModeDeJeu(mode));
        setSelectedMode(mode);
    };

    const getModeBgColor = (mode) => {
        return selectedMode === mode ? color : mainBgColor;
    };

    const nombreDeQuestions = useSelector((state) => state.parametersExercice.exerciceNumber);
    const isNombreDeQuestionsEmpty = nombreDeQuestions === 0;
    const specialHandleClick = (mode) => {
        document.querySelector('.Alert').style.display = 'block';
        if (nombreDeQuestions === 0) {
            toggleAlert('.AlertNbQuestion', isNombreDeQuestionsEmpty);
            return;
        } else {
            dispatch(setExerciceModeDeJeu(mode));
            navigate(`/choisir-ses/${text.modeTitle}`);
            window.scrollTo(0, 0);
        }
    }

    const toggleAlert = (selector, condition) => {
        document.querySelector(selector).style.display = condition ? 'flex' : 'none';
    };

    const handleClose = () => {
        document.querySelector('.NbAlert').style.display = 'none';
        toggleAlert('.NbAlertNbQuestion', false);
    };

    const handleGoTo = (section) => () => {
        const element = document.getElementById(`Section${section}`);
        if (element) {
            document.querySelector('.NbAlert').style.display = 'none';
            if (window.innerWidth <= 560) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            console.error(`Element not found: #Section${section}`);
        }
    };

    const handleJlpt = (jlpt) => () => {
        setSelectedJlpt(jlpt);
    }

    return (
        <SectionModeDeJeu id='SectionModeDeJeu'>
            <Alert className='NbAlert'>
                <AlertContainer>
                    <Close onClick={handleClose} $color={color}><img src={CrossIconLight} /></Close>
                    <AlertItem onClick={handleGoTo("NombreDeQuestions")} className='NbAlertNbQuestion' $bgColor={bgColor} $mainBgColor={mainBgColor} $color={color} $fontColor={fontColor}>
                        <h1>Selectionner un <span>nombre de questions</span></h1>
                        <div>
                            <p>Sélectionner le nombre de questions qui vous sera posée lors de l&apos;exercice</p>
                            <span></span>
                        </div>
                    </AlertItem>
                </AlertContainer>
            </Alert>
            <ModeDeJeuContainerCadre $bgColor={bgColor} onClick={() => handleClick('Aléatoire')}>
                <ModeDeJeuContainer $mainBgColor={getModeBgColor('Aléatoire')} $fontColor={fontColor}>
                    <ModeDeJeuTitle $color={color}>Mode de jeu</ModeDeJeuTitle>
                    <ModeDeJeu1Title>
                        <span>ランダム</span>
                        <span>Aléatoire</span>
                    </ModeDeJeu1Title>
                </ModeDeJeuContainer>
            </ModeDeJeuContainerCadre>
            {location.pathname.includes('/Vocabulaire') || location.pathname.includes('/Kanji') ? (
                <ModeDeJeuContainerCadre $bgColor={bgColor} onClick={() => handleClick(selectedJlpt)}>
                    <ModeDeJeuContainer $mainBgColor={getModeBgColor(selectedJlpt)} $fontColor={fontColor}>
                        <ModeDeJeuTitle $color={color}>Mode de jeu</ModeDeJeuTitle>
                        <ModeDeJeu2Title>{selectedJlpt}</ModeDeJeu2Title>
                        <JlptContainer>
                            <Jlpt>JLPT</Jlpt>
                            <JlptSelectContainer $fontColor={fontColor}>
                                <div onClick={handleJlpt('N5')}>N5</div>
                                <div onClick={handleJlpt('N4')}>N4</div>
                                {location.pathname.includes('/Vocabulaire') ? (
                                    <>
                                        <div onClick={handleJlpt('N3')}>N3</div>
                                        <div onClick={handleJlpt('N2')}>N2</div>
                                        <div onClick={handleJlpt('N1')}>N1</div>
                                    </>
                                ) : null}
                            </JlptSelectContainer>
                        </JlptContainer>
                    </ModeDeJeuContainer>
                </ModeDeJeuContainerCadre>
            ) : null}
            <ModeDeJeuContainerCadre $bgColor={bgColor} onClick={() => specialHandleClick(`Choisir ses questions`)}>
                <ModeDeJeuContainer $mainBgColor={getModeBgColor('Choisir ses questions')} $fontColor={fontColor}>
                    <ModeDeJeuTitle $color={color}>Mode de jeu</ModeDeJeuTitle>
                    <ModeDeJeu3Title>Choisir ses {text.modeTitle}</ModeDeJeu3Title>
                </ModeDeJeuContainer>
            </ModeDeJeuContainerCadre>
        </SectionModeDeJeu>
    );
}