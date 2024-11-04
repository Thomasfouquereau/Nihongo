import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import proptypes from 'prop-types';

const Nav = styled.nav`
    background-color: ${(props) => props.$bgColor};
    color: ${(props) => props.$fontColor};
    padding: 0.9vw;
    border-radius: 0.8vw;
    width: 15vw;
    height: 30vw;
    display: ${(props) => props.display};
    flex-direction: column;
    justify-content: space-between;
    gap: 0.6vw;
    @media screen and (max-width: 560px) {
        width: 90%;
        height: 67vh;
        padding: 3vw;
        border-radius: 4vw;
        gap: 1.5vw;
    }
`;

const LINK = styled(Link)`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.5vw;
    background-color: ${(props) => props.$mainBgColor};
    width: 100%;
    height: 20%;
    transition: background-color 0.3s;
    position: relative;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
    }
    &:hover {
        transform: scale(1.05);
    }
`;

const Furigana = styled.span`
    font-size: 0.8vw;
    color: ${(props) => props.$color};
    margin: 0;
    @media screen and (max-width: 560px) {
        font-size: 4vw;
    }
`;

const Kanji = styled.h4`
    font-size: 1.7vw;
    color: ${(props) => props.$fontColor};
    margin: 0;
    @media screen and (max-width: 560px) {
        font-size: 8vw;
    }
`;

const Romaji = styled.span`
    font-size: 0.8vw;
    color: ${(props) => props.$fontColor};
    margin: 0;
    @media screen and (max-width: 560px) {
        font-size: 4vw;
    }
`;

export default function NavMenu({ isButtonClicked, onLinkClick }) {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const [display, setDisplay] = useState('flex');
    useEffect(() => {
        if (window.innerWidth <= 560) {
            setDisplay(isButtonClicked ? 'flex' : 'none');
        } else {
            setDisplay('flex');
        }
    }, [isButtonClicked]);

    return (
        <Nav $bgColor={bgColor} display={display}>
            <LINK $mainBgColor={mainBgColor} to="/Hiragana" onClick={onLinkClick}>
                <Furigana $color={color}>ひらがな</Furigana>
                <Kanji $fontColor={fontColor}>あ</Kanji>
                <Romaji $fontColor={fontColor}>hiragana</Romaji>
            </LINK>
            <LINK $mainBgColor={mainBgColor} to="/Katakana" onClick={onLinkClick}>
                <Furigana $color={color}>カタカナ</Furigana>
                <Kanji $fontColor={fontColor}>ア</Kanji>
                <Romaji $fontColor={fontColor}>katakana</Romaji>
            </LINK>
            <LINK $mainBgColor={mainBgColor} to="/Kanji" onClick={onLinkClick}>
                <Furigana $color={color}>かんじ</Furigana>
                <Kanji $fontColor={fontColor}>漢字</Kanji>
                <Romaji $fontColor={fontColor}>kanji</Romaji>
            </LINK>
            <LINK $mainBgColor={mainBgColor} to="/Vocabulaire" onClick={onLinkClick}>
                <Furigana $color={color}>ごい</Furigana>
                <Kanji $fontColor={fontColor}>語彙</Kanji>
                <Romaji $fontColor={fontColor}>Vocabulaire</Romaji>
            </LINK>
            <LINK $mainBgColor={mainBgColor} to="/Nombres" onClick={onLinkClick}>
                <Furigana $color={color}>ばんごう</Furigana>
                <Kanji $fontColor={fontColor}>番号</Kanji>
                <Romaji $fontColor={fontColor}>Nombres</Romaji>
            </LINK>
        </Nav>
    );
}

NavMenu.propTypes = {
    isButtonClicked: proptypes.bool.isRequired,
    onLinkClick: proptypes.func.isRequired,
};