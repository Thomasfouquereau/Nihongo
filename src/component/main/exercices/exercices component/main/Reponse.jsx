import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ReponseContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5vw;
    border-radius: 0.8vw;
    width: 100%;
    height: 100%;
    button{
        border-radius: 0.8vw;
        color: ${(props) => props.$fontColor};
        background-color: ${(props) => props.$mainBgColor};
        cursor: pointer;
        height: 100%;
        width: 100%;
        font-size: 1.7vw;
        text-align: center;
        text-transform: capitalize;
        padding-left: 1vw;
        padding-right: 1vw;
        &:hover {
            background-color: #858585;
        }
    }
`

export default function Reponse({ question, options, onAnswer }) {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const [userAnswer, setUserAnswer] = useState('');

    const handleOptionClick = (option) => {
        setUserAnswer(option);
        const isCorrect = option === (question.Meaning || question.Romaji || question.francais);
        onAnswer(isCorrect);
    };

    const handleInputChange = (e) => {
        setUserAnswer(e.target.value);
    };

    Reponse.propTypes = {
        question: PropTypes.shape({
            options: PropTypes.array,
            Meaning: PropTypes.string,
            Romaji: PropTypes.string,
            francais: PropTypes.string,
        }).isRequired,
        options: PropTypes.arrayOf(PropTypes.string).isRequired,
        onAnswer: PropTypes.func.isRequired,
    };

    return (
        <ReponseContainer $mainBgColor={mainBgColor} $bgColor={bgColor} $fontColor={fontColor}>
            {options.length > 0 ? (
                options.map((option, index) => (
                    <button key={index} onClick={() => handleOptionClick(option)}>
                        {option}
                    </button>
                ))
            ) : (
                <input type="text" value={userAnswer} onChange={handleInputChange} />
            )}
        </ReponseContainer>
    );
}