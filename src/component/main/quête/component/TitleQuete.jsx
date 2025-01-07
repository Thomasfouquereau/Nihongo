import styled from "styled-components";
import { useSelector } from 'react-redux';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    padding: 1vw;
    width: 25%;
    gap: 1vw;
    @media screen and (max-width: 560px) {

    }
`

const Title = styled.h1`
    font-size: 2vw;
    color: ${(props) => props.$fontColor};
    background-color: ${(props) => props.$mainBgColor};
    border-radius: 0.5vw;
    width: 40%;
    height: 100%;
    text-align: center;
    @media screen and (max-width: 560px) {
        font-size: 6vw;
    }
`;

const TitleJaponai = styled.p`
    font-size: 2vw;
    color: ${(props) => props.$color};
    background-color: ${(props) => props.$mainBgColor};
    border-radius: 0.5vw;
    width: 60%;
    height: 100%;
    text-align: center;
    @media screen and (max-width: 560px) {
        font-size: 3vw;
    }
`;

export default function TitleQuete() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    return (
        <Container $bgColor={bgColor}>
            <Title $mainBgColor={mainBgColor} $fontColor={fontColor}>Quête</Title>
            <TitleJaponai $mainBgColor={mainBgColor} $color={color}>クエスト</TitleJaponai>
        </Container>
    );
}