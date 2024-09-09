import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CompteurContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5vw;
    width: 25%;
    height: calc(100% - 2vw);
    font-size: 2vw;
    border-radius: 0.8vw;
    background-color: ${(props) => props.$bgColor};
    color: ${(props) => props.$fontColor};
    padding: 1vw;
    p{
        background-color: ${(props) => props.$mainBgColor};
        width: 100%;
        height: 100%;
        border-radius: 0.6vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p:nth-child(1){
        width: 30%;
        color: #68cf68;
    }
    p:nth-child(2){
        width: 40%;
    }
    p:nth-child(3){
        width: 30%;
        color: #FF6767;
    }
`;

export default function Compteur() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const totalfaute = useSelector((state) => state.exercice.totalfaute);
    const totalreussite = useSelector((state) => state.exercice.totalreussite);
    const questionMax = useSelector((state) => state.parametersExercice.exerciceNumber);
    const questionActuelle = totalreussite + totalfaute;

    return (
        <CompteurContainer $mainBgColor={mainBgColor} $bgColor={bgColor} $fontColor={fontColor}>
            <p>{totalreussite}</p>
            <p>{questionActuelle}/{questionMax}</p>
            <p>{totalfaute}</p>
        </CompteurContainer>
    );
}