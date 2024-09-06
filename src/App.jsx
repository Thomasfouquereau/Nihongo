import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import ColorCustome from './component/customization/color custome/ColorCustome';
import Home from './component/main/home/Home';
import Kanji from './component/main/kanji/Kanji';
import Vocabulaire from './component/main/vocabulaire/Vocabulaire';
import Katakana from './component/main/katakana/Katakana';
import Hiragana from './component/main/hiragana/Hiragana';
import Nombres from './component/main/nombres/Nombres';
import Dictionnaire from './component/main/dictionnaire/Dictionnaire';
import ChoisirSes from './component/main/page componet/paramètres d exercices/ChoisirSes';
import Nav from './component/nav/Nav';
import Exercices from './component/main/exercices/Exercices';

function App() {
    const location = useLocation();
    const shouldShowNav = !location.pathname.startsWith('/choisir-ses/') || !location.pathname.startsWith('/Exercices/');

    return (
        <div className="App">
            {shouldShowNav && <Nav />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/kanji" element={<Kanji />} />
                <Route path="/vocabulaire" element={<Vocabulaire />} />
                <Route path="/katakana" element={<Katakana />} />
                <Route path="/hiragana" element={<Hiragana />} />
                <Route path="/nombres" element={<Nombres />} />
                <Route path="/dictionnaire/*" element={<Dictionnaire />} />
                <Route path="/choisir-ses/*" element={<ChoisirSes />} />
                <Route path="/color" element={<ColorCustome />} />
                <Route path="/exercices/*" element={<Exercices />} />
            </Routes>
        </div>
    );
}

export default App;