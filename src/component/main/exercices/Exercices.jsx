import Main from './exercices component/MainExercices';
import Header from './exercices component/HeaderExercices';
import styled from 'styled-components';

const ExercicesContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    max-width: 94vw;
    margin: auto;
`;

export default function Exercices() {

    return (
      <ExercicesContainer>
        <Header />
        <Main />
      </ExercicesContainer>
    );
}