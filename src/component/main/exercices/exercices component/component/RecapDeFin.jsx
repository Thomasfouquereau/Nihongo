import { useState } from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import RefreshIcon from "../../../../../svg/RefreshIcon";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.$mainBgColor};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    gap: 1vw;
    @media screen and (max-width: 560px){
        gap: 3vw;
    }
`;

const Parent = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0.6vw;
    grid-row-gap: 0.6vw;
    width: 90%;
    height: 70%;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    padding: 1vw;
    @media screen {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(6, 1fr);
        grid-column-gap: 1.5vw;
        grid-row-gap: 1.5vw;
        padding: 3vw;
        height: 80%;
        border-radius: 4vw;
    }
`;

const DificulteContainer = styled.div`
    grid-area: 1 / 1 / 3 / 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.$fontColor};
    background-color: ${(props) => props.$mainBgColor};
    border-radius: 0.6vw;
    padding: 1vw;
    font-size: 2vw;
    @media screen and (max-width: 560px){
        grid-area: 1 / 1 / 2 / 3;
        border-radius: 3vw;
        font-size: 7vw;
    }
    :first-child{
        border-radius: 0.6vw 0 0 0.6vw;
        height: 30%;
        font-weight: 500;
        @media screen and (max-width: 560px){
            height: 40%;
        }
    }
    :last-child{
        background-color: ${(props) => props.$color};
        color: #F7F7F2;
        border-radius: 0.6vw;
        width: 90%;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 560px){
            height: 50%;
            border-radius: 3vw;
            font-size: 6vw;
        }
    }
`;

const NombreDeQuestionsContainer = styled.div`
    grid-area: 1 / 3 / 2 / 6;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.$fontColor};
    background-color: ${(props) => props.$mainBgColor};
    border-radius: 0.6vw;
    padding: 0.6vw;
    font-size: 2vw;
    @media screen and (max-width: 560px){
        grid-area: 6 / 1 / 7 / 3;   
        border-radius: 3vw;
        font-size: 7vw;
        flex-direction: column;
    }
    :first-child{
        border-radius: 0.6vw 0 0 0.6vw;
        width: 60%;
        font-weight: 500;
        text-align: center;
        @media screen and (max-width: 560px){
            height: 40%;
        }
    }
    :last-child{
        background-color: ${(props) => props.$color};
        color: #F7F7F2;
        border-radius: 0.6vw;
        width: 30%;
        height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 560px){
            height: 50%;
            border-radius: 3vw;
            font-size: 6vw;
            width: 90%;
        }
    }
`;

const ModeContainer = styled.div`
    grid-area: 1 / 6 / 3 / 8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.$fontColor};
    background-color: ${(props) => props.$mainBgColor};
    border-radius:  0.6vw;
    padding: 1vw;
    font-size: 2vw;
    @media screen {
        grid-area: 5 / 1 / 6 / 3;
        border-radius: 3vw;
        font-size: 7vw;
    }
    :first-child{
        border-radius: 0.6vw 0 0 0.6vw;
        height: 30%;
        font-weight: 500;
        @media screen and (max-width: 560px){
            height: 40%;
        }
    }
    :last-child{
        background-color: ${(props) => props.$color};
        color: #F7F7F2;
        border-radius: 0.6vw;
        width: 90%;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 560px){
            height: 50%;
            border-radius: 3vw;
            font-size: 6vw;
        }
    }
`;

const RecapErreurContainer = styled.div`
    grid-area: 3 / 1 / 5 / 3;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.$fontColor};
    background-color: ${(props) => props.$mainBgColor};
    border-radius: 0.6vw 0.6vw 0 0.6vw;
    width: 100% ;
    height: 100%;
    @media screen and (max-width: 560px){
        display:none;   
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.6vw;
        width: 80%;
        height: 80%;
        h3{
            font-size: 3vw;
            background-color: ${(props) => props.$color};
            color: #F7F7F2;
            font-weight: 600;
            width: 100%;
            text-align: center;
            height: 40%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 0.6vw;
        }
        div{
            background-color: ${(props) => props.$color};
            color: #F7F7F2;
            width: calc(100% - 2vw);
            height: calc(60% - 2vw);
            border-radius: 0.6vw;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            gap: 0.6vw;
            padding: 1vw;
            font-size: 1.2vw;
            font-weight: 300;
            span{
                text-transform: capitalize;
                font-style: italic;
                font-weight: 800;
                margin-right: 0.5vw;
            }
        }
    }

`;

const DisplayErreurContainer = styled.div`
    grid-area: 4 / 3 / 5 / 6; 
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.$fontColor};
    background-color: ${(props) => props.$mainBgColor};
    border-radius: 0  0.6vw 0.6vw 0;
    width: calc(100% + 0.6vw);
    min-height: calc(11vw + 0.6vw);
    margin-left: -0.6vw;
    margin-top: -0.6vw;
    @media screen and (max-width: 560px){
        display:none;   
    }
    div{
        display: flex;
        flex-wrap: wrap;
        gap: 0.6vw;
        width: 94%;
        margin-left: -0.6vw;
        max-height: 75%;
        font-size: 2vw;
        color:#F7F7F2;
        font-weight: 600;
        overflow-y: scroll;
        overflow-x: hidden;
        border-radius: 0.6vw;
        border: 0.2vw solid ${(props) => props.$color};
        padding: 0.6vw;
        p{
            cursor: pointer;
            background-color: ${(props) => props.$color};
            padding: 0.3vw 1vw;
            border-radius: 0.6vw;
        }
    }
`;

const TotalErreurContainer = styled.div`
    grid-area: 3 / 6 / 4 / 8;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: ${(props) => props.$fontColor};
    background-color: ${(props) => props.$mainBgColor};
    border-radius: 0.6vw;
    height: calc(100% - 0.6vw);
    font-size: 2vw;
    @media screen and (max-width: 560px){
        grid-area: 2 / 1 / 3 / 2;
        border-radius: 3vw;
        font-size: 7vw;
        height: 100%;
    }
    :last-child{
        color: ${(props) => props.$color};
        font-weight: 600;
        font-size: 8vw;
    }
`;

const TempsContainer = styled.div`
    grid-area: 4 / 6 / 5 / 8;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$mainBgColor};
    border-radius: 0.6vw;
    height: calc(100% + 0.6vw);
    margin-top: -0.6vw;
    font-size: 4vw;
    color: ${(props) => props.$color};
    font-weight: 600;
    @media screen {
        grid-area: 2 / 2 / 3 / 3; 
        border-radius: 3vw;
        font-size: 10vw;
        height: 100%;
        margin-top: 0;
    }
    span{
        font-size: 3vw;
        @media screen and (max-width: 560px){
            font-size: 7vw;
        }
    }
`;

const MessageContainer = styled.div`
    z-index: 101;
    grid-area: 2 / 3 / 4 / 6;
    color: ${(props) => props.$fontColor};
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.6vw;
    margin-left: -0.6vw;
    padding: 0 0 0.6vw 0.6vw ;
    position: relative;
    @media screen and (max-width: 560px){
        grid-area: 3 / 1 / 5 / 3;
        border-radius: 3vw;
    }
    &::after{
        content: "";
        position: absolute;
        width: 2vw;
        height: 2vw;
        bottom: -0.6vw;
        left: -0.6vw;
        background-color: ${(props) => props.$mainBgColor};
        z-index: -2;
        @media screen and (max-width: 560px){
            width: 0vw;
            height: 0vw;
        }
    }
    &::before{
        content: "";
        position: absolute;
        width: 2vw;
        height: 2vw;
        bottom: -0;
        left: -0;
        border-radius: 0.6vw;
        background-color: ${(props) => props.$bgColor};
        z-index: -1;
        @media screen and (max-width: 560px){
            width: 0vw;
            height: 0vw;
        }
    }
    div{
        background-color: ${(props) => props.$mainBgColor};
        border-radius: 0.6vw;
        width: 100%;
        height: 100%;
        @media screen and (max-width: 560px){
            border-radius: 3vw;
        }
    }
`;

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    gap: 0.5vw;
    background-color: ${(props) => props.$bgColor};
    width: 90%;
    height: 10%;
    padding: 1vw;
    border-radius: 0.8vw;
    @media screen and (max-width: 560px){
        border-radius: 3vw;
        padding: 3vw;
        height: 8vh;
    }
    button{
        border: none;
        height: 100%;
        cursor: pointer;
        border-radius: 0.5vw;
        font-size: 1.7vw;
        @media screen and (max-width: 560px){
            font-size: 7vw;
        }
        &:hover{
            background-color: #858585;
        }
    }
    button:nth-child(1){
        background-color: ${(props) => props.$mainBgColor};
        color: ${(props) => props.$fontColor};
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 3vw;
            height: 3vw;
        }
    }
    button:nth-child(2){
        background-color: ${(props) => props.$color};
        color: #F7F7F2;
        width: 75%;
        font-weight: 600;
    }
`;

export default function RecapDeFin({ onReload }) {
    const navigate = useNavigate();
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const modeDeJeu = useSelector((state) => state.parametersExercice.exerciceModeDeJeu);
    const nombreDeQuestions = useSelector((state) => state.parametersExercice.exerciceNumber);
    const exerciceDifficulté = useSelector((state) => state.parametersExercice.exerciceDifficulté);
    const exerciceTimer = useSelector((state) => state.parametersExercice.exerciceTimer);
    const totalTimer = useSelector((state) => state.exercice.totalTimer);
    const exerciceTimerActive = useSelector((state) => state.parametersExercice.exerciceTimerActive);
    const totalfaute = useSelector((state) => state.exercice.totalfaute);
    const questionIncorrecte = useSelector((state) => state.exercice.questionsIncorrectes);
    const [hoveredQuestion, setHoveredQuestion] = useState(null);



    const formatTimer = (timer) => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        return `${formattedMinutes}:${formattedSeconds}`;
    };
    const totalTimerFormatted = formatTimer(totalTimer);

    if (!questionIncorrecte) {
        return <div>Loading...</div>; // Ou un autre message d'erreur approprié
    }

    const mobile = window.innerWidth <= 560 ? '7vw' : '2.5vw';

    return (
        <Container $mainBgColor={mainBgColor}>
            <Parent $bgColor={bgColor}>
                <DificulteContainer $mainBgColor={mainBgColor} $fontColor={fontColor} $color={color}>
                    <p>Difficulté</p>
                    <p>{exerciceDifficulté}</p>
                </DificulteContainer>
                <NombreDeQuestionsContainer $mainBgColor={mainBgColor} $fontColor={fontColor} $color={color}>
                    <p>Nombre de Kanji </p>
                    <p>{nombreDeQuestions}</p>
                </NombreDeQuestionsContainer>
                <ModeContainer $mainBgColor={mainBgColor} $fontColor={fontColor} $color={color}>
                    <p>Mode de jeu</p>
                    <p>{modeDeJeu}</p>
                </ModeContainer>
                <RecapErreurContainer $mainBgColor={mainBgColor} $fontColor={fontColor} $color={color}>
                    {hoveredQuestion && (
                        <div>
                            <h3>{hoveredQuestion.kanji || hoveredQuestion.Dakuten || hoveredQuestion.Handakuten || hoveredQuestion.hiragana || hoveredQuestion.Hiragana || hoveredQuestion.Katakana || hoveredQuestion.Kanji}</h3>
                            <div>
                                {hoveredQuestion.Romaji && (
                                    <p><span>Romaji </span> {hoveredQuestion.Romaji}</p>
                                )}
                                {hoveredQuestion.francais && (
                                    <p><span>Francais </span> {hoveredQuestion.francais}</p>
                                )}
                                {hoveredQuestion.hiragana && (
                                    <p><span>Hiragana </span> {hoveredQuestion.hiragana}</p>
                                )}
                                {hoveredQuestion.OnPrincipalReading && (
                                    <p><span>On </span> {hoveredQuestion.OnPrincipalReading}</p>
                                )}
                                {hoveredQuestion.KunPrincipalReading && (
                                    <p><span>Kun </span> {hoveredQuestion.KunPrincipalReading}</p>
                                )}
                                {hoveredQuestion.Meaning && (
                                    <p><span>Francais </span> {hoveredQuestion.Meaning}</p>
                                )}
                            </div>
                        </div>
                    )}
                </RecapErreurContainer>
                <DisplayErreurContainer $mainBgColor={mainBgColor} $fontColor={fontColor} $color={color}>
                    <div>
                        {questionIncorrecte.length > 0 ? (

                            questionIncorrecte.filter(Boolean).map((question, index) => (
                                <p
                                    key={index}
                                    onMouseEnter={() => setHoveredQuestion(question)}
                                >
                                    {question.kanji ||
                                        (question.Nom === 'Handakuten' ? question.Handakuten :
                                            (question.Nom === 'Dakuten' ? question.Dakuten :
                                                question.hiragana || question.Hiragana || question.Katakana || question.Kanji))
                                    }
                                </p>
                            ))
                        ) : (
                            <p>pas de faute</p>
                        )}
                    </div>
                </DisplayErreurContainer>
                <TotalErreurContainer $mainBgColor={mainBgColor} $fontColor={fontColor} $color={color}>
                    <p>Erreur</p>
                    <p>{totalfaute}</p>
                </TotalErreurContainer>
                <TempsContainer $mainBgColor={mainBgColor} $fontColor={fontColor} $color={color}>
                    <p>{exerciceTimerActive === false ? totalTimerFormatted : exerciceTimer}<span>s</span></p>
                </TempsContainer>
                <MessageContainer $mainBgColor={mainBgColor} $fontColor={fontColor} $color={color} $bgColor={bgColor}>
                    <div>

                    </div>
                </MessageContainer>
            </Parent>
            <FooterContainer $mainBgColor={mainBgColor} $fontColor={fontColor} $color={color} $bgColor={bgColor}>
                <button onClick={onReload}> <RefreshIcon color={color} width={mobile} height={mobile}> </RefreshIcon></button>
                <button onClick={() => { onReload(); navigate(-1); }}>Terminer</button>
            </FooterContainer>
        </Container>
    );
}

RecapDeFin.propTypes = {
    onReload: PropTypes.func.isRequired,
};