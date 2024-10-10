import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const FooterStyle = styled.footer`
    position: fixed;
    bottom: -20vw;
    width: 100%;
    transition: ease-in-out 0.42s, 0.58s, 1s;
    z-index: 2;
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
    border: 0.1vw solid #F7F7F2;
    border-bottom: none;
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
`

const FooterLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.6vw;
    height: 12vw;
    min-width:25%;
    div{
        display: flex;
        gap: 0.6vw;
        width: 100%;
        height: 25%;
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
            &:hover {
                transform: scale(1.1);
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
            &:hover {
                transform: scale(1.1);
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
    }
`

const FooterRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12vw;
    min-width: 25%;
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
    }
`

export default function Footer() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const [showFooter, setShowFooter] = useState(false);

    const handleClick = () => {
        setShowFooter(!showFooter);
        if (showFooter) {
            document.querySelector('footer').style.bottom = '-20vw';
        } else {
            document.querySelector('footer').style.bottom = '0';
        }
    }

    return (
        <FooterStyle $fontColor={fontColor} $mainBgColor={mainBgColor}>
            <FooterButton onClick={handleClick} $color={color}>Footer</FooterButton>
            <FooterContainer $mainBgColor={mainBgColor} $bgColor={bgColor}>
                <ContentContainer $bgColor={bgColor}>
                    <FooterLeft $color={color} $fontColor={fontColor} $mainBgColor={mainBgColor}>
                        <div>
                            <button onClick={handleClick}>close</button>
                            <Link></Link>
                            <Link></Link>
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