import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ReponseContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5vw;
    border-radius: 0.8vw;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 560px){
        gap: 1.5vw;
        flex-wrap: wrap;
        height: 40%;
    }
`;

const Button = styled.button`
    border-radius: 0.8vw;
    color: ${(props) => props.$fontColor};
    background-color: ${(props) => {
        if (props.$isAnswered) {
            if (props.$isCorrect) {
                return '#60CF60';
            } else if (props.$isSelected) {
                return '#FF6767';
            }
        }
        return props.$mainBgColor;
    }};    cursor: pointer;
    height: 100%;
    width: 100%;
    font-size: 1.7vw;
    font-weight: 600;
    text-align: center;
    text-transform: capitalize;
    padding-left: 1vw;
    padding-right: 1vw;
    will-change: transform;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
    &:hover {
        transform: scale(1.03);
    }
    @media screen and (max-width: 560px){
        border-radius: 3vw;
        width: 49%;
        height: 48%;
        font-size: 6vw;
        padding:0;
    }
`;

export default function Reponse({ question, options, onAnswer, buttonDisabled }) {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const [userAnswer, setUserAnswer] = useState('');
    const [answered, setAnswered] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        setAnswered(false);
        setSelectedOption(null);
    }, [question]);

    const handleOptionClick = (option) => {
        setUserAnswer(option);
        const isCorrect = option === (question.Meaning || question.Romaji || question.francais);
        setAnswered(true);
        setSelectedOption(option);
        onAnswer(isCorrect);
    };

    const handleInputChange = (e) => {
        setUserAnswer(e.target.value);
    };

    return (
        <ReponseContainer key={question.id} $mainBgColor={mainBgColor} $bgColor={bgColor} $fontColor={fontColor}>
            {options.length > 0 ? (
                options.map((option, index) => (
                    <Button
                        $fontColor={fontColor}
                        $mainBgColor={mainBgColor}
                        $bgColor={bgColor}
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        $isCorrect={option === (question.Meaning || question.Romaji || question.francais)}
                        $isAnswered={answered}
                        $isSelected={option === selectedOption}
                        disabled={buttonDisabled}
                    >
                        {option}
                    </Button>
                ))
            ) : (
                <input type="text" value={userAnswer} onChange={handleInputChange} />
            )}
        </ReponseContainer>
    );
}

Reponse.propTypes = {
    question: PropTypes.shape({
        id: PropTypes.string.isRequired,
        Meaning: PropTypes.string,
        Romaji: PropTypes.string,
        francais: PropTypes.string,
    }).isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onAnswer: PropTypes.func.isRequired,
    buttonDisabled: PropTypes.bool.isRequired,
};