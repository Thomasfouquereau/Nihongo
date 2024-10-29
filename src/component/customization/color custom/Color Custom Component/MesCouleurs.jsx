import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { setColor } from '../../../store';
import styled from 'styled-components';

const ColorCutomContainer = styled.div`
width: 10vw;
height: 10vw;`

const MesCouleurs = () => {
    const mesCouleurs = useSelector(state => state.colorCustom.mesCouleurs);
    const dispatch = useDispatch();
    const { color } = useSelector((state) => state.color);
    const [, setColorsState] = useState(color);

    const handleColorChange = (newColor) => () => {
        setColorsState(newColor);
        dispatch(setColor(newColor));
    };
    
    return (
        <div>
            {mesCouleurs.map((couleur, index) => (
                <ColorCutomContainer key={index} style={{ backgroundColor: couleur }} onClick={handleColorChange(couleur)}>
                </ColorCutomContainer>
            ))}
        </div>
    );
};

export default MesCouleurs;