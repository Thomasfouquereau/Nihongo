import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import LockIcon from "../../../svg/LockIcon";
import UnlockIcon from "../../../svg/UnlockIcon";
import CrossIconDark from "../../../assets/icon-cross-dark.svg";
import CrossIconLight from "../../../assets/icon-cross-white.svg";

import lvlUnlockFeature from "../../data/lvl unlock feature/lvlUnlockFeature.json";

const TableauDeLvlContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    margin-bottom: 3vw;
    @media screen and (max-width: 560px) {
        gap: 2vw;
    }
`

const Title = styled.div`
    padding: 1vw;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    margin-top: 1vw;
    height: 3vw;
    width: 30vw;
    p{
        background-color: ${(props) => props.$mainBgColor};
        border-radius: 0.6vw;
        font-size: 1.5vw;
        color:${(props) => props.$fontColor};
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        span{
            color: ${(props) => props.$color};
            margin-left: 0.3vw;
        }
    }
    @media screen and (max-width: 560px) {
        width: calc(90% - 6vw);
        height: 15vw;
        border-radius: 3vw;
        padding: 3vw;
        margin-top: 20vw;
        p{
            font-size: 5vw;
            height: 100%;
            border-radius: 2vw;
            span{
                margin-left: 1vw;
            }
        }
    }
`

const CloseButton = styled.button`
    position: fixed;
    top: 1vw;
    left: 3vw;
    background-color: ${(props) => props.$color};
    border: 0.1vw solid ${(props) => props.$mainBgColor};
    color: #fff;
    width: 5vw;
    height: 4.3vw;
    border-radius: 0.8vw;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    z-index: 1;
    img{
        width: 3.3vw;
        height: 3.3vw;
    }
    &:hover{
        transform: scale(1.06);
    }
    @media screen and (max-width: 560px) {
        top: 3vw;
        left: 3.1vw;
        width: 14vw;
        height: 12vw;
        border-radius: 3vw;
        img{
            width: 9vw;
            height: 9vw;
        }
    }
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1vw;
    width: 90%;
    justify-content: center;
    align-items: center;
    margin-top: 2vw;
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5vw;
        p{
            font-size: 1vw;
            color: #080801;
        }
    }
    @media screen and (max-width: 560px) {
        gap: 2vw;
        margin-top: 0vw;
    }
`

const Lock = styled.div`
    position: absolute;
    &::before{
        content: '';
        position: absolute;
        min-width: 42.6vw;
        min-height: 25vw;
        background-color: rgba(0, 0, 0, 0.661);
        border-radius: 0.6vw;
    }
    svg{
        position: absolute;
        top: -3.6vw !important;
        left: -1.8vw;
    }
    @media screen and (max-width: 560px) {
        &::before{
            min-width: 84vw;
            min-height: 60vw;
            border-radius: 3vw;
        }
        svg{
            top: -8vw !important;
            left: -5vw;
        }
    }
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5vw;
    width: 47.2%;
    height: 25vw;
    border-radius: 0.8vw;
    background-color: ${(props) => props.$bgColor};
    padding: 1vw;
    position: relative; 
    color: ${(props) => props.$fontColor};
    svg{
        position: absolute;
        top: 2vw;
        right: 2.2vw;
    }
    p{
        font-size: 1.5vw;
        color: ${(props) => props.$fontColor};
        background-color: ${(props) => props.$mainBgColor};
        border-radius: 0.6vw;
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        span{
            margin-right: 0.3vw;
            font-weight: 500;
            font-size: 2vw;
            margin-bottom: -2.1vw;
            color: ${(props) => props.$color};
        }
    }
    p:nth-child(1){
        font-size: 5vw;
        color: ${(props) => props.$color};
        font-weight: 700;
    }
    p:nth-child(3){
        height: 20%;
        color: ${(props) => props.$fontColor};
    }
    p:nth-child(2){
        height: 20%;
        color: ${(props) => props.$fontColor};
    }
    @media screen and (max-width: 560px) {
        width: 100%;  
        height: 60vw;
        gap: 1.5vw;
        padding: 3vw;
        border-radius: 3vw;
        svg{
            top: 6vw;
            right: 6.2vw;
        }
        p{
            border-radius: 3vw;
            span{
                font-size: 8vw;
                margin-right: 1.5vw;
                margin-bottom: -4.5vw;
            }
        }
        p:nth-child(1){
            font-size: 15vw;
        }
        p:nth-child(3){
            font-size: 4vw;
        }
        p:nth-child(2){
            font-size: 4vw;
        }
    }
`

const CardMaker = (lvl, bonus, Level, color, feature, fontColor, mainBgColor, bgColor) => {
    const width = window.innerWidth < 560 ? '6vw' : '2vw' ;
    const LockWidth = window.innerWidth < 560 ? '12vw' : '5vw';

    return (
        <Card key={lvl} $fontColor={fontColor} $mainBgColor={mainBgColor} $bgColor={bgColor} $color={color} >
            <p><span>lvl</span>{lvl}</p>
            {feature && <p>{feature.bonus}</p>}
            {location.pathname !== '/lvl/user' && <p>+25% de user xp</p>}
            {lvl <= Level ? <UnlockIcon width={width} height={width} color={color}></UnlockIcon> : <Lock><LockIcon width={LockWidth} height={LockWidth} color={color}></LockIcon></Lock>}
        </Card>
    );
}

export default function TableauDeLvl() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const navigate = useNavigate();

    let Level = 0;
    let lvlName = '';
    switch (location.pathname) {
        case '/lvl/user':
        case '/Nihongo-V2/lvl/user':
            Level = Number(localStorage.getItem('userLvL'));
            lvlName = 'user';
            break;
        case '/lvl/Kanji':
        case '/Nihongo-V2/lvl/Kanji':
            Level = Number(localStorage.getItem('kanjiLvL'));
            lvlName = 'kanji';
            break;
        case '/lvl/Hiragana':
        case '/Nihongo-V2/lvl/Hiragana':
            Level = Number(localStorage.getItem('hiraganaLvL'));
            lvlName = 'hiragana';
            break;
        case '/lvl/Katakana':
        case '/Nihongo-V2/lvl/Katakana':
            Level = Number(localStorage.getItem('katakanaLvL'));
            lvlName = 'katakana';
            break;
        case '/lvl/Vocabulaire':
        case '/Nihongo-V2/lvl/Vocabulaire':
            Level = Number(localStorage.getItem('vocabulaireLvL'));
            lvlName = 'vocabulaire';
            break;
        case '/lvl/Nombre':
        case '/Nihongo-V2/lvl/Nombre':
            Level = Number(localStorage.getItem('nombreLvL'));
            lvlName = 'nombre';
            break;
        default:
            Level = 0;
            lvlName = '';
            break;
    }

    const unlockFeature = lvlUnlockFeature;

    const activeMode = localStorage.getItem('mode') || 'light';
    return (
        <TableauDeLvlContainer  >
            <Title $fontColor={fontColor} $mainBgColor={mainBgColor} $bgColor={bgColor} $color={color}>
                <p>Tableau de niveau pour <span>{lvlName}</span></p>
            </Title>
            <CloseButton $mainBgColor={mainBgColor} $color={color} onClick={() => navigate(-1)} >
                <img src={activeMode === 'light' ? CrossIconLight : CrossIconDark} alt="Close" />
            </CloseButton>
            <Container $fontColor={fontColor} $mainBgColor={mainBgColor} $bgColor={bgColor} $color={color} >
                {Array.from({ length: 100 }, (_, i) => {
                    const feature = location.pathname === "/lvl/user"
                        ? unlockFeature.find(f => f.category === 'user')?.features.find(f => f.lvl === i + 1)
                        : unlockFeature.find(f => f.category === 'all')?.features.find(f => f.lvl === i + 1);
                    return CardMaker(i + 1, '', Level, color, feature, fontColor, mainBgColor, bgColor);
                })}
            </Container>
        </TableauDeLvlContainer>
    )
}