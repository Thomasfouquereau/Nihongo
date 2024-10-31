import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MesCouleurs from './Color Custom Component/MesCouleurs';

const ColorCutomContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 8vw;
    width: 100vw;
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

export default function ColorCustom() {
    const { color } = useSelector((state) => state.color);
    const { bgColor, fontColor } = useSelector((state) => state.mode);

    let navigate = useNavigate();
    return (
        <ColorCutomContainer $fontColor={fontColor} $bgColor={bgColor}>
            <Link style={{ backgroundColor: color }} onClick={() => navigate(-1)}>Retour</Link>
            <MesCouleurs />
        </ColorCutomContainer>
    );
}