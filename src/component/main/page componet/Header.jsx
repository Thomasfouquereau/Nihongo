import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import BackIcon from "../../../svg/BackIcon";
import HomeIcon from "../../../svg/HomeIcon";

const HeaderTop = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1vw;
    max-width: 76vw;
    height: 20vw;
    @media screen and (max-width: 560px) {
        flex-direction: column-reverse;
        height: 100%;
        max-width: 100vw;
        width: 100%;
        align-items: center;
        gap: 3vw;
    }
`

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    width: 30%;
    @media screen and (max-width: 560px) {
        width: 90%;
        height: 50vw;
        border-radius: 4vw;
        padding: 3vw;
        gap: 1.5vw;
    }
`

const BackButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    height: 50%;
    max-width: 100%;
    padding: 1vw;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
        padding: 4vw;
    }
    &:hover{
        background-color: #858585;
    }
    div{
        display: flex;
        flex-direction: column;
        span:nth-child(1){
            font-size: 0.7vw;
            @media screen and (max-width: 560px) {
                font-size: 2.5vw;
            }
        }
        span:nth-child(2){
            font-weight: 700;
            font-size: 1.5vw;
            @media screen and (max-width: 560px) {
                font-size: 5vw;
            }
        }
        span{
            font-size: 1.2vw;
            @media screen and (max-width: 560px) {
                font-size: 4vw;
            }
        }
    }
    img{
        width: 4vw;
        height: 4vw;
    }
`

const HomeButton = styled(Link)`
    display: flex;
    align-items: center;
    text-align: end;
    justify-content: space-between;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    height: 50%;
    max-width: 100%;
    padding: 1vw;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
        padding: 4vw;
    }
    &:hover{
        background-color: #858585;
    }
    div{
        display: flex;
        flex-direction: column;
        span{
            font-size: 1.2vw;
            @media screen and (max-width: 560px) {
                font-size: 5vw;
            }
        }
    }
    img{
        width: 4vw;
        height: 4vw;
        
    }
`

const TitleContainer = styled.div`
    display: flex;
    padding: 1vw;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    width: 70%;
    @media screen and (max-width: 560px) {
        width: 90%;
        height: 70vw;
        border-radius: 4vw;
        padding: 3vw;
    }
`

const TitleBg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    width: 100%;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
    }
    span{
        font-size: 2vw;
        @media screen and (max-width: 560px) {
            font-size: 6vw;
        }
    }
`

const TitleFurigana = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    color: ${(props) => props.$color};
    span{
        font-size: 1.8vw;
        width: 10vw;
        @media screen and (max-width: 560px) {
            font-size: 6vw;
            width: 25vw ;
        }
    }
`
const TitleKanji = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    span{
        font-size: 9vw;
        font-weight: 700;
        width: 10vw;
        height: 10vw;
        transform: translateY(-1.7vw);
        @media screen and (max-width: 560px) {
            font-size: 25vw;
            width: 25vw ;
            height: 100%;
            transform: translateY(-0vw);
        }
    }
`

export default function Header() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

    const location = useLocation();

    const getText = () => {
        switch (location.pathname) {
            case '/Kanji':
                return {
                    titleFurigana1: 'かん',
                    titleFurigana2: 'じ',
                    titleKanji1: '漢',
                    titleKanji2: '字',
                    titleFr: 'Kanji'
                };
            case '/Hiragana':
                return {
                    titleFurigana1: 'ひらがな',
                    titleFurigana2: '',
                    titleKanji1: 'あ',
                    titleKanji2: '',
                    titleFr: 'Hiragana'
                };
            case '/Katakana':
                return {
                    titleFurigana1: 'カタカナ',
                    titleFurigana2: '',
                    titleKanji1: 'ア',
                    titleKanji2: '',
                    titleFr: 'Katakana'
                };
            case '/Vocabulaire':
                return {
                    titleFurigana1: 'ご',
                    titleFurigana2: 'い',
                    titleKanji1: '語',
                    titleKanji2: '彙',
                    titleFr: 'Vocabulaire'
                };
            case '/Nombres':
                return {
                    titleFurigana1: 'ばん',
                    titleFurigana2: 'ごう',
                    titleKanji1: '番',
                    titleKanji2: '号',
                    titleFr: 'Nombres'
                };
            case '/Dictionnaire/Kanji':
            case '/Dictionnaire/Hiragana':
            case '/Dictionnaire/Katakana':
            case '/Dictionnaire/Vocabulaire':
            case '/Dictionnaire/Nombres':
                return {
                    titleFurigana1: 'じ',
                    titleFurigana2: 'しょ',
                    titleKanji1: '辞',
                    titleKanji2: '書',
                    titleFr: 'Dictionnaire'
                };
            default:
                return 'Accueil';
        }
    };

    const text = getText();
    let navigate = useNavigate();
    const mobile = window.innerWidth < 560 ? '14vw' : '5vw';

    return (
        <HeaderTop>
            <Menu $bgColor={bgColor}>
                <BackButton $mainBgColor={mainBgColor} $fontColor={fontColor} onClick={() => navigate(-1)}>
                    <BackIcon width={mobile} height={mobile} color={color}></BackIcon>
                    <div>
                        <span>もど</span>
                        <span>戻る</span>
                        <span>Retour</span>
                    </div>
                </BackButton>
                <HomeButton $mainBgColor={mainBgColor} $fontColor={fontColor} to="/">
                    <HomeIcon  width={mobile} height={mobile}color={color} mainBgColor={mainBgColor}></HomeIcon>
                    <div>
                        <span>サイトホーム</span>
                        <span>Accueil du site</span>
                    </div>
                </HomeButton>
            </Menu>
            <TitleContainer $bgColor={bgColor}>
                <TitleBg $mainBgColor={mainBgColor} $fontColor={fontColor}>
                    <TitleFurigana $color={color}>
                        <span>{text.titleFurigana1}</span>
                        <span style={{ width: location.pathname === '/Hiragana' || location.pathname === '/Katakana' ? '0vw' : '9vw' }}>
                            {text.titleFurigana2}
                        </span>
                    </TitleFurigana>
                    <TitleKanji>
                        <span>{text.titleKanji1}</span>
                        <span style={{ width: location.pathname === '/Hiragana' || location.pathname === '/Katakana' ? '0vw' : '9vw' }}>
                            {text.titleKanji2}
                        </span>
                    </TitleKanji>
                    <span>{text.titleFr}</span>
                </TitleBg>
            </TitleContainer>
        </HeaderTop>
    );
}