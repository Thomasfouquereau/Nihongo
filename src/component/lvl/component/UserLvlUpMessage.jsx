import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ArrowIcon from '../../../svg/ArrowIcon';

const Container = styled.div`
    position: absolute;
    background-color: #929291dd;
    top: -1vw;
    left: -3vw;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    display: ${props => props.$display};
`;

const UserLvlMessageContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    width: 40vw;
    height: 30vw;
    background-color: ${props => props.$bgColor};
    border-radius: 0.8vw;
    padding: 1vw;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.$mainBgColor};
    width: 100%;
    height: 100%;
    border-radius: 0.5vw;
    justify-content: space-around;
    align-items: center;
    p {
        color: ${props => props.$fontColor};
        font-size: 2vw;
        font-weight: 700;
        text-align: center;
        margin-bottom: 1vw;
        padding: 0.5vw;
    }
`;

const LevelContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    p {
        color: ${props => props.$fontColor};
        font-size: 4vw;
        font-weight: 700;
        text-align: center;
        margin-bottom: 1vw;
        font-style: italic;
    }
    svg {
        rotate: -90deg;
        margin-top: -1vw;
    }
`;

export default function UserLvlMessage() {
    const { bgColor, mainBgColor, fontColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

    const lvlUp = useSelector((state) => state.lvlUp.userLvlUp);

    const [displayMessage, setDisplayMessage] = useState('none');

    useEffect(() => {
        if (lvlUp === true) {
            setDisplayMessage('flex');
            const timer = setTimeout(() => {
                setDisplayMessage('none');
            }, 3000);
            return () => clearTimeout(timer);
        } 
    }, [lvlUp]);

    const lvl = useSelector((state) => state.lvl.userLvL);
    const lvlBefore = lvl - 1;

    return (
        <Container  $display={displayMessage}>
            <UserLvlMessageContainer $color={color} $bgColor={bgColor}>
                <InfoContainer $mainBgColor={mainBgColor} $fontColor={fontColor}>
                    <p>Votre niveau principal vient d&apos;augmenter</p>
                    <div></div>
                    <LevelContainer>
                        <p>lvl {lvlBefore}</p>
                        <ArrowIcon color={color} width="4vw" height="5vw" />
                        <p>lvl {lvl}</p>
                    </LevelContainer>
                </InfoContainer>
            </UserLvlMessageContainer>
        </Container>
    );
}