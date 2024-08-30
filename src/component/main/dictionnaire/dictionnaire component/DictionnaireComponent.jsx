import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const DictionnaireComponentContainer = styled.div`
    display: flex;
    gap: 1vw;
    width: calc(100% - 21vw);
    height: 23.4vw;
 `

 const DictionnaireLinkContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    padding: 1vw;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    width: 50%;
    &:hover{
        div{
            background-color: #858585;
        }
    }
`

const DictionnaireLinkContent = styled.div`
    display: flex;
    gap: 1.5vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    height: 100%;
    span:nth-child(1){
        font-size: 1.5vw;
        color: ${(props) => props.$color};
    }
    span:nth-child(2){
        font-size: 9vw;
        font-weight: 700;
        max-height: 9vw;
        transform: translateY(-2vw);
    }
    span:nth-child(3){
        font-size: 1.5vw;
        font-weight: 500;
    }
`


export default function DictionnaireComponent() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

    const location = useLocation();
    const getText = () => {
        switch (location.pathname) {
            case '/Dictionnaire/Kanji':
                return {
                    titleFurigana1: 'ひらがな',
                    titleKanji1: '語彙',
                    titleFr1: 'Vocabulaire',
                    link1: '/Dictionnaire/Vocabulaire',
                    titleFurigana2: 'ひらがな',
                    titleKanji2: 'あ',
                    titleFr2: 'hiragana',
                    link2: '/Dictionnaire/Hiragana',
                };
            case '/Dictionnaire/Hiragana':
                return {
                    titleFurigana1: 'かんじ',
                    titleKanji1: '漢字',
                    titleFr1: 'kanji',
                    link1: '/Dictionnaire/Kanji',
                    titleFurigana2: 'カタカナ',
                    titleKanji2: 'ア',
                    titleFr2: 'katakana',
                    link2: '/Dictionnaire/Katakana',
                };
            case '/Dictionnaire/Katakana':
                return {
                    titleFurigana1: 'かんじ',
                    titleKanji1: '漢字',
                    titleFr1: 'kanji',
                    link1: '/Dictionnaire/Kanji',
                    titleFurigana2: 'ひらがな',
                    titleKanji2: 'あ',
                    titleFr2: 'hiragana',
                    link2: '/Dictionnaire/Hiragana',
                };
            case '/Dictionnaire/Vocabulaire':
                return {
                    titleFurigana1: 'かんじ',
                    titleKanji1: '漢字',
                    titleFr1: 'kanji',
                    link1: '/Dictionnaire/Kanji',
                    titleFurigana2: 'ばんごう',
                    titleKanji2: '番号',
                    titleFr2: 'Nombres',
                    link2: '/Dictionnaire/Nombres',

                };
            case '/Dictionnaire/Nombres':
                return {
                    titleFurigana1: 'ごい',
                    titleKanji1: '語彙',
                    titleFr1: 'Vocabulaire',
                    link1: '/Dictionnaire/Vocabulaire',
                    titleFurigana2: 'かんじ',
                    titleKanji2: '漢字',
                    titleFr2: 'kanji',
                    link2: '/Dictionnaire/Kanji',
                };
            default:
                return 'Accueil';
        }
    };
    const text = getText();

    return (
        <DictionnaireComponentContainer>
            <DictionnaireLinkContainer $bgColor={bgColor} to={text.link1}>
                <DictionnaireLinkContent $mainBgColor={mainBgColor} $fontColor={fontColor} $color={color}>
                    <span >{text.titleFurigana1}</span>
                    <span>{text.titleKanji1}</span>
                    <span>{text.titleFr1}</span>
                </DictionnaireLinkContent>
            </DictionnaireLinkContainer>
            <DictionnaireLinkContainer $bgColor={bgColor} to={text.link2}>
                <DictionnaireLinkContent $mainBgColor={mainBgColor} $fontColor={fontColor} $color={color}>
                    <span >{text.titleFurigana2}</span>
                    <span>{text.titleKanji2}</span>
                    <span>{text.titleFr2}</span>
                </DictionnaireLinkContent>
            </DictionnaireLinkContainer>
        </DictionnaireComponentContainer>
    );
}