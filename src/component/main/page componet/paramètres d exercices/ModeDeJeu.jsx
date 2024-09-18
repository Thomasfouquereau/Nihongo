import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setExerciceModeDeJeu } from '../../../store'; // Assurez-vous d'importer l'action correctement

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
    div:hover {
        background-color: #858585;
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

const Jlpt = styled.span`
    font-size: 1.4vw;
    position: absolute;
    bottom: 1vw;
    left: 1vw;
    @media screen and (max-width: 560px) {
        font-size: 5vw;
        bottom: 5vw;
        left: 5vw;
    }
`;

const ModeDeJeu3Title = styled.span`
    font-size: 4vw;
    text-align: center;
    font-weight: 700;
    @media screen and (max-width: 560px) {
        font-size: 10vw;
        width: 90%;
    }
`;

export default function ModeDeJeu() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const dispatch = useDispatch();
    const location = useLocation();
    

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
    };
    const specialHandleClick = (mode) => {
        dispatch(setExerciceModeDeJeu(mode));
        navigate(`/choisir-ses/${text.modeTitle}`);
        window.scrollTo(0, 0);
    }

    return (
        <SectionModeDeJeu id='SectionModeDeJeu'>
            
            <ModeDeJeuContainerCadre $bgColor={bgColor} onClick={() => handleClick('Aléatoire')}>
                <ModeDeJeuContainer $mainBgColor={mainBgColor} $fontColor={fontColor}>
                    <ModeDeJeuTitle $color={color}>Mode de jeu</ModeDeJeuTitle>
                    <ModeDeJeu1Title>
                        <span>ランダム</span>
                        <span>Aléatoire</span>
                    </ModeDeJeu1Title>
                </ModeDeJeuContainer>
            </ModeDeJeuContainerCadre>

            {location.pathname.includes('/Vocabulaire') || location.pathname.includes('/Kanji') ? (
                <ModeDeJeuContainerCadre $bgColor={bgColor} onClick={() => handleClick('N5')}>
                    <ModeDeJeuContainer $mainBgColor={mainBgColor} $fontColor={fontColor}>
                        <ModeDeJeuTitle $color={color}>Mode de jeu</ModeDeJeuTitle>
                        <ModeDeJeu2Title>N5</ModeDeJeu2Title>
                        <Jlpt>JLPT</Jlpt>
                    </ModeDeJeuContainer>
                </ModeDeJeuContainerCadre>
            ) : null}

            <ModeDeJeuContainerCadre $bgColor={bgColor} onClick={() => specialHandleClick(`Choisir ses questions`)}>
                <ModeDeJeuContainer $mainBgColor={mainBgColor} $fontColor={fontColor}>
                    <ModeDeJeuTitle $color={color}>Mode de jeu</ModeDeJeuTitle>
                    <ModeDeJeu3Title>Choisir ses {text.modeTitle}</ModeDeJeu3Title>
                </ModeDeJeuContainer>
            </ModeDeJeuContainerCadre>

        </SectionModeDeJeu>
    );
}