import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const NombreDeQuestionContainer = styled.div`
    display: flex;
    width: calc(100% - 5vw);
    height: 20vw;
    padding: 1vw;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    gap: 0.6vw;
    margin-right: 3vw;
    margin-bottom: 1vw;
`

const NombreDeQuestionTitle = styled.span`
    font-size: 1.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$color};
    color: #F7F7F2;
    border-radius: 0.5vw;
    width: 40%;
    height: 100%;
`

const NombreDeQuestionButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    width: 60%;
    height: 100%;
    color: ${(props) => props.$fontColor};
`

const NombreDeQuestionButtonTopContainer = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.6vw;
    height: 50%;
`

const NombreDeQuestionButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    width:50%;
    height: 100%;
    font-size: 3vw;
    padding: 0vw;
    &:hover{
        background-color: #858585;
    }
`

const NombreDeQuestionButtonBottom = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    width: 100%;
    height: 50%;
    font-size: 3vw;
    padding: 0vw;
    &:hover{
        background-color: #858585;
    }
`

export default function NombreDeQuestion() {

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
        <NombreDeQuestionContainer $bgColor={bgColor}>
            <NombreDeQuestionTitle $color={color} $fontColor={fontColor}>
                Nombre de {text.modeTitle.replace("'", "&apos;")} dans l&apos;exercice
            </NombreDeQuestionTitle>
            <NombreDeQuestionButtonContainer $mainBgColor={mainBgColor} >
                <NombreDeQuestionButtonTopContainer>
                    <NombreDeQuestionButton $fontColor={fontColor} $mainBgColor={mainBgColor}>10</NombreDeQuestionButton>
                    <NombreDeQuestionButton $fontColor={fontColor} $mainBgColor={mainBgColor}>20</NombreDeQuestionButton>
                </NombreDeQuestionButtonTopContainer>
                <NombreDeQuestionButtonBottom $fontColor={fontColor} $mainBgColor={mainBgColor}>30</NombreDeQuestionButtonBottom>
            </NombreDeQuestionButtonContainer>
        </NombreDeQuestionContainer>
    );
}