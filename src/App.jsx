import './App.css';
import { useLocation, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Nav from './component/nav/Nav';
import Custom from './component/customization/Custom';
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
import ColorCustom from './component/customization/color custom/ColorCustom';
import ProfileApercu from './component/profile/ProfileApercu';
import MessageDeBienvenueA from './component/notification/message de bienvenue/MessageDeBienvenueA';
import Profile from './component/profile/profile';
import UpdateLevels from './component/lvl/LvlUp';
import Footer from './component/footer/Footer';
import TableauDeLvl from './component/lvl/lvl page/TableauDeLvl';
import CustomNav from './component/customization/custom nav/CustomNav';
import Articles from './component/main/articles/Articles';

function App() {
    const location = useLocation();
    const shouldShowNav = !location.pathname.startsWith('/choisir-ses/') && !location.pathname.startsWith('/Exercices/') && !location.pathname.startsWith('/Profile') && !location.pathname.startsWith('/lvl/') && !location.pathname.startsWith('/custom-nav') && !location.pathname.startsWith('/color');
    const shouldShowHeader = !location.pathname.startsWith('/Exercices/');
    const shouldShowProfileApercu = !location.pathname.startsWith('/Profile') && !location.pathname.startsWith('/Exercices/') && !location.pathname.startsWith('/lvl/');
    const userName = localStorage.getItem('userName');
    const showMessage = !userName;

    // Utilisation des sélecteurs pour accéder à KanjiXp
    const userXp = useSelector((state) => state.lvl.userXp);
    const userXpToNextLvL = useSelector((state) => state.lvl.userXpToNextLvL);
    const userLvL = useSelector((state) => state.lvl.userLvL);
    const KanjiXp = useSelector((state) => state.lvl.KanjiXp);
    const KanjiXpToNextLvL = useSelector((state) => state.lvl.KanjiXpToNextLvL);
    const KanjiLvL = useSelector((state) => state.lvl.KanjiLvL);
    const HiraganaXp = useSelector((state) => state.lvl.hiraganaXp);
    const HiraganaXpToNextLvL = useSelector((state) => state.lvl.hiraganaXpToNextLvL);
    const HiraganaLvL = useSelector((state) => state.lvl.hiraganaLvL);
    const KatakanaXp = useSelector((state) => state.lvl.katakanaXp);
    const KatakanaXpToNextLvL = useSelector((state) => state.lvl.katakanaXpToNextLvL);
    const KatakanaLvL = useSelector((state) => state.lvl.katakanaLvL);
    const VocabulaireXp = useSelector((state) => state.lvl.vocabulaireXp);
    const VocabulaireXpToNextLvL = useSelector((state) => state.lvl.vocabulaireXpToNextLvL);
    const VocabulaireLvL = useSelector((state) => state.lvl.vocabulaireLvL);
    const NombreXp = useSelector((state) => state.lvl.nombreXp);
    const NombreXpToNextLvL = useSelector((state) => state.lvl.nombreXpToNextLvL);
    const NombreLvL = useSelector((state) => state.lvl.nombreLvL);

    const updateLevels = UpdateLevels();

    useEffect(() => {
        updateLevels(userXp, userXpToNextLvL, userLvL, 'user');
        updateLevels(KanjiXp, KanjiXpToNextLvL, KanjiLvL, 'kanji');
        updateLevels(HiraganaXp, HiraganaXpToNextLvL, HiraganaLvL, 'hiragana');
        updateLevels(KatakanaXp, KatakanaXpToNextLvL, KatakanaLvL, 'katakana');
        updateLevels(VocabulaireXp, VocabulaireXpToNextLvL, VocabulaireLvL, 'vocabulaire');
        updateLevels(NombreXp, NombreXpToNextLvL, NombreLvL, 'nombre');
    }, [updateLevels, userXp, userXpToNextLvL, userLvL, KanjiXp, KanjiXpToNextLvL, KanjiLvL, HiraganaXp, HiraganaXpToNextLvL, HiraganaLvL, KatakanaXp, KatakanaXpToNextLvL, KatakanaLvL, VocabulaireXp, VocabulaireXpToNextLvL, VocabulaireLvL, NombreXp, NombreXpToNextLvL, NombreLvL]);

    return (
        <div>
            {shouldShowNav && <Nav />}
            {shouldShowHeader && <BodyColorChanger />}
            {shouldShowHeader && <Custom />}
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
                <Route path="/custom-nav" element={<CustomNav />} />
                <Route path="/color" element={<ColorCustom />} />
                <Route path="/exercices/*" element={<Exercices />} />
                <Route path="*" element={<Error404 />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/lvl/*" element={<TableauDeLvl />} />
                <Route path="/articles" element={<Articles />} />
            </Routes>
            {shouldShowHeader && <Footer />}
        </div>
    );
}

export default App;

