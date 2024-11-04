import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import IconDiscordLight from '../../assets/icon-discord-mode-light.svg';
import IconDiscordDark from '../../assets/icon-discord-mode-dark.svg';
import IconInstaLight from '../../assets/icon-insta-mode-light.svg';
import IconInstaDark from '../../assets/icon-insta-mode-dark.svg';
import IconCrossWhite from '../../assets/icon-cross-white.svg';

const FooterStyle = styled.footer`
    position: fixed;
    bottom: -20vw;
    width: 100%;
    transition: ease-in-out 0.42s, 0.58s, 1s;
    z-index: 200;
    @media screen and (max-width: 560px) {
        bottom: -100vw;
    }
`

const FooterButton = styled.button`
    background-color: ${(props) => props.$color};
    color: #F7F7F2;
    border-radius: 0.8vw 0.8vw 0 0;
    width: 10vw;
    height: 2vw;
    font-size: 1.3vw;
    margin-left: 3vw;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    z-index: 1;
    border: 0.1vw solid ${(props) => props.$bgColor};
    border-bottom: none;
    margin-bottom: -0.1vw;
    @media screen and (max-width: 560px) {
        width: 35vw;
        height: 9vw;
        font-size: 5vw;
        font-weight: 700;
        border-radius: 1.5vw 1.5vw 0 0;
    }
    &:hover {
        transform: scaleX(1.05);
    }
`

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vw;
    min-width: 100%;   
    background-color: ${(props) => props.$mainBgColor};
    gap: 0.6vw;
    z-index: 1;
    border-top: 0.1vw solid ${(props) => props.$bgColor};
    @media screen and (max-width: 560px) {
        height: 100vw;
        flex-direction: column;
    }
`

const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6vw;
    width: 90%;
    padding-top: 1vw;
    padding-bottom: 1vw;
    padding-left: 1.5vw;
    padding-right: 1.5vw;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    @media screen and (max-width: 560px) {
        flex-direction: column;
        padding-top: 3vw;
        padding-bottom: 3vw;
        padding-left: 3.5vw;
        padding-right: 3.5vw;
        border-radius: 1.5vw;
        gap: 1.5vw;
    }
`

const FooterLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.6vw;
    height: 12vw;
    min-width:25%;
    @media screen and (max-width: 560px) {
        width: 100%;
        height: 30vw;
        gap: 1.5vw;
    }
    div{
        display: flex;
        gap: 0.6vw;
        width: 100%;
        height: 25%;
        @media screen and (max-width: 560px) {
            height: 35%;
            gap: 1.5vw;
        }
        button{
            background-color: ${(props) => props.$color};
            color: #F7F7F2;
            border: none;
            border-radius: 0.5vw;
            font-size: 1.2vw;
            width: 33%;
            height: 100%;
            transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
            will-change: transform;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover {
                transform: scale(1.1);
            }
            @media screen and (max-width: 560px) {
                font-size: 4vw;
                border-radius: 1.5vw;
            }
            img{
                width: 3vw;
                height: 3vw;
                @media screen and (max-width: 560px) {
                    width: 9vw;
                    height: 9vw;
                }
            }
        }
        a{
            background-color: ${(props) => props.$mainBgColor};
            color: ${(props) => props.$fontColor};
            border: none;
            border-radius: 0.5vw;
            font-size: 1.2vw;
            width: 33%;
            height: 100%;
            transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
            will-change: transform;
            @media screen and (max-width: 560px) {
                border-radius: 1.5vw;
            }
            &:hover {
                transform: scale(1.1);
            }
            img{
                width: 1.5vw;
                height: 2vw;
                @media screen and (max-width: 560px) {
                    width: 5vw;
                    height: 5vw;
                }
            }
        }
    }
    a{
        background-color: ${(props) => props.$mainBgColor};
        color: ${(props) => props.$fontColor};
        border: none;
        border-radius: 0.5vw;
        font-size: 1.2vw;
        height: 75%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
        will-change: transform;
        @media screen and (max-width: 560px) {
            font-size: 5vw;
            font-weight: 700;
            border-radius: 1.5vw;
        }
        &:hover {
            transform: scale(1.04);
        }
    }
`

const FooterMiddle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.6vw;
    height: 12vw;
    min-width: 50%;
    @media screen and (max-width: 560px) {
        width: 100%;
        height: 25vw;
        gap: 1.5vw;
    }
    a{
        background-color: ${(props) => props.$mainBgColor};
        color: ${(props) => props.$fontColor};
        border: none;
        border-radius: 0.5vw;
        font-size: 1.2vw;
        height: 48%;
        width: 49%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
        will-change: transform;
        &:hover {
            transform: scale(1.04);
        }
        @media screen and (max-width: 560px) {
            font-size: 4vw;
            width: 49%;
            height: 47%;
            border-radius: 1.5vw;
            font-weight: 700;
        }
    }
`

const FooterRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12vw;
    min-width: 25%;
    @media screen and (max-width: 560px) {
        width: 100%;
        height: 25vw;
    }
    a{
        background-color: ${(props) => props.$mainBgColor};
        color: ${(props) => props.$fontColor};
        border: none;
        border-radius: 0.5vw;
        font-size: 1.2vw;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
        will-change: transform;
        &:hover {
            transform: scale(1.04);
        }
        @media screen and (max-width: 560px) {
            font-size: 5vw;
            font-weight: 700;
            border-radius: 1.5vw;
        }
    }
`

export default function Footer() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const [showFooter, setShowFooter] = useState(false);
    const activeMode = localStorage.getItem('mode') || 'light';

    const handleClick = () => {
        setShowFooter(!showFooter);
        if (showFooter) {
            if (window.innerWidth < 560) {
                document.querySelector('footer').style.bottom = '-100vw';
            } else {
                document.querySelector('footer').style.bottom = '-20vw';
            }
        } else {
            document.querySelector('footer').style.bottom = '0';
        }
    }

    return (
        <FooterStyle $fontColor={fontColor} $mainBgColor={mainBgColor}>
            <FooterButton onClick={handleClick} $color={color} $bgColor={bgColor}>Footer</FooterButton>
            <FooterContainer $mainBgColor={mainBgColor} $bgColor={bgColor}>
                <ContentContainer $bgColor={bgColor}>
                    <FooterLeft $color={color} $fontColor={fontColor} $mainBgColor={mainBgColor}>
                        <div>
                            <button onClick={handleClick}>
                                <img src={IconCrossWhite} alt='icon Cross' />
                            </button>
                            <Link><img src={activeMode === 'light' ? IconDiscordLight : IconDiscordDark} alt='icon Discord' /> </Link>
                            <Link> <img src={activeMode === 'light' ? IconInstaLight : IconInstaDark} alt='icon Insta' /> </Link>
                        </div>
                        <Link>Politique de Confidentialité</Link>
                    </FooterLeft>
                    <FooterMiddle $fontColor={fontColor} $mainBgColor={mainBgColor}>
                        <Link>Contact</Link>
                        <Link>Contribuer</Link>
                        <Link>À propos</Link>
                        <Link>Plan du site</Link>
                    </FooterMiddle>
                    <FooterRight $fontColor={fontColor} $mainBgColor={mainBgColor}>
                        <Link>Termes de Service</Link>
                    </FooterRight>
                </ContentContainer>
            </FooterContainer>
        </FooterStyle>
    );
}