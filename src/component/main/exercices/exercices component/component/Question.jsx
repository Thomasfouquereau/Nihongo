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
    div{
        position: relative;
        width: 50%;
        height: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        @media screen and (max-width: 560px){
            width: 70%;
            height: 65%;
            transform: translateY(3.7vw);
        }
        span{
            font-size: 2.5vw;
            position: absolute;
            color: ${(props) => props.$fontColor};
            @media screen and (max-width: 560px){
                font-size: 6vw;
            }
        }
        span:nth-child(1){
            top: 0;
            left: 0;
        }
        span:nth-child(2){
            bottom: 0;
            right: 0;
        }
        span:nth-child(3){
            bottom: 0;
            right: 0;
        }
    }
    
`;

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

    function hiragana() {
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
            <div>
                {
                    exerciceDifficulté === 'Débutant'
                        && (location.pathname.includes('/Exercices/Vocabulaire') || location.pathname.includes('/Exercices/Kanji')) ?
                        <span>{question.OnPrincipalReadingRomaji || question.KunPrincipalReadingRomaji || question.Romaji}</span>
                        : null
                }
                <p>{question.Kanji || vocabulaire() || question.Nombre || hiragana()}</p>
                {
                    exerciceDifficulté == 'Débutant' || exerciceDifficulté == 'Intermédiaire'
                        && (location.pathname.includes('/Exercices/Vocabulaire') || location.pathname.includes('/Exercices/Kanji')) ?
                        <span>{question.KunPrincipalReading || question.OnPrincipalReadingRomaji || question.hiragana}</span>
                        : null
                }
            </div>
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