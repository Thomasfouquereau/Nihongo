import Header from '../page componet/header';
import HeaderDictionnaireComponent from '../page componet/HeaderDictionnaireComponent';
import styled from 'styled-components';
import Difficulte from '../page componet/paramètres d exercices/Difficulte';
import ModeDeJeu from '../page componet/paramètres d exercices/ModeDeJeu';
import NombreDeQuestion from '../page componet/paramètres d exercices/NombreDeQuestion';
import Recapitulatif from '../page componet/paramètres d exercices/Recapitulatif';
import TypeDeKana from '../page componet/paramètres d exercices/TypeDeKana';
import PrereglageExercices from '../page componet/paramètres d exercices/PrereglageExercices';

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

export default function Katakana() {
    return (
        <HeaderPage>
            <Header />
            <HeaderDictionnaireComponent />
            <PrereglageExercices />
            <Difficulte />
            <TypeDeKana />
            <NombreDeQuestion />
            <ModeDeJeu />
            <Recapitulatif />
        </HeaderPage>
    );
}