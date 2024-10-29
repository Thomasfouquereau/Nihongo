import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setColor } from '../../store';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ColorCutomContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 8vw;
    width: 74vw;
    margin-left: 3vw;
    h1{
        font-size: 3vw;
        @media screen and (max-width: 560px) {
            font-size: 9vw;
        }
    }
    a{
        font-size: 1.5vw;
        color: #F7F7F2;
        font-weight: bold;
        border-radius: 0.8vw;
        padding: 1vw 2vw;
        cursor: pointer;
        position: absolute;
        top: 1vw;
        @media screen and (max-width: 560px) {
            top: 20vw;
            padding: 3vw 6vw;
            font-size: 4.5vw;
        }
    }
    @media screen and (max-width: 560px) {
        width: 100vw;
        margin-left: 0;
        margin-top: 40vw;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 2vw;
    width: 100%;
    @media screen and (max-width: 560px) {
        margin-top: 10vw;
    }
`

const Button = styled.button`
    width: 30%;
    height: 15vw;
    border: 1vw solid ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    cursor: pointer;
    margin: 1vw;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    &:hover{
        transform: scale(1.1);
    }
    @media screen and (max-width: 560px) {
        width: 45%;
        height: 30vw;
    }
`

export default function ColorCustom() {
    const dispatch = useDispatch();
    const { color } = useSelector((state) => state.color);
    const { bgColor, fontColor } = useSelector((state) => state.mode);
    const [, setColorsState] = useState(color);

    const handleColorChange = (newColor) => {
        setColorsState(newColor);
        dispatch(setColor(newColor));
    };

    let navigate = useNavigate();
    return (
        <ColorCutomContainer $fontColor={fontColor} $bgColor={bgColor}>
            <Link style={{ backgroundColor: color }} onClick={() => navigate(-1)}>Retour</Link>
            <h1 style={{ color: color }}>ColorCustom</h1>
            <ButtonContainer>
                <Button $bgColor={bgColor} onClick={() => handleColorChange('#F75D48')} style={{ backgroundColor: '#F75D48' }}></Button>
                <Button $bgColor={bgColor} onClick={() => handleColorChange('#5448F7')} style={{ backgroundColor: '#5448F7' }}></Button>
                <Button $bgColor={bgColor} onClick={() => handleColorChange('#FF0000')} style={{ backgroundColor: '#FF0000' }}></Button>
                <Button $bgColor={bgColor} onClick={() => handleColorChange('#42e55b')} style={{ backgroundColor: '#42e55b' }}></Button>
                <Button $bgColor={bgColor} onClick={() => handleColorChange('#1ce8c2')} style={{ backgroundColor: '#1ce8c2' }}></Button>
                <Button $bgColor={bgColor} onClick={() => handleColorChange('#FF4BC9')} style={{ backgroundColor: '#FF4BC9' }}></Button>
                <Button $bgColor={bgColor} onClick={() => handleColorChange('#48B4F7')} style={{ backgroundColor: '#48B4F7' }}></Button>
                <Button $bgColor={bgColor} onClick={() => handleColorChange('#08a2b7')} style={{ backgroundColor: '#08a2b7' }}></Button>
            </ButtonContainer>
        </ColorCutomContainer>
    );
}