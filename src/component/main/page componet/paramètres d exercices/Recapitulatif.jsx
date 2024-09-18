import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PlayIcon from '../../../../assets/icon-play.svg';
import CrossIconLight from '../../../../assets/icon-cross-white.svg';

const RecapitulatifContainer = styled.div`
    display: flex;
    padding: 1vw;
    gap: 0.6vw;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    margin-right: 3vw;
    width: calc(100% - 5vw);
    height: 25vw;
    @media screen and (max-width: 560px) {
        margin: 0;
        max-width: 100vw;
        width: 90%;
        height: 100%;
        padding: 3vw;
        border-radius: 4vw;
        flex-direction: column-reverse;
        gap: 1.5vw;
    }
`;

const PlayButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: ${(props) => props.$color};
    color: #F7F7F2;
    border-radius: 0.5vw;
    width: 30%;
    height: 100%;
    border: none;
    cursor: pointer;
    @media screen and (max-width: 560px) {
        width: 100%;
        border-radius: 3vw;
        height: 70vw;
    }
    img{
        width: 7vw;
        height: 7vw;
        transform: translateY(0.7vw);
        @media screen and (max-width: 560px) {
            width: 20vw;
            height: 20vw;
        }
    }
`;

const PlayButtonTitle = styled.div`
    font-size: 2vw;
    font-weight: 700;
    @media screen and (max-width: 560px) {
        font-size: 7vw;
    }
`;

const PlayButtonTitleJpContainer = styled.div`
    display: flex;
    flex-direction: column;
    span:nth-child(1){
        width: 2vw;
        text-align: center;
        @media screen and (max-width: 560px) {
            width: 8vw;
        }
    }
`;

const PlayButtonTitleJp = styled.span`
    font-size: 1.7vw;
    width: 5.6vw;
    font-weight: 700;
    @media screen and (max-width: 560px) {
            font-size: 7vw;
            width: 100%;
        }
`;

const Recapitulatif1Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35%;
    gap: 0.6vw;
    @media screen and (max-width: 560px) {
        width: 100%;
        gap: 1.5vw;
    }
`;

const RecapitulatifModeDeJeu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100% ;
    height: 40%;
    font-size: 2vw;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    position: relative;
    @media screen and (max-width: 560px) {
        width: 100%;
        height: 28vw;
        font-size: 6vw;
        border-radius: 3vw;
    }
    span:nth-child(1){
        position: absolute;
        top: 1vw;
        left: 1vw;
        @media screen and (max-width: 560px) {
            right: 50%;
            transform: translateX(50%);
            text-align: center;
            top: 3vw;
        }
    }
    span:nth-child(2){
        color: ${(props) => props.$color};
        position: absolute;
        bottom: 1vw;
        right: 1vw;
        font-weight: 700;
        @media screen and (max-width: 560px) {
            right: 50%;
            transform: translateX(50%);
            bottom: 3vw;
        }
    }
`;

const RecapitulatifDifficulte = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100% ;
    height: 60%;
    font-size: 2vw;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    position: relative;
    @media screen and (max-width: 560px) {
        width: 100%;
        height: 28vw;
        font-size: 6vw;
        border-radius: 3vw;
    }
    span:nth-child(1){
        position: absolute;
        top: 1vw;
        left: 1vw;
        @media screen and (max-width: 560px) {
            right: 50%;
            transform: translateX(50%);
            text-align: center;
            top: 3vw;
        }
    }
    span:nth-child(2){
        color: ${(props) => props.$color};
        position: absolute;
        bottom: 1vw;
        right: 1vw;
        font-weight: 700;
        @media screen and (max-width: 560px) {
            right: 50%;
            transform: translateX(50%);
            bottom: 3vw;
        }
    }
`;

const RecapitulatifNb = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:35% ;
    height: 100%;
    font-size: 2vw;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    position: relative;
    @media screen and (max-width: 560px) {
        width: 100%;
        height: 40vw;
        font-size: 6vw;
        border-radius: 3vw;
    }
    span:nth-child(1){
        position: absolute;
        top: 1vw;
        right: 1vw;
        width: 70%;
        text-align: end;
        @media screen and (max-width: 560px) {
            right: 50%;
            transform: translateX(50%);
            text-align: center;
            top: 3vw;
        }
    }
    span:nth-child(2){
        color: ${(props) => props.$color};
        position: absolute;
        bottom: 1vw;
        left: 2vw;
        font-size: 5vw;
        font-weight: 700;
        @media screen and (max-width: 560px) {
            left: 50%;
            transform: translateX(-50%);
            bottom: 3vw;
            font-size: 10vw;
        }
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
    height: 70%;
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
    @media screen and (max-width: 560px) {
        width: 90vw;
        border-radius: 3vw;
        padding: 3vw;
        gap: 1.5vw
    }
    &:hover{
        h1{
            background-color: #858585;
        }
        div{
            background-color: #858585;
        }
        
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

export default function Recapitulatif() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const exerciceDifficulté = useSelector((state) => state.parametersExercice.exerciceDifficulté);
    const exerciceModeDeJeu = useSelector((state) => state.parametersExercice.exerciceModeDeJeu);
    const exerciceNumber = useSelector((state) => state.parametersExercice.exerciceNumber);
    const location = useLocation();
    const navigate = useNavigate();

    const getText = () => {
        switch (location.pathname) {
            case '/Kanji':
                return {
                    modeTitle: 'Kanji'
                };
            case '/Hiragana':
                return {
                    modeTitle: 'Hiragana'
                };
            case '/Katakana':
                return {
                    modeTitle: 'Katakana'
                };
            case '/Vocabulaire':
                return {
                    modeTitle: 'Vocabulaire'
                };
            case '/Nombres':
                return {
                    modeTitle: 'Nombres'
                };
            default:
                return {
                    modeTitle: 'Accueil'
                };
        }
    };

    const text = getText();
    const modeDeJeu = useSelector((state) => state.parametersExercice.exerciceModeDeJeu);
    const nombreDeQuestions = useSelector((state) => state.parametersExercice.exerciceNumber);
    const difficulte = useSelector((state) => state.parametersExercice.exerciceDifficulté);
    const [Nav, setNav] = useState(false);

    useEffect(() => {
        if (Nav) {
            navigate(`/Exercices/${text.modeTitle}`);
        }
    }, [Nav, navigate, text.modeTitle]);

    const toggleAlert = (selector, condition) => {
        document.querySelector(selector).style.display = condition ? 'flex' : 'none';
    };
    
    const handlePlay = () => {
        const isModeDeJeuEmpty = modeDeJeu === "";
        const isNombreDeQuestionsEmpty = nombreDeQuestions === 0;
        const isDifficulteEmpty = difficulte === "";
    
        if (isModeDeJeuEmpty || isNombreDeQuestionsEmpty || isDifficulteEmpty) {
            document.querySelector('.Alert').style.display = 'block';
            setNav(false);
            toggleAlert('.AlertMode', isModeDeJeuEmpty);
            toggleAlert('.AlertNbQuestion', isNombreDeQuestionsEmpty);
            toggleAlert('.AlertDifficulte', isDifficulteEmpty);
        } else {
            setNav(true);
        }
    };
    
    const handleClose = () => {
        document.querySelector('.Alert').style.display = 'none';
        toggleAlert('.AlertMode', false);
        toggleAlert('.AlertNbQuestion', false);
        toggleAlert('.AlertDifficulte', false);
    };

    const handleGoTo = (section) => () => {
        const element = document.getElementById(`Section${section}`);
        if (element) {
            document.querySelector('.Alert').style.display = 'none';
            if (window.innerWidth <= 560) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            console.error(`Element not found: #Section${section}`);
        }
    };

    return (
        <RecapitulatifContainer $bgColor={bgColor}>
            <Alert className='Alert'>
                <AlertContainer>
                    <Close onClick={handleClose} $color={color}><img src={CrossIconLight} /></Close>
                    <AlertItem onClick={handleGoTo("Difficulte")} className='AlertDifficulte' $bgColor={bgColor} $mainBgColor={mainBgColor} $color={color} $fontColor={fontColor}>
                        <h1>Selectionner une <span>difficulté</span></h1>
                        <div>
                            <p>Selon la difficulté choisie, plus ou moins d&apos;aide vous sera proposée</p>
                            <span></span>
                        </div>
                    </AlertItem>
                    <AlertItem onClick={handleGoTo("NombreDeQuestions")} className='AlertNbQuestion' $bgColor={bgColor} $mainBgColor={mainBgColor} $color={color} $fontColor={fontColor}>
                        <h1>Selectionner un <span>nombre de questions</span></h1>
                        <div>
                            <p>Sélectionner le nombre de questions qui vous sera posée lors de l&apos;exercice</p>
                            <span></span>
                        </div>
                    </AlertItem>
                    <AlertItem onClick={handleGoTo("ModeDeJeu")} className='AlertMode' $bgColor={bgColor} $mainBgColor={mainBgColor} $color={color} $fontColor={fontColor}>
                        <h1>Selectionner un <span>mode de jeu</span></h1>
                        <div>
                            <p>Le mode de jeu influencera les questions qui vous seront posées lors de l&apos;exercice</p>
                            <span></span>
                        </div>
                    </AlertItem>
                </AlertContainer>
            </Alert>
            <PlayButton $color={color} onClick={handlePlay}>
                <PlayButtonTitle>Commencer</PlayButtonTitle>
                <img src={PlayIcon} />
                <PlayButtonTitleJpContainer>
                    <span>はじ</span>
                    <PlayButtonTitleJp>
                        <span>始</span>
                        <span>める</span>
                    </PlayButtonTitleJp>
                </PlayButtonTitleJpContainer>
            </PlayButton>
            <Recapitulatif1Container>
                <RecapitulatifModeDeJeu $fontColor={fontColor} $mainBgColor={mainBgColor} $color={color}>
                    <span>Mode de jeu</span>
                    <span>{exerciceModeDeJeu}</span>
                </RecapitulatifModeDeJeu>
                <RecapitulatifDifficulte $fontColor={fontColor} $mainBgColor={mainBgColor} $color={color}>
                    <span>Difficulté</span>
                    <span>{exerciceDifficulté}</span>
                </RecapitulatifDifficulte>
            </Recapitulatif1Container>
            <RecapitulatifNb $fontColor={fontColor} $mainBgColor={mainBgColor} $color={color}>
                <span>Nombre de {text.modeTitle.replace("'", "&apos;")} dans l&apos;exercice</span>
                <span>{exerciceNumber}</span>
            </RecapitulatifNb>
        </RecapitulatifContainer>
    );
}