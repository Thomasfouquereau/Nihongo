import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.$bgColor};
    color: ${(props) => props.$fontColor};
    max-width: 15vw;
    height: 9.7vw;
    padding: 1vw;
    border-radius: 0.8vw;
    gap: 0.5vw;
    @media screen and (max-width: 560px) {
        display: none;
    }
`;

const ButtonConatiner = styled.div`
    display: flex;
    gap: 0.5vw;
    button{
        width: 50%;
        font-size: 1.3vw;
        height: 2.5vw;
        border-radius: 0.5vw;
        border: none;
        cursor: pointer;
        color: ${(props) => props.$fontColor};
    }
`;

const Pays = styled.div`
    background-color: ${(props) => props.$mainBgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 1.3vw;
    height: 2.5vw;
    border-radius: 0.5vw;
`;

const Heure = styled.span`
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.5vw;
    background-color: ${(props) => props.$color};
    color: #F7F7F2;
    margin: 0;
    border-radius: 0.5vw;
`;

export default function Horloge() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const [pays, setPays] = useState('日本');
    const [heure, setHeure] = useState(new Date().toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo' }));

    useEffect(() => {
        const interval = setInterval(() => {
            setHeure(new Date().toLocaleTimeString(pays === 'フランス' ? 'fr-FR' : 'ja-JP', {
                timeZone: pays === 'フランス' ? 'Europe/Paris' : 'Asia/Tokyo',
                hour: '2-digit',
                minute: '2-digit'
            }));
        }, 10);
        return () => clearInterval(interval);
    }, [pays]);

    const changerPays = (nouveauPays) => {
        if (nouveauPays === 'France') {
            setPays('フランス');
        } else {
            setPays('日本');
        }
    };

    return (
        <Container $bgColor={bgColor} $fontColor={fontColor}>
            <ButtonConatiner $mainBgColor={mainBgColor} $fontColor={fontColor}>
                <button
                    onClick={() => changerPays('France')}
                    style={{ backgroundColor: pays === 'フランス' ? color : mainBgColor }}
                >
                    France
                </button>
                <button
                    onClick={() => changerPays('Japon')}
                    style={{ backgroundColor: pays === '日本' ? color : mainBgColor }}
                >
                    Japon
                </button>
            </ButtonConatiner>
            <Pays $mainBgColor={mainBgColor}>{pays}</Pays>
            <Heure $color={color} $mainBgColor={mainBgColor}>{heure}</Heure>
        </Container>
    );
}