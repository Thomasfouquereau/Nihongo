import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import NavMenu from './nav menu/NavMenu';
import Horloge from './horloge/Horloge';
import NavButton from './nav menu/NavButton';
import HomeIcon from '../../svg/HomeIcon';
import crossIconLight from '../../assets/icon-cross-white.svg';

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
        gap: 3vw;
        &:before {
            content: ${({ $clicked }) => ($clicked ? '""' : 'none')};
            position: fixed;
            width: 100%;
            height: 100vh;
            background-color: ${(props) => props.$mainBgColor};
            z-index: -1;
        }
    }
`;

const NavHomeMobile = styled.div`
    display: none;
    @media screen and (max-width: 560px) {
        display: ${props => props.$display};
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
    display: none;
    @media screen and (max-width: 560px) {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: ${(props) => props.$mainBgColor};
        width: 80%;
        height: 100%;
        text-align: right;
        border-radius: 2vw;
        cursor: pointer;
    }
`

const NavHomeMobileText = styled.div`
     @media screen and (max-width: 560px) {
        color: ${(props) => props.$fontColor};
        font-size: 4vw;
     }
`

const CloseButton = styled.button`
    display: none;
    @media screen and (max-width: 560px) {
        background-color: ${(props) => props.$color};
        padding: 1vw;
        border-radius: 0.5vw;
        font-size: 2.5vw;
        font-weight: 700;
        font-size: 7vw;
        padding: 3vw;
        border-radius: 3vw;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20%;
        height: 9.2vh;
    }
`

export default function Nav() {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const { color } = useSelector((state) => state.color);
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);

    const handleButtonClick = () => {
        setIsButtonClicked(!isButtonClicked);
        console.log('clicked',isButtonClicked);
    };

    const handleLinkClick = () => {
        setIsButtonClicked(false);
    };
    const displayButton = isButtonClicked === true ? 'none' : 'flex';
    const displayNavHomeMobile = isButtonClicked === true ? 'flex' : 'none';
    
    return (
        <Container $clicked={isButtonClicked ? "true" : undefined} $mainBgColor={mainBgColor}>
            <NavMenu isButtonClicked={isButtonClicked} onLinkClick={handleLinkClick} />
            <Horloge />
            <NavHomeMobile $bgColor={bgColor} $color={color} $display={displayNavHomeMobile}>
                <NavHomeMobileContainer $mainBgColor={mainBgColor} to='/' onClick={handleButtonClick}>
                    <HomeIcon width='12vw' height='12vw' color={color} mainBgColor={mainBgColor} />
                    <NavHomeMobileText $fontColor={fontColor}>
                        <p>サイトホーム</p>
                        <p>Accueil du site</p>
                    </NavHomeMobileText>
                </NavHomeMobileContainer>
                <CloseButton $bgColor={bgColor} $color={color} onClick={handleButtonClick}>
                    <img src={crossIconLight} />
                </CloseButton>
            </NavHomeMobile>
            <NavButton onButtonClick={handleButtonClick} displayButton={displayButton} />
        </Container>
    );
}