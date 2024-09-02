import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setColor } from '../../store';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Button = styled.button`
    width: 10vw;
    height: 10vw;
    border: 1vw solid #353535;
    border-radius: 0.8vw;
    cursor: pointer;
    margin: 1vw;
`

export default function ColorCustome() {
    const dispatch = useDispatch();
    const [color, setColorState] = useState('#F75D48'); 

    const handleColorChange = (newColor) => {
        setColorState(newColor);
        dispatch(setColor(newColor));
    };
    let navigate = useNavigate();
    return (
        <div> 
            <h1 style={{ color: color }}>ColorCustome</h1>
            <Link onClick={() => navigate(-1)}>Home</Link>
            <div>
                <Button onClick={() => handleColorChange('#F75D48')} style={{ backgroundColor: '#F75D48' }}></Button>
                <Button onClick={() => handleColorChange('#5448F7')} style={{ backgroundColor: '#5448F7' }}></Button>
                <Button onClick={() => handleColorChange('#FF0000')} style={{ backgroundColor: '#FF0000' }}></Button>
            </div>
        </div>
    );
}