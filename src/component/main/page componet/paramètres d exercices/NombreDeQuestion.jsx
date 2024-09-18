import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setExerciceNumber } from '../../../store'; // Assurez-vous d'importer l'action correctement

const NombreDeQuestionContainer = styled.div`
    display: flex;
    width: calc(100% - 5vw);
    height: 20vw;
    padding: 1vw;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    gap: 0.6vw;
    margin-right: 3vw;
    @media screen and (max-width: 560px) {
        flex-direction: column;
        height: 100%;
        width: 90%;
        align-items: center;
        padding: 3vw;
        margin-right: 0vw;
        border-radius: 4vw;
        gap: 1.5vw;
    }
`;

const NombreDeQuestionTitle = styled.span`
    font-size: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$color};
    color: #F7F7F2;
    border-radius: 0.5vw;
    width: 40%;
    max-width: 40%;
    height: 100%;
    text-align: center;
    padding-left: 2vw;
    padding-right: 2vw;
    @media screen and (max-width: 560px) {
        font-size: 7vw;
        max-width: 100%;
        width: 100%;
        padding:0;
        border-radius: 3vw;
        height: 35vw;
    }
`;

const NombreDeQuestionButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    min-width: 60%;
    height: 100%;
    color: ${(props) => props.$fontColor};
    @media screen and (max-width: 560px) {
        max-width: 100%;
        width: 100%;
        height: 35vw;
        gap: 1.5vw;
    }
`;

const NombreDeQuestionButtonTopContainer = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.6vw;
    height: 50%;
    @media screen and (max-width: 560px) {
        gap: 1.5vw;   
    }
`;

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
    font-size: 3.5vw;
    font-weight: 700;
    padding: 0vw;
    @media screen and (max-width: 560px) {
        font-size: 7vw;  
        border-radius: 3vw;
    }
    &:hover{
        background-color: #858585;
    }
`;

const NombreDeQuestionButtonBottom = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    width: 100%;
    height: 50%;
    font-size: 3.5vw;
    font-weight: 700;
    padding: 0vw;
    @media screen and (max-width: 560px) {
        font-size: 7vw;  
        border-radius: 3vw;
    }
    &:hover{
        background-color: #858585;
    }
`;

export default function NombreDeQuestion() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const dispatch = useDispatch();
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

    const handleClick = (number) => {
        dispatch(setExerciceNumber(number));
    };

    return (
        <NombreDeQuestionContainer $bgColor={bgColor} id='SectionNombreDeQuestions'>
            <NombreDeQuestionTitle $color={color} $fontColor={fontColor}>
                Nombre de {text.modeTitle.replace("'", "&apos;")} dans l&apos;exercice
            </NombreDeQuestionTitle>
            <NombreDeQuestionButtonContainer $mainBgColor={mainBgColor} >
                <NombreDeQuestionButtonTopContainer>
                    <NombreDeQuestionButton $fontColor={fontColor} $mainBgColor={mainBgColor} onClick={() => handleClick(10)}>10</NombreDeQuestionButton>
                    <NombreDeQuestionButton $fontColor={fontColor} $mainBgColor={mainBgColor} onClick={() => handleClick(20)}>20</NombreDeQuestionButton>
                </NombreDeQuestionButtonTopContainer>
                <NombreDeQuestionButtonBottom $fontColor={fontColor} $mainBgColor={mainBgColor} onClick={() => handleClick(30)}>30</NombreDeQuestionButtonBottom>
            </NombreDeQuestionButtonContainer>
        </NombreDeQuestionContainer>
    );
}