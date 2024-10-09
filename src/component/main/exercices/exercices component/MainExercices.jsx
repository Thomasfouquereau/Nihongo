import LogiqueExercices from "./logique exercices/LogiqueExercices";
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ProgressBar from '../exercices component/autre component/ProgressBar';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vw;
    border-radius: 0.8vw;
    width: 78%;
    min-height: 80%;
    position: relative;
    @media screen and (max-width: 560px){
        width: 90%;
        gap: 1.5vw;
    }
`;

const ProgressBarContainer = styled.div`
    z-index: -1;
    display: flex;
    justify-content: space-between;
    gap: 1vw;
    position: absolute;
    top: 0;
    width: 94vw;
    left: 50%;
    transform: translateX(-50%);
    @media screen and (max-width: 560px){
        display: none;
    }
`;

export default function Main() {
  const { bgColor } = useSelector((state) => state.mode);

  return (
    <MainContainer $bgColor={bgColor}>
        <LogiqueExercices />
        <ProgressBarContainer>
            <ProgressBar />
            <ProgressBar />
        </ProgressBarContainer>
    </MainContainer>
  );
}