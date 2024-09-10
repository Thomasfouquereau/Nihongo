import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    background-color: ${(props) => props.$bgColor};
    color: ${(props) => props.$fontColor};
    padding: 0.9vw;
    border-radius: 0.8vw;
    width: 15vw;
    height: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.6vw;
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
    &:hover {
        background-color: #858585;
    }
`;

const Furigana = styled.span`
    font-size: 0.8vw;
    color: ${(props) => props.$color|| '#ff0000'};
    margin: 0;
`;

const Kanji = styled.h4`
    font-size: 1.7vw;
    color: ${(props) => props.$fontColor};
    margin: 0;
`;

const Romaji = styled.span`
    font-size: 0.8vw;
    color: ${(props) => props.$fontColor};
    margin: 0;
`;

export default function NavMenu() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const {color} = useSelector((state) => state.color);

    return (
        <Nav $bgColor={bgColor}>
            <LINK $mainBgColor={mainBgColor} to="/Hiragana">
                <Furigana $color={color}>ひらがな</Furigana>
                <Kanji $fontColor={fontColor}>あ</Kanji>
                <Romaji $fontColor={fontColor}>hiragana</Romaji>
            </LINK>
            <LINK $mainBgColor={mainBgColor} to="/Katakana">
                <Furigana $color={color}>カタカナ</Furigana>
                <Kanji $fontColor={fontColor}>ア</Kanji>
                <Romaji $fontColor={fontColor}>katakana</Romaji>
            </LINK>
            <LINK $mainBgColor={mainBgColor} to="/Kanji">
                <Furigana $color={color}>かんじ</Furigana>
                <Kanji $fontColor={fontColor}>漢字</Kanji>
                <Romaji $fontColor={fontColor}>kanji</Romaji>
            </LINK>
            <LINK $mainBgColor={mainBgColor} to="/Vocabulaire">
                <Furigana $color={color}>ごい</Furigana>
                <Kanji $fontColor={fontColor}>語彙</Kanji>
                <Romaji $fontColor={fontColor}>Vocabulaire</Romaji>
            </LINK>
            <LINK $mainBgColor={mainBgColor} to="/Nombres">
                <Furigana $color={color}>ばんごう</Furigana>
                <Kanji $fontColor={fontColor}>番号</Kanji>
                <Romaji $fontColor={fontColor}>Nombres</Romaji>
            </LINK>
        </Nav>
    );
}