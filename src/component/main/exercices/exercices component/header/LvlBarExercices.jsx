import XpProgressBar from '../../../../lvl/component/XpProgressBar';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
    width: 30%;
    font-size: 1.5vw;
    background-color: ${props => props.$bgColor};
    padding: 1vw;
    border-radius:0.8vw;
    height: calc(100% - 2vw);
    @media screen and (max-width: 560px){
        width: 90%;
        border-radius: 4vw;
        padding: 3vw;
        height: 40%;
    }
`

const LvlBarContainer = styled.div`
    background-color: ${props => props.$mainBgColor};
    color: ${props => props.$fontColor};
    border-radius: 0.6vw;;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.6vw;
    padding-left: 3vw;
    padding-right: 3vw;
    position: relative;
    @media screen and (max-width: 560px){
        border-radius: 3vw;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
    p{
        margin-top: -1vw;
        font-size: 2vw;
        font-weight: bold;
        @media screen and (max-width: 560px){
            margin-top: 0;
            font-size: 5vw;
        }
        span{
            font-size: 0.8vw;
            @media screen and (max-width: 560px){
                position: absolute;
                bottom: 0.5vw;
                left: 6.8vw;
                font-size: 2vw;
            }
        }
    }
`

const XpProgressXp = styled.p`
    font-size: 0.8vw !important;
    position: absolute;
    bottom: 0.5vw;
    right: 3vw;
    font-weight: bold;
    @media screen and (max-width: 560px){
        display: none;
    }
`

const XpAdd = styled.span`
    font-size: 0.9vw;
    position: absolute;
    opacity: ${props => props.$opacity};
    top: 1.5vw;
    right: 3vw;
    font-weight: bold;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    @media screen and (max-width: 560px){
        display: none;
    }
`

export default function LvlBarExercices() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    let category = '';

    if (location.pathname === '/Exercices/Kanji' || location.pathname === '/Nihongo-V2/Exercices/Kanji') {
        category = 'Kanji';
    } else if (location.pathname === '/Exercices/Vocabulaire' || location.pathname === '/Nihongo-V2/Exercices/Vocabulaire') {
        category = 'vocabulaire';
    } else if (location.pathname === '/Exercices/Hiragana' || location.pathname === '/Nihongo-V2/Exercices/Hiragana') {
        category = 'hiragana';
    } else if (location.pathname === '/Exercices/Katakana' || location.pathname === '/Nihongo-V2/Exercices/Katakana') {
        category = 'katakana';
    } else if (location.pathname === '/Exercices/Nombres' || location.pathname === '/Nihongo-V2/Exercices/Nombres') {
        category = 'nombre';
    }

    const lvl = useSelector((state) => state.lvl[`${category}LvL`]);
    const xp = useSelector((state) => state.lvl[`${category}Xp`]);
    const xpToNextLevel = useSelector((state) => state.lvl[`${category}XpToNextLvL`]);
    const formattedXp = xp.toFixed(2);
    const heightBar = window.innerWidth < 560 ? '3vw' : '1.5vw';
    const widthBar = window.innerWidth < 560 ? '70%' : '100%';
    const colorBar = color;
    const bgColorBar = bgColor;

    let xpDébutant = 5;
    let xpIntermédiaire = parseFloat(6.25);
    let xpAvancé = parseFloat(7.8);
    const exerciceDifficulté = useSelector((state) => state.parametersExercice.exerciceDifficulté);
    
    let addXp = ''
    if (exerciceDifficulté === 'Débutant') {
        addXp = xpDébutant;
    } else if (exerciceDifficulté === 'Intermédiaire') {
        addXp = xpIntermédiaire;
    } else if (exerciceDifficulté === 'Confirmer') {
        addXp = xpAvancé;
    }

    const QuestionsCorrectes = useSelector((state) => state.exercice.questionsCorrectes);
    let opacity = '0';  
    if (QuestionsCorrectes === true) {
        opacity = '1';
    } else {
        opacity = '0';
    } 

    return (
        <Container $bgColor={bgColor} $fontColor={fontColor} >
            <LvlBarContainer $mainBgColor={mainBgColor} $fontColor={fontColor}>
                <p>lvl {lvl} <span>{category}</span></p>
                <XpProgressBar
                    xp={xp}
                    xpToNextLevel={xpToNextLevel}
                    height={heightBar}
                    width={widthBar}
                    color={colorBar}
                    bgColor={bgColorBar}
                />
                <XpProgressXp>{formattedXp}/{xpToNextLevel} XP</XpProgressXp>
                <XpAdd $opacity={opacity} $color={color}>+{addXp}xp</XpAdd>
            </LvlBarContainer>
        </Container>
    );
}

