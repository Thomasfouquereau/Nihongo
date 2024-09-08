import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
`;

export default function Question({ question, isCorrect }) {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);

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
        <QuestionContainer key={question.id} $mainBgColor={mainBgColor} $bgColor={bgColor} $fontColor={fontColor} $isCorrect={isCorrect}>
            <p>{question.Kanji || vocabulaire() || question.Nombre || hiragana()}</p>
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
        Nom: PropTypes.string
    }).isRequired,
    isCorrect: PropTypes.bool,
};