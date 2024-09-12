import Header from '../page componet/header';
import HeaderDictionnaireComponent from '../page componet/HeaderDictionnaireComponent';
import styled from 'styled-components';
import Difficulte from '../page componet/paramètres d exercices/Difficulte';
import ModeDeJeu from '../page componet/paramètres d exercices/ModeDeJeu';
import NombreDeQuestion from '../page componet/paramètres d exercices/NombreDeQuestion';
import Recapitulatif from '../page componet/paramètres d exercices/Recapitulatif';
import TypeDeKana from '../page componet/paramètres d exercices/TypeDeKana';

const HeaderPage = styled.header`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
    margin-bottom: 6vw;
`

export default function Hiragana() {
    return (
        <HeaderPage>
            <Header />
            <HeaderDictionnaireComponent />
            <Difficulte />
            <TypeDeKana />
            <NombreDeQuestion />
            <ModeDeJeu />
            <Recapitulatif />
        </HeaderPage>
    );
}