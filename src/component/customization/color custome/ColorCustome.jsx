import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setColor } from '../../store';

export default function ColorCustome() {
    const dispatch = useDispatch();
    const [color, setColorState] = useState('#F75D48'); // Couleur par défaut

    const handleColorChange = (newColor) => {
        console.log('Dispatching color:', newColor); // Ajoutez ce log
        setColorState(newColor);
        dispatch(setColor(newColor));
    };

    return (
        <div> 
            <h1 style={{ color: color }}>ColorCustome</h1>
            <div>
                <button onClick={() => handleColorChange('#F75D48')}>orange</button>
                <button onClick={() => handleColorChange('#5448F7')}>blue</button>
                <button onClick={() => handleColorChange('#FF0000')}>Red</button>
            </div>
        </div>
    );
}