import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SectionModeDeJeu = styled.div`
    display: flex;
    width: calc(100% - 3vw);
    margin-right: 3vw;
    gap: 1vw;
    height: 28vw;
`

const ModeDeJeuContainerCadre = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35%;
    padding: 1vw;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    div:hover{
        background-color: #858585;
    }
`

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
    border-radius: 0.8vw;
    position: relative;
`

const ModeDeJeuTitle = styled.span`
    font-size: 1.5vw;
    position: absolute;
    top: 1vw;
    left: 50%;
    transform: translateX(-50%);
    color: ${(props) => props.$color};
`

const ModeDeJeu1Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 4vw;
    font-weight: 700;
    color: ${(props) => props.$fontColor};
`

const ModeDeJeu2Title = styled.span`
    font-size: 8vw;
    font-weight: 700;
`

const Jlpt = styled.span`
    font-size: 1.4vw;
    position: absolute;
    bottom: 1vw;
    left: 1vw;
`

const ModeDeJeu3Title = styled.span`
    font-size: 4vw;
    text-align: center;
    font-weight: 700;
`

export default function ModeDeJeu() {

    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

    const location = useLocation();

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
                return 'Accueil';
        }
    };

    const text = getText();
    return (
        <SectionModeDeJeu>
            <ModeDeJeuContainerCadre $bgColor={bgColor}>
                <ModeDeJeuContainer $mainBgColor={mainBgColor} $fontColor={fontColor} >
                    <ModeDeJeuTitle $color={color}>Mode de jeu</ModeDeJeuTitle>
                    <ModeDeJeu1Title>
                        <span>ランダム</span>
                        <span>Aléatoire</span>
                    </ModeDeJeu1Title>
                </ModeDeJeuContainer>
            </ModeDeJeuContainerCadre>
            <ModeDeJeuContainerCadre $bgColor={bgColor}>
                <ModeDeJeuContainer $mainBgColor={mainBgColor} $fontColor={fontColor} >
                    <ModeDeJeuTitle $color={color}>Mode de jeu</ModeDeJeuTitle>
                    <ModeDeJeu2Title>N5</ModeDeJeu2Title>
                    <Jlpt>JLPT</Jlpt>
                </ModeDeJeuContainer>
            </ModeDeJeuContainerCadre>
            <ModeDeJeuContainerCadre $bgColor={bgColor}>
                <ModeDeJeuContainer $mainBgColor={mainBgColor} $fontColor={fontColor} >
                    <ModeDeJeuTitle $color={color}>Mode de jeu</ModeDeJeuTitle>
                    <ModeDeJeu3Title>Choisir ces {text.modeTitle}</ModeDeJeu3Title>
                </ModeDeJeuContainer>
            </ModeDeJeuContainerCadre>
        </SectionModeDeJeu>
    );
}