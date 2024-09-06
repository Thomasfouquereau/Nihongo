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
    color: ${(props) => props.$fontColor};
    background-color: ${(props) => props.$mainBgColor};
    border-radius: 0.8vw;
`;

export default function Question({ question }) {
    console.log(question);
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);

    function vocabulaire(){
        if (question.kanji === ""){
            return question.hiragana;
        } else {
            return question.kanji;
        }
    }

    return (
        <QuestionContainer $mainBgColor={mainBgColor} $bgColor={bgColor} $fontColor={fontColor}>
            <p>{question.Kanji || question.Katakana || question.Hiragana || vocabulaire() || question.Nombre  }</p>
        </QuestionContainer>
    );
}

Question.propTypes = {
    question: PropTypes.shape({
        Kanji: PropTypes.string,
        Katakana: PropTypes.string,
        Hiragana: PropTypes.string,
        kanji: PropTypes.string,
        Nombre: PropTypes.string,
        hiragana: PropTypes.string,
    }).isRequired,
};