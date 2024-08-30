import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import iconback from '../../../assets/icon-back.svg';
import iconHomeLightMode from '../../../assets/icon-home-light-mode.svg';
import iconHomeDarkMode from '../../../assets/icon-home-dark-mode.svg';

const HeaderTop = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1vw;
    max-width: 76vw;
    height: 20vw;
`

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    width: 30%;
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
    &:hover{
        background-color: #858585;
    }
    div{
        display: flex;
        flex-direction: column;
        span:nth-child(1){
            font-size: 0.7vw;
        }
        span:nth-child(2){
            font-weight: 700;
            font-size: 1.5vw;
        }
        span{
            font-size: 1.2vw;
        }
    }
    img{
        width: 4vw;
        height: 4vw;
        fill: ${(props) => props.$color}; ///////////////////////////////////////////////changer la couleur du svg ????
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
    &:hover{
        background-color: #858585;
    }
    div{
        display: flex;
        flex-direction: column;
        span{
            font-size: 1.2vw;
        }
    }
    img{
        width: 4vw;
        height: 4vw;
        fill: ${(props) => props.$color}; ///////////////////////////////////////////////changer la couleur du svg ????
    }
`

const TitleContainer = styled.div`
    display: flex;
    padding: 1vw;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    width: 70%;
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
    span{
        font-size: 2vw;
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
    }
`

export default function Header() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

    const mode = useSelector(state => state.mode);

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

    return (
        <HeaderTop>
            <Menu $bgColor={bgColor}>
                <BackButton $mainBgColor={mainBgColor} $fontColor={fontColor} to="/">
                    <img src={iconback} />
                    <div>
                        <span>もど</span>
                        <span>戻る</span>
                        <span>Retour</span>
                    </div>
                </BackButton>
                <HomeButton $mainBgColor={mainBgColor} $fontColor={fontColor} to="/">
                    <img src={mode.mode === 'light' ? iconHomeLightMode : iconHomeDarkMode} />
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