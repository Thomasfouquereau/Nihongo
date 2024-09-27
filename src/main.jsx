
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './component/store';
import Error404 from './component/main/404/error404';
import { Route, Routes } from 'react-router-dom';
import ColorCustome from './component/customization/color custome/ColorCustome';
import Home from './component/main/home/Home';
import Kanji from './component/main/kanji/Kanji';
import Vocabulaire from './component/main/vocabulaire/Vocabulaire';
import Katakana from './component/main/katakana/Katakana';
import Hiragana from './component/main/hiragana/Hiragana';
import Nombres from './component/main/nombres/Nombres';
import Dictionnaire from './component/main/dictionnaire/Dictionnaire';
import ChoisirSes from './component/main/page componet/paramètres d exercices/ChoisirSes';
import Exercices from './component/main/exercices/Exercices';

const basename = import.meta.env.MODE === 'production' ? '/Nihongo-V2/' : '/';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter basename={basename}>
      <App />
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
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);