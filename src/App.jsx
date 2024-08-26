import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './component/main/home/Home';
import Kanji from './component/main/kanji/Kanji';
import ColorCustome from './component/customization/color custome/ColorCustome';

function App() {

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kanji" element={<Kanji />} />
      <Route path="/color" element={<ColorCustome />} />
    </Routes>

  )
}

export default App
