import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    width: 100%;
    gap: 1vw;
    height: 6.5vw;
    @media screen and (max-width: 560px){
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 45vw;
        gap: 3vw;
    }
`

const LeftContainer = styled.div`
    display: flex;
    width: 30%;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    padding: 1vw;
    gap: 0.5vw;
    @media screen and (max-width: 560px){
        width: 90%;
        padding: 3vw;
        border-radius: 4vw;
        height: 15vw;
        gap: 1.5vw;
    }
    p{
        background-color: ${(props) => props.$mainBgColor};
        color: ${(props) => props.$fontColor};
        border-radius: 0.5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2vw;
        width: 70%;
        font-weight: 700;
        @media screen and (max-width: 560px){
            border-radius: 3vw;
            font-size: 7vw;
        }
    }
`

const FuriganaContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$mainBgColor};
    border-radius: 0.5vw;
    width: 30%;
    @media screen and (max-width: 560px){
        border-radius: 3vw;
    }
`

const Furigana = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.$mainBgColor};
    transform: translateY(-0.4vw);
    p{
        color: ${(props) => props.$fontColor};
        border-radius: 0.5vw;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5vw;
        height: 1.5vw;
        width: 1.7vw;
        @media screen and (max-width: 560px){
            font-size: 5vw;
            height: 4.5vw;
            width: 5.7vw;
        }
    }
    p:nth-child(1){
        font-size: 0.8vw;
        color: ${(props) => props.$color};
        height: 1vw;
        font-weight: 500;
        @media screen and (max-width: 560px){
            font-size: 3vw;
            height: 4.5vw;
        }
    }
`

const RightContainer = styled.div`
    display: flex;
    width: 65%;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    padding: 1vw;
    gap: 0.5vw;
    font-weight: 700;
    @media screen and (max-width: 560px){
        width: 90%;
        padding: 3vw;
        border-radius: 4vw;
        height: 12vw;
        gap: 1.5vw;
    }
    a{
        background-color: ${(props) => props.$mainBgColor};
        border-radius: 0.5vw;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.7vw;
        width: 40%;
        color: ${(props) => props.$fontColor};
        transition:cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
        will-change: transform;
        @media screen and (max-width: 560px){
            border-radius: 3vw;
            font-size: 5vw;
        }
        &:hover{
            transform: scale(1.03);
        }
    }
    a:nth-child(1){
        background-color: ${(props) => props.$color};
        color: #F7F7F2;
        width: 60%;
        &:hover{
            transform: scale(1.027);
        }
    }
`

export default function ArticlesHeaderBar() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

    return (
        <Container>
            <LeftContainer $bgColor={bgColor} $fontColor={fontColor} $mainBgColor={mainBgColor} >
                <p>Nos articles</p>
                <FuriganaContainer $mainBgColor={mainBgColor}>
                    <Furigana $color={color} $fontColor={fontColor}>
                        <p>き</p>
                        <p>記</p>
                    </Furigana>
                    <Furigana $color={color} $fontColor={fontColor}>
                        <p>じ</p>
                        <p>事</p>
                    </Furigana>
                </FuriganaContainer>
            </LeftContainer>
            <RightContainer $bgColor={bgColor} $mainBgColor={mainBgColor} $color={color} $fontColor={fontColor}>
                <Link to={'/articles'}>Plus d’articles</Link>
                <Link>Contribuer</Link>
            </RightContainer>
        </Container>
    );
}