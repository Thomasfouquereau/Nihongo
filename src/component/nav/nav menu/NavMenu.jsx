import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LINK = styled(Link)`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Furigana = styled.span`
    font-size: 1rem;
    color: ${(props) => props.$color|| '#ff0000'};
`;

const Kanji = styled.h4`
    font-size: 1.5rem;
`;

const Romaji = styled.span`
    font-size: 0.5rem;
`;

const Nav = styled.nav`
    background-color: ${(props) => props.$bgColor};
    color: ${(props) => props.$fontColor};
`;

export default function NavMenu() {
    const { bgColor, fontColor } = useSelector((state) => state.mode);
    const {color} = useSelector((state) => state.color);

    return (
        <Nav $bgColor={bgColor} $fontColor={fontColor}>
            <LINK to="/Kanji">
                <Furigana $color={color}>かんじ</Furigana>
                <Kanji>漢字</Kanji>
                <Romaji>kanji</Romaji>
            </LINK>
        </Nav>
    );
}