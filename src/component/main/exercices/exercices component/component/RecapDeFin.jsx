import styled from "styled-components"
import { useSelector } from "react-redux"
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import RefreshIcon from "../../../../../svg/RefreshIcon"

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
`

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
`

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
    :first-child{
        border-radius: 0.6vw 0 0 0.6vw;
        height: 30%;
        font-weight: 500;
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
    }
`

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
    :first-child{
        border-radius: 0.6vw 0 0 0.6vw;
        width: 60%;
        font-weight: 500;
        text-align: center;
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
    }
`

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
    :first-child{
        border-radius: 0.6vw 0 0 0.6vw;
        height: 30%;
        font-weight: 500;
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
    }
`

const RecapErreurContainer = styled.div`
    grid-area: 3 / 1 / 5 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.$fontColor};
    background-color: ${(props) => props.$mainBgColor};
    border-radius: 0.6vw 0.6vw 0 0.6vw;
    width: calc(100% );
`

const DisplayErreurContainer = styled.div`
    grid-area: 4 / 3 / 5 / 6; 
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.$fontColor};
    background-color: ${(props) => props.$mainBgColor};
    border-radius: 0  0.6vw 0.6vw 0;
    width: calc(100% + 0.6vw);
    height: calc(100% + 0.6vw);
    margin-left: -0.6vw;
    margin-top: -0.6vw;
`

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
    :last-child{
        color: ${(props) => props.$color};
        font-weight: 600;
    }
`

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
    span{
        font-size: 3vw;
    }
`

const MessageContainer = styled.div`
    z-index: 101;
    grid-area: 2 / 3 / 4 / 6;
    color: ${(props) => props.$fontColor};
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.6vw;
    margin-left: -0.6vw;
    padding: 0 0 0.6vw 0.6vw ;
    position: relative;
    &::after{
        content: "";
        position: absolute;
        width: 2vw;
        height: 2vw;
        bottom: -0.6vw;
        left: -0.6vw;
        background-color: ${(props) => props.$mainBgColor};
        z-index: -2;
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
    }
    div{
        background-color: ${(props) => props.$mainBgColor};
        border-radius: 0.6vw;
        width: 100%;
        height: 100%;
    }
`

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
    button{
        border: none;
        height: 100%;
        cursor: pointer;
        border-radius: 0.5vw;
        font-size: 1.7vw;
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
`

export default function RecapDeFin({onReload}) {
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

    const formatTimer = (timer) => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        return `${formattedMinutes}:${formattedSeconds}`;
    };
    const totalTimerFormatted = formatTimer(totalTimer);

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
                    <p></p>
                    <div></div>
                </RecapErreurContainer>
                <DisplayErreurContainer $mainBgColor={mainBgColor} $fontColor={fontColor} $color={color}>
                    <div>

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
                <button onClick={onReload}> <RefreshIcon color={color}> </RefreshIcon></button>
                <button onClick={() => navigate(-1)}>Terminer</button>
            </FooterContainer>
        </Container>
    )
}
RecapDeFin.propTypes = {
    onReload: PropTypes.func.isRequired,
};
