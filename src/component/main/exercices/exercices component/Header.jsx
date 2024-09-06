import Compteur from "./header/Compteur";
import AffichageKana from "./header/AffichageKana";

export default function Header() {

  return (
    <div>
      <Compteur />
      {
        location.pathname === '/Exercices/Katakana' ||
        location.pathname === '/Exercices/Hiragana' ||
        location.pathname === '/Exercices/Kanji' &&
        (
          <AffichageKana />
        )}
    </div >
  );
}