import Header from '../page componet/header';
import HeaderDictionnaireComponent from '../page componet/HeaderDictionnaireComponent';
import styled from 'styled-components';
import Difficulte from '../page componet/paramètres d exercices/difficulte';
import ModeDeJeu from '../page componet/paramètres d exercices/ModeDeJeu';
import NombreDeQuestion from '../page componet/paramètres d exercices/NombreDeQuestion';
import Recapitulatif from '../page componet/paramètres d exercices/Recapitulatif';

const HeaderPage = styled.header`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
`

export default function Hiragana() {
    return (
        <HeaderPage>
            <Header />
            <HeaderDictionnaireComponent />
            <Difficulte />
            <NombreDeQuestion />
            <ModeDeJeu />
            <Recapitulatif />
        </HeaderPage>
    );
}