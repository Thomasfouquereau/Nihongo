import Header from '../page componet/header';
import HeaderDictionnaireComponent from '../page componet/HeaderDictionnaireComponent';
import styled from 'styled-components';
import Difficulte from '../page componet/paramètres d exercices/difficulte';
import ModeDeJeu from '../page componet/paramètres d exercices/ModeDeJeu';

const HeaderPage = styled.header`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
`

export default function Katakana() {
    return (
        <HeaderPage>
            <Header />
            <HeaderDictionnaireComponent />
            <Difficulte />
            <ModeDeJeu />
        </HeaderPage>
    );
}