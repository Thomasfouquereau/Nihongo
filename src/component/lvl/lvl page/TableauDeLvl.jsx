import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';  

import LockIcon from "../../../svg/LockIcon";
import UnlockIcon from "../../../svg/UnlockIcon";

const TableauDeLvlContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    p{
        font-size: 1.5vw;
        color: #8a8a50;
        span{
            color: #62620d;
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
`

const Lock = styled.div`
    position: absolute;
    &::before{
        content: '';
        position: absolute;
        min-width: 42.2vw;
        min-height: 25vw;
        background-color: rgba(0, 0, 0, 0.661);
        border-radius: 0.6vw;
    }
    svg{
        position: absolute;
        top: -3.6vw !important;
        left: -1.8vw;
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
    }
    p:nth-child(2){
        height: 20%;
    }
`

const CardMaker = (lvl, bonus, Level, color, feature, fontColor, mainBgColor, bgColor) => {
    const width = '2vw';
    const LockWidth = '5vw';

    return (
        <Card key={lvl} $fontColor={fontColor} $mainBgColor={mainBgColor} $bgColor={bgColor} $color={color} >
            <p><span>lvl</span>{lvl}</p>
            {feature && <p>{feature.bonus}</p>}
            {location.pathname !== '/lvl/user' && <p>+25% de user xp</p>}
            {lvl <= Level ? <UnlockIcon width={width} height={width} color={color}></UnlockIcon> :  <Lock><LockIcon width={LockWidth} height={LockWidth} color={color}></LockIcon></Lock>}
        </Card>
    );
}

export default function TableauDeLvl() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const navigate = useNavigate();

    let Level = 0;
    switch (location.pathname) {
        case '/lvl/user':
            Level = Number(localStorage.getItem('userLvL'));
            break;
        case '/lvl/Kanji':
            Level = Number(localStorage.getItem('kanjiLvL'));
            break;
        case '/lvl/Hiragana':
            Level = Number(localStorage.getItem('hiraganaLvL'));
            break;
        case '/lvl/Katakana':
            Level = Number(localStorage.getItem('katakanaLvL'));
            break;
        case '/lvl/Vocabulaire':
            Level = Number(localStorage.getItem('vocabulaireLvL'));
            break;
        case '/lvl/Nombre':
            Level = Number(localStorage.getItem('nombreLvL'));
            break;
        default:
            Level = 0;
            break;
    }

    const unlockFeature = [
        {
            category: 'user',
            features: [
                {
                    lvl: 5,
                    bonus: 'Débloquer personnalisation de couleur',
                },
            ],
        },
        {
            category: 'all',
            features: [
                {
                    lvl: 3,
                    bonus: 'Débloquer la difficulté Intermédiaire',
                },
                {
                    lvl: 5,
                    bonus: '+10% xp',
                },
                {
                    lvl: 7,
                    bonus: 'Débloquer la difficulté Confirmée',
                },
            ],
        },
    ];

    return (
        <TableauDeLvlContainer>
            <p>Tableau de niveau pour <span>w</span></p>
            <button onClick={() => navigate(-1)} >Close</button>
            <Container $fontColor={fontColor} $mainBgColor={mainBgColor} $bgColor={bgColor} $color={color} >
                {Array.from({ length: 100 }, (_, i) => {
                    const feature = unlockFeature.find(f => f.category !== 'user')?.features.find(f => f.lvl === i + 1);
                    return CardMaker(i + 1, '', Level, color, feature, fontColor, mainBgColor, bgColor);
                })}
            </Container>
        </TableauDeLvlContainer>
    )
}