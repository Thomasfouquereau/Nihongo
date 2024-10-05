import './App.css';
import { useLocation, Routes, Route } from 'react-router-dom';
import Nav from './component/nav/Nav';
import Custome from './component/customization/Custome';
import BodyColorChanger from './component/customization/mode/BodyColorChanger';
import Home from './component/main/home/Home';
import Kanji from './component/main/kanji/Kanji';
import Vocabulaire from './component/main/vocabulaire/Vocabulaire';
import Katakana from './component/main/katakana/Katakana';
import Hiragana from './component/main/hiragana/Hiragana';
import Nombres from './component/main/nombres/Nombres';
import Dictionnaire from './component/main/dictionnaire/Dictionnaire';
import ChoisirSes from './component/main/page componet/paramètres d exercices/ChoisirSes';
import Exercices from './component/main/exercices/Exercices';
import Error404 from './component/main/404/error404';
import ColorCustome from './component/customization/color custome/ColorCustome';
import ProfileApercu from './component/profile/ProfileApercu';
import MessageDeBienvenueA from './component/notification/message de bienvenue/MessageDeBienvenueA';
import Profile from './component/profile/profile';

function App() {
    const location = useLocation();
    const shouldShowNav = !location.pathname.startsWith('/choisir-ses/') && !location.pathname.startsWith('/Exercices/') && !location.pathname.startsWith('/Profile');
    const shouldShowHeader = !location.pathname.startsWith('/Exercices/');
    const shouldShowProfileApercu = !location.pathname.startsWith('/Profile') && !location.pathname.startsWith('/Exercices/');
    const userName = localStorage.getItem('userName');
    const showMessage = !userName;

    return (
        <div>
            {shouldShowNav && <Nav />}
            {shouldShowHeader && <BodyColorChanger />}
            {shouldShowHeader && <Custome />}
            {shouldShowProfileApercu && <ProfileApercu />}
            {showMessage && <MessageDeBienvenueA />}
            <Routes location={location}>
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
                <Route path="*" element={<Error404 />} />
                <Route path="/Profile" element={<Profile />} />
            </Routes>
        </div>
    );
}


export default App;