import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import PlayIcon from '../../../../assets/icon-play.svg';

const RecapitulatifContainer = styled.div`
    display: flex;
    padding: 1vw;
    gap: 0.6vw;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    margin-right: 3vw;
    width: calc(100% - 5vw);
    height: 25vw;
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
    img{
        width: 7vw;
        height: 7vw;
        transform: translateY(0.7vw);
    }
`;

const PlayButtonTitle = styled.div`
    font-size: 2vw;
    font-weight: 700;
`;

const PlayButtonTitleJpContainer = styled.div`
    display: flex;
    flex-direction: column;
    span:nth-child(1){
        width: 2vw;
        text-align: center;
    }
`;

const PlayButtonTitleJp = styled.span`
    font-size: 1.7vw;
    width: 5.6vw;
    font-weight: 700;
`;

const Recapitulatif1Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35%;
    gap: 0.6vw;
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
    span:nth-child(1){
        position: absolute;
        top: 1vw;
        left: 1vw;
    }
    span:nth-child(2){
        color: ${(props) => props.$color};
        position: absolute;
        bottom: 1vw;
        right: 1vw;
        font-weight: 700;
    }
`;

const RecapitulatifDifficulte= styled.div`
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
    span:nth-child(1){
        position: absolute;
        top: 1vw;
        left: 1vw;
    }
    span:nth-child(2){
        color: ${(props) => props.$color};
        position: absolute;
        bottom: 1vw;
        right: 1vw;
        font-weight: 700;
    }
`;

const RecapitulatifNb= styled.div`
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
    span:nth-child(1){
        position: absolute;
        top: 1vw;
        right: 1vw;
        width: 70%;
        text-align: end;
    }
    span:nth-child(2){
        color: ${(props) => props.$color};
        position: absolute;
        bottom: 1vw;
        left: 2vw;
        font-size: 5vw;
        font-weight: 700;
    }
`;

export default function Recapitulatif() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const exerciceDifficulté = useSelector((state) => state.parametersExercice.exerciceDifficulté);
    const exerciceModeDeJeu = useSelector((state) => state.parametersExercice.exerciceModeDeJeu);
    const exerciceNumber = useSelector((state) => state.parametersExercice.exerciceNumber);
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
        <RecapitulatifContainer $bgColor={bgColor}>
            <PlayButton $color={color}>
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