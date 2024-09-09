import Compteur from "./header/Compteur";
import AffichageKana from "./header/AffichageKana";
import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 20%;
`

export default function Header() {

  return (
    <HeaderContainer>
      <Compteur />
      {
        location.pathname === '/Exercices/Katakana' ||
        location.pathname === '/Exercices/Hiragana' ||
        location.pathname === '/Exercices/Kanji' &&
        (
          <AffichageKana />
        )}
    </HeaderContainer >
  );
}