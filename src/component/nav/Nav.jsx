import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import NavMenu from './nav menu/NavMenu';
import Horloge from './horloge/Horloge';
import NavButton from './nav menu/NavButton';
import HomeIcon from '../../svg/HomeIcon';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 3vw;
    top: 6vw;
    gap: 1vw;
    @media screen and (max-width: 560px) {
        position: fixed;
        width:  ${({ $clicked }) => ($clicked ? '100%' : '0')};
        height: ${({ $clicked }) => ($clicked ? '100vh' : '0')};
        align-items: center;
        justify-content: center;
        right: 0;
        top: 0;
        z-index: 100;
        &:before {
            content: ${({ $clicked }) => ($clicked ? '""' : 'none')};
            position: fixed;
            width: 100%;
            height: 100vh;
            background-color: ${(props) => props.$mainBgColor };
            z-index: -1;
        }
    }
`;

const NavHomeMobile = styled.div`
    display: none;
    @media screen and (max-width: 560px) {
        position: absolute;
        bottom: 2vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        height: 9vh;
        padding: 3vw;
        border-radius: 4vw;
        gap: 1.5vw;
        background-color: ${(props) => props.$bgColor};
    }
`;

const NavHomeMobileContainer = styled(Link)`
    @media screen and (max-width: 560px) {
        display: flex;
        isplay: flex;
        align-items: center;
        justify-content: space-around;
        background-color: ${(props) => props.$mainBgColor};
        width: 70%;
        height: 100%;
        text-align: right;
        border-radius: 2vw;
        cursor: pointer;
    }
`

const NavHomeMobileText = styled.div`
     @media screen and (max-width: 560px) {
        color: ${(props) => props.$fontColor};
        font-size: 3.7vw;
     }
`

export default function Nav() {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const { color } = useSelector((state) => state.color);
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const handleButtonClick = () => {
        setIsButtonClicked(!isButtonClicked);
    };

    const handleLinkClick = () => {
        setIsButtonClicked(false);  
    };

    return (
        <Container $clicked={isButtonClicked ? "true" : undefined} $mainBgColor={mainBgColor}>
            <NavMenu isButtonClicked={isButtonClicked} onLinkClick={handleLinkClick} />
            <Horloge />
            <NavHomeMobile $bgColor={bgColor}>
                <NavHomeMobileContainer $mainBgColor={mainBgColor} to='/' onClick={handleButtonClick}>
                    <HomeIcon width='12vw' height='12vw' color={color} mainBgColor={mainBgColor} />
                    <NavHomeMobileText $fontColor={fontColor}>
                        <p>サイトホーム</p>
                        <p>Accueil du site</p>
                    </NavHomeMobileText>
                </NavHomeMobileContainer>
                <NavButton onButtonClick={handleButtonClick} />
            </NavHomeMobile>
        </Container>
    );
}