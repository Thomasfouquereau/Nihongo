import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const QuestionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 75%;
    font-size: 7vw;
    color: ${(props) => (props.$isCorrect === null ? props.$fontColor : props.$isCorrect ? '#68cf68' : '#FF6767')};
    background-color: ${(props) => props.$mainBgColor};
    border-radius: 0.8vw;
    @media screen and (max-width: 560px){
        min-height: 60%;
        border-radius: 3vw;
        font-size: 15vw;
    }
`

const Container = styled.div`
    position: relative;
    width: 50%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen {
        width: 100%;   
    }
`

const QuestionHelpTop = styled.div`
    position: absolute;
    top: 0vw;
    font-size: 2.5vw;
    color: ${(props) => props.$fontColor};
    display: flex;
    justify-content: space-between;
    width:45%;
    @media screen and (max-width: 560px){
        font-size: 6vw;
        width: 70%;
    }
`

const QuestionHelpBottom = styled.div`
    position: absolute;
    bottom: 0vw;
    font-size: 2.5vw;
    color: ${(props) => props.$fontColor};
    display: flex;
    justify-content: space-between;
    width:45%;
    @media screen and (max-width: 560px){
        font-size: 6vw;
        width: 70%;
    }
`

const ContextHelp = styled.span`
    font-size: 1vw;
    font-style: italic;
    @media screen and (max-width: 560px){
        font-size: 3vw;
    }
`

export default function Question({ question, isCorrect }) {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const location = useLocation();
    const exerciceDifficulté = useSelector((state) => state.parametersExercice.exerciceDifficulté);

    function vocabulaire() {
        if (question.kanji === "") {
            return question.hiragana;
        } else {
            return question.kanji;
        }
    }

    function Kana() {
        if (question.Type === "Hiragana" || question.Type === "Katakana") {
            return question.Hiragana || question.Katakana;
        } else if (question.Nom === "Dakuten") {
            return question.Dakuten;
        } else if (question.Nom === "Handakuten") {
            return question.Handakuten;
        } else if (question.Type === "Combinaison") {
            return question.Hiragana || question.Katakana;
        }
    }

    return (
        <QuestionContainer
            key={question.id}
            $mainBgColor={mainBgColor}
            $color={color}
            $bgColor={bgColor}
            $fontColor={fontColor}
            $isCorrect={isCorrect}
        >
            <Container>
                {
                    exerciceDifficulté === 'Débutant'
                        && (location.pathname.includes('/Exercices/Vocabulaire') || location.pathname.includes('/Exercices/Kanji')) ?
                        <QuestionHelpTop $fontColor={fontColor}>
                            <span><ContextHelp>on: </ContextHelp>{question.OnPrincipalReadingRomaji || question.Romaji}</span>
                            <span><ContextHelp>Kun: </ContextHelp>{question.KunPrincipalReadingRomaji}</span>
                        </QuestionHelpTop>
                        : null
                }
                <p>{question.Kanji || vocabulaire() || question.Nombre || Kana()}</p>
                {
                    exerciceDifficulté == 'Débutant' || exerciceDifficulté == 'Intermédiaire'
                        && (location.pathname.includes('/Exercices/Vocabulaire') || location.pathname.includes('/Exercices/Kanji')) ?
                        <QuestionHelpBottom $fontColor={fontColor}>
                            <span><ContextHelp>on: </ContextHelp>{question.OnPrincipalReading || question.hiragana}</span>
                            <span><ContextHelp>Kun: </ContextHelp>{question.KunPrincipalReading}</span>
                        </QuestionHelpBottom>
                        : null
                }
            </Container>
        </QuestionContainer>
    );
}

Question.propTypes = {
    question: PropTypes.shape({
        id: PropTypes.string.isRequired,
        Kanji: PropTypes.string,
        Katakana: PropTypes.string,
        Hiragana: PropTypes.string,
        kanji: PropTypes.string,
        Nombre: PropTypes.string,
        hiragana: PropTypes.string,
        Handakuten: PropTypes.string,
        Dakuten: PropTypes.string,
        Type: PropTypes.string,
        Nom: PropTypes.string,
        Romaji: PropTypes.string,
        KunPrincipalReadingRomaji: PropTypes.string,
        OnPrincipalReadingRomaji: PropTypes.string,
        KunPrincipalReading: PropTypes.string,
        OnPrincipalReading: PropTypes.string,
    }).isRequired,
    isCorrect: PropTypes.bool,
};