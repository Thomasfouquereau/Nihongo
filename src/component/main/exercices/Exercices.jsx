import Main from './exercices component/MainExercices';
import Header from './exercices component/HeaderExercices';
import styled from 'styled-components';
import UserLvlUpMessage from '../../lvl/component/UserLvlUpMessage';


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
    @media screen and (max-width: 560px){
        max-width: 100%;
        gap: 1.5vw;
        height: 100vh;
        margin: 0;
    }
`;



export default function Exercices() {

  return (
    <ExercicesContainer>
      <UserLvlUpMessage />
      <Header />
      <Main />
    </ExercicesContainer>
  );
}