import Header from '../page componet/Header';
import HeaderDictionnaireComponent from '../page componet/HeaderDictionnaireComponent';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// import Difficulte from '../page componet/paramètres d exercices/Difficulte';
// import ModeDeJeu from '../page componet/paramètres d exercices/ModeDeJeu';
// import NombreDeQuestion from '../page componet/paramètres d exercices/NombreDeQuestion';
// import Recapitulatif from '../page componet/paramètres d exercices/Recapitulatif';
// import PrereglageExercices from '../page componet/paramètres d exercices/PrereglageExercices';

const HeaderPage = styled.header`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
    margin-bottom: 6vw;
    @media screen and (max-width: 560px) {
        margin-top: 20vw;
        margin-left: 0vw;
        align-items: center;
        gap: 3vw;
    }
`

const Message = styled.p`
    font-size: 1.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.$bgColor};
    padding: 1vw;
    @media screen and (max-width: 560px) {
        font-size: 5vw;
        padding: 4vw;
        text-align: center;
        margin-bottom: 15vw;
    }
`

export default function Nombres() {
    const { bgColor } = useSelector((state) => state.mode);
    return (
        <HeaderPage>
            <Header />
            <HeaderDictionnaireComponent />
            <Message $bgColor={bgColor}>Les exercices pour les nombres ne sont pas encore disponibles. Restez à l&apos;écoute pour plus d&apos;informations</Message>
        </HeaderPage>
    );
}