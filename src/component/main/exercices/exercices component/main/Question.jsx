import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

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

export default function Question({ question , isCorrect }) {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);

    function vocabulaire(){
        if (question.kanji === ""){
            return question.hiragana;
        } else {
            return question.kanji;
        }
    }

    return (
        <QuestionContainer key={question.id} $mainBgColor={mainBgColor} $bgColor={bgColor} $fontColor={fontColor} $isCorrect={isCorrect}>
            <p>{question.Kanji || question.Katakana || question.Hiragana || vocabulaire() || question.Nombre}</p>
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
    }).isRequired,
    isCorrect: PropTypes.bool,
};