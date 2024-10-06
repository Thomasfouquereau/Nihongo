import { useSelector } from 'react-redux';
import styled from 'styled-components';
import XpProgressBar from '../../lvl/component/XpProgressBar';

const Container = styled.div`
    display: flex;
    gap: 0.8vw;
    padding: 1vw;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    width: calc( 100% - 2vw);
    height: calc(50% - 3vw);
    @media screen and (max-width: 560px) {
        flex-wrap: wrap;
        gap: 1.5vw;
        padding: 3vw;
        border-radius: 3vw;
        width: 100%;
    }
`

const LvlCategorie = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4vw;
    width: 50%;
    height: 100%;
    @media screen and (max-width: 560px) {
        width: 49%;
        height: 32%;
        gap: 1vw;
    }
    p{
        background-color: ${(props) => props.$mainBgColor};
        color: ${(props) => props.$fontColor};
        height: 18%;
        border-radius: 0.6vw;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1vw;
        font-weight: 700;
        @media screen and (max-width: 560px) {
            font-size: 4vw;
            border-radius: 3vw;
        }
    }
`;

const UserLevel = styled.div`
    background-color: ${(props) => props.$mainBgColor};
    width: calc( 100% - 2vw);
    height: 80%;
    border-radius: 0.6vw;
    padding-left: 1vw;
    padding-right: 1vw;
    @media screen and (max-width: 560px) {
        width: calc( 100% - 4vw);
        border-radius: 3vw;
        padding-left: 2vw;
        padding-right: 2vw;   
    }
    p{
        margin-top: 1.9vw;
        height: 59%;
        font-size: 2.5vw;
        font-weight: 700;
        display: flex;
        align-items: baseline;
        margin-bottom: -0.5vw;
        color: ${(props) => props.$fontColor};
        @media screen and (max-width: 560px) {
            font-size: 13vw;
            height: 70%;
            margin-bottom: -0.5vw;
        }
    }
    span{
        font-size: 1.2vw;
        margin-left: 0.2vw;
        color: ${(props) => props.$color};
        @media screen and (max-width: 560px) {
            font-size: 5vw;
            margin-left: 0.5vw;
        }
    }
`;


export default function RecapLvl() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

    const lvl = '36';
    const heightBar = window.innerWidth < 560 ? '3vw' : '0.8vw';
    const widthBar = '100%';
    const colorBar = color;
    const bgColorBar = bgColor;


    const categories = ['Kanji', 'Hiragana', 'Katakana', 'Vocabulaire', 'Nombre'];

    return (
        <Container $bgColor={bgColor}>
            {categories.map((category) => (
                <LvlCategorie key={category} $mainBgColor={mainBgColor} $fontColor={fontColor} >
                    <p>{category}</p>
                    <UserLevel $color={color} $mainBgColor={mainBgColor} $fontColor={fontColor}>
                        <p>{lvl}<span>lvl</span></p>
                        <div>
                            <XpProgressBar
                                xp={68}
                                xpToNextLevel={150}
                                height={heightBar}
                                width={widthBar}
                                color={colorBar}
                                bgColor={bgColorBar}
                            />
                        </div>
                    </UserLevel>
                </LvlCategorie>
            ))}
        </Container>
    );
}