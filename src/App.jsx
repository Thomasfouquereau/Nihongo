import './App.css';
import { useLocation } from 'react-router-dom';
import Nav from './component/nav/Nav';
import Custome from './component/customization/Custome';
import BodyColorChanger from './component/BodyColorChanger';


function App() {
    const location = useLocation();
    const shouldShowNav = !location.pathname.startsWith('/choisir-ses/') && !location.pathname.startsWith('/Exercices/');
    const shouldShowHeader = !location.pathname.startsWith('/Exercices/');

    return (
        <div className="App">
            {shouldShowNav && <Nav />}
            {shouldShowHeader && <BodyColorChanger />}
            {shouldShowHeader && <Custome />}
        </div>
    );
}

export default App;