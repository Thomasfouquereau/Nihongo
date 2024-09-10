import Main from './exercices component/MainExercices';
import Header from './exercices component/HeaderExercices';
import styled from 'styled-components';
import ProgressBar from './exercices component/autre component/ProgressBar';

const ExercicesContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 1vw);
    max-width: 94vw;
    margin: auto;
    gap: 1vw;
    margin-top: 1vw;
    position: relative;
`;

const ProgressBarContainer = styled.div`
  z-index: -1;
    display: flex;
    justify-content: space-between;
    gap: 1vw;
    position: absolute;
    bottom: 7.6vw;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
`;

export default function Exercices() {

  return (
    <ExercicesContainer>
      <Header />
      <Main />
      <ProgressBarContainer>
        <ProgressBar />
        <ProgressBar />
      </ProgressBarContainer>
    </ExercicesContainer>
  );
}