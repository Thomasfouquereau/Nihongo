import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
    display: flex;
    gap: 1vw;
    width: 94%;
    @media screen and (max-width: 560px){
        gap: 5vw;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;        
    }
`

const Title = styled.div`
    padding: 1vw;
    gap: 1vw;
    border-radius: 0.8vw;
    background-color: ${(props) => props.$bgColor};
    width: 50%;
    height: 17vw;
    @media screen and (max-width: 560px){
        width: 98%;
        height: 50vw;
        border-radius: 4vw;
        padding: 3vw;
    }
`

const TitleContainer = styled.div`
    background-color: ${(props) => props.$mainBgColor};
    border-radius: 0.5vw;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 560px){
        border-radius: 3vw;
    }
    p{
        font-size: 2.5vw;
        font-weight: 600;
        color: ${(props) => props.$fontColor};
        @media screen and (max-width: 560px){
            font-size: 7vw;
        }
    }
`

const FuriganaContainer = styled.div`
    display: flex;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0.5vw;
        @media screen and (max-width: 560px){
            gap: 2vw;
        }
        p{
            font-size: 5.5vw;
            font-weight: 600;
            color: ${(props) => props.$fontColor};
            @media screen and (max-width: 560px){
                font-size: 17vw;
            }
        }
        p:nth-child(1){
            font-size: 2vw;
            height: 1.4vw;
            font-weight: 500;
            color: ${(props) => props.$color};
            @media screen and (max-width: 560px){
                font-size: 6vw;
                height: 4vw;
            }
        }
    }
`

const Description = styled.div`
    display: flex;
    width: 60%;
    padding: 1vw;
    border-radius: 0.8vw;
    background-color: ${(props) => props.$bgColor};
    @media screen and (max-width: 560px){
        width: 98%;
        padding: 3vw;
        border-radius: 4vw;
        height: 62vw;
    }
`

const DescriptionContainer = styled.div`
    background-color: ${(props) => props.$mainBgColor};
    border-radius: 0.5vw;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 560px){
        border-radius: 3vw;
    }
    p{
        font-size: 2vw;
        font-weight: 600;
        padding: 0vw 2vw;
        color: ${(props) => props.$fontColor};
        @media screen and (max-width: 560px){
            font-size: 6vw;
            padding: 0vw 3vw;
        }
    }
    p:nth-child(2){
        font-size: 1.2vw;
        font-weight: 400;
        color: ${(props) => props.$fontColor};
        margin-top: 1vw;
        @media screen and (max-width: 560px){
            font-size: 4vw;
            margin-top: 4vw;
        }
    }
`


export default function ArticleHeader() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    return (
        <Container>
            <Title $bgColor={bgColor}>
                <TitleContainer $mainBgColor={mainBgColor} $fontColor={fontColor}>
                    <FuriganaContainer $color={color} $fontColor={fontColor}>
                        <div>
                            <p>き</p>
                            <p>記</p>
                        </div>
                        <div>
                            <p>じ</p>
                            <p>事</p>
                        </div>
                    </FuriganaContainer>
                    <p>Nos articles</p>
                </TitleContainer>
            </Title>
            <Description $bgColor={bgColor}>
                <DescriptionContainer $mainBgColor={mainBgColor} $fontColor={fontColor}>
                    <p>Description</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula nisi neque. Pellentesque finibus neque vitae odio viverra, nec tempor lorem viverra. Morbi facilisis facilisis tempor. Sed posuere fermentum ligula ut sodales. Pellentesque elementum volutpat nulla, eget fringilla lectus luctus sit amet. </p>
                </DescriptionContainer>
            </Description>
        </Container>
    );
}