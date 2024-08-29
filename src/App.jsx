import './App.css'
import { Route, Routes } from 'react-router-dom';
import ColorCustome from './component/customization/color custome/ColorCustome';
import Home from './component/main/home/Home';
import Kanji from './component/main/kanji/Kanji';
import Vocabulaire from './component/main/vocabulaire/Vocabulaire';
import Katakana from './component/main/katakana/Katakana';
import Hiragana from './component/main/hiragana/Hiragana';
import Nombres from './component/main/nombres/Nombres';
import Dictionnaire from './component/main/dictionnaire/Dictionnaire';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/color" element={<ColorCustome />} />
      <Route path="/kanji" element={<Kanji />} />
      <Route path="/hiragana" element={<Hiragana />} />
      <Route path="/Katakana" element={<Katakana />} />
      <Route path="/vocabulaire" element={<Vocabulaire />} />
      <Route path="/nombres" element={<Nombres />} />
      <Route path="/dictionnaire/*" element={<Dictionnaire />} />
    </Routes>
  )
}

export default App