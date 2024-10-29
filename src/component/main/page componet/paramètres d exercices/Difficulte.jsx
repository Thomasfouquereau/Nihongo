import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setExerciceDifficulté } from '../../../store';
import { setExerciceTimerActive, setExerciceTimer } from '../../../store';

import IconDifficulte1 from '../../../../assets/icon-difficulte-1.svg';
import IconDifficulte2 from '../../../../assets/icon-difficulte-2.svg';
import IconDifficulte3 from '../../../../assets/icon-difficulte-3.svg';
import StrongArrowIcon from '../../../../svg/StrongArrowIcon';
import LockIcon from '../../../../svg/LockIcon';

const SectionDifficulte = styled.div`
    display: flex;
    width: 100%;
    height: 35vw;
    gap: 1vw;
    margin-right: 3vw;
    @media screen and (max-width: 560px) {
        flex-direction: column-reverse;
        height: 100%;
        margin-right: 0;
        align-items: center;
        gap: 3vw;
    }
`;

const Timer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    width: 24%;
    padding: 1vw;
    @media screen and (max-width: 560px) {
        width: 90%;
        padding: 3vw;
        border-radius: 4vw;
        height: 100vw;
    }
`;

const TimerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    width: 100%;
    height: 100%;
    font-size: 1.5vw;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
    }
    span{
        font-size: 2vw;
        text-align: center;
        @media screen and (max-width: 560px) {
            font-size: 7vw;
        }
    }
`;

const TimerDisplay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5vw;
    width: 100%;
    height: 50%;
    background-color: ${(props) => props.$mainBgColor};
    border-radius: 0.5vw;
    button{
        background: none;
        border: none;
        cursor: pointer;
    }
    button:first-child{
        rotate: 180deg;
    }
    p{
        font-size: 5.7vw;
        font-weight: 700;
        margin: 0;
        @media screen and (max-width: 560px) {
            font-size: 18vw;
        }
        span{
            font-size: 3vw;
            width: 2vw;
            font-weight: 700;
            color: ${(props) => props.$color};
            @media screen and (max-width: 560px) {
                font-size: 9vw;
            }
        }
    }
`;

const ActiveButton = styled.button`
    background-color: ${(props) => props.$color};
    color: #F7F7F2;
    border: none;
    cursor: pointer;
    font-size: 1.5vw;
    width: 80%;
    height: 15%;
    border-radius: 0.5vw;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        font-size: 7vw;
        height: 15%;
        border-radius: 3vw;
    }
    &:hover{
        transform: scale(1.05);
       }
`;

const DifficulteContainer = styled.div`
    display: flex;  
    flex-direction: column;
    gap: 0.6vw;
    width: 67.8%;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    padding: 1vw;
    @media screen and (max-width: 560px) {
        width: 90%;
        padding: 3vw;
        border-radius: 4vw;
        gap: 1.5vw;
    }
`;

const DifficulteTitleContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 0.6vw;
    height: 6vw;
    @media screen and (max-width: 560px) {
        flex-direction: column;
        height: 100%;
        gap: 1.5vw;
    }
`;

const DifficulteTitle = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2vw;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    @media screen and (max-width: 560px) {
        width: 100%;
        font-size: 7vw;
        border-radius: 3vw;
        height: 20vw;
    }
`;

const DifficulteTitleJp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$color};
    width: 50%;
    border-radius: 0.5vw;
    color: #F7F7F2;
    @media screen and (max-width: 560px) {
        width: 100%;
        border-radius: 3vw;
        height: 20vw;
    }
`;

const DifficulteTitleFurigana = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 0.8vw;
    span{
        width: 2vw;
        @media screen and (max-width: 560px) {
            font-size: 2.5vw;
            width: 7vw;
        }
    }
`;

const DifficulteTitleKanji = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2vw;
    font-weight: 700;
    span{
        width: 2vw;
        transform: translateY(-0.3vw);
        @media screen and (max-width: 560px) {
            font-size: 7vw;
            width: 7vw;
            transform: translateY(-1vw);
        }
    }
`;

const DifficulteContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    height: 27vw;
    
    @media screen and (max-width: 560px) {
        height: 100%;
        gap: 1.5vw;
    }
`;

const DifficulteContent = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    height: 35%;
    padding: 0;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    position: relative; 
    pointer-events: ${(props) => props.disabled ? 'none' : 'auto'};
    opacity: ${(props) => props.disabled ? 0.5 : 1};
    &:hover{
        transform: ${(props) => props.disabled ? 'none' : 'scale(1.015)'};
        .xp{
            opacity: ${(props) => props.disabled ? 0 : 1};
        }
    }
    @media screen and (max-width: 560px) {
        flex-direction: column;
        width: 100%;
        font-size: 7vw;
        border-radius: 3vw;
        height: 60vw;
        position: relative;
        padding-top: 4vw;
        padding-bottom: 4vw;
    }
`;

const DifficulteContentLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    margin-left: 2vw;
    @media screen and (max-width: 560px) {
        flex-direction: column-reverse;
        margin-left: 0;  
    }
    img{
        width: 5vw;
        height: 5vw;
        @media screen and (max-width: 560px) {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 20vw;
            height: 20vw;
        }
    }
    span{
        font-size: 1.7vw;
        @media screen and (max-width: 560px) {
            font-size: 7vw;  
        }
    }
`;

export const DifficulteContentRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5vw;
    margin-right: 2vw;
    @media screen and (max-width: 560px) {
        font-size: 7vw; 
        gap: 1.5vw; 
    }
    span{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2vw;
        background-color: ${(props) => props.$color};
        width: 15vw;
        height: 7vw;
        border-radius: 0.5vw;
        color: ${(props) => props.$mainBgColor};
        @media screen and (max-width: 560px) {
            font-size: 5vw;  
            width: 100%;
            height: 10vw;
            border-radius: 3vw;
            padding-left: 5vw;
            padding-right: 5vw;
        }
    }
`;

const Xp = styled.p`
    position: absolute;
    font-size: 1.5vw;
    z-index: 1;
    left: 40%;
    color: ${(props) => props.$color};
    opacity: 0;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    @media screen and (max-width: 560px) {
        top: 5vw;
        left: 3.5vw;
        font-size: 5vw;
        color: ${(props) => props.$fontColor};
        font-weight: 700;
    }
`;

const LockLvlMask = styled.div`
    position: absolute;
    right: 0vw;
    top: 0vw;
    width: 100%;
    height: 100%;
    border-radius: 0.5vw;
    background-color: #858585c1;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
    }
    &::before{
        content: "${(props) => props.$lvl}";
        font-size: 1.5vw;
        color: #F7F7F2;
        position: absolute;
        bottom: 2.2vw;
        right: 47.89%;
        font-weight: bold;
        font-style: italic;
        @media screen and (max-width: 560px) {
            font-size: 4vw;
            bottom: 24vw;
            right: 46%;
        }
    }
`;

const DifficulteContentComponent = ({ $difficulte, $icon, children, $selectedDifficulte, $setSelectedDifficulte, $lvlLock }) => {
    const dispatch = useDispatch();
    const { fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const isSelected = $selectedDifficulte === $difficulte;
    const [difficulteBgColor, setDifficulteBgColor] = useState(isSelected ? mainBgColor : color);
    const [bgColor, setBgColor] = useState(isSelected ? color : mainBgColor);
    const [difficultefontColor, setDifficulteFontColor] = useState(isSelected ? color : '#F7F7F2');
    const [MainDifficulteFontColor, setMainDifficulteFontColor] = useState(isSelected ? mainBgColor : fontColor);

    const handleClick = () => {
        if ($lvlLock !== "lock") {
            $setSelectedDifficulte($difficulte);
            dispatch(setExerciceDifficulté($difficulte));
        }
    };

    useEffect(() => {
        setDifficulteBgColor(isSelected ? mainBgColor : color);
        setBgColor(isSelected ? color : mainBgColor);
        setDifficulteFontColor(isSelected ? color : '#F7F7F2');
        setMainDifficulteFontColor(isSelected ? mainBgColor : fontColor);
    }, [isSelected, mainBgColor, color, fontColor]);

    return (
        <DifficulteContent $mainBgColor={bgColor} $fontColor={MainDifficulteFontColor} onClick={handleClick}>
            <DifficulteContentLeft>
                <img src={$icon} />
                <span>{$difficulte}</span>
            </DifficulteContentLeft>
            <DifficulteContentRight $mainBgColor={difficultefontColor} $color={difficulteBgColor}>
                {children}
            </DifficulteContentRight>
        </DifficulteContent>
    );
};

DifficulteContentComponent.propTypes = {
    $difficulte: PropTypes.string.isRequired,
    $icon: PropTypes.string.isRequired,
    children: PropTypes.node,
    $selectedDifficulte: PropTypes.string.isRequired,
    $setSelectedDifficulte: PropTypes.func.isRequired,
    $lvlLock: PropTypes.string.isRequired,
};
export default function Difficulte() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const dispatch = useDispatch();
    const [timer, setTimer] = useState(useSelector((state) => state.parametersExercice.exerciceTimer));
    const [active, setActive] = useState(useSelector((state) => state.parametersExercice.exerciceTimerActive));
    const [timerBgColor, setTimerBgColor] = useState('#858585');
    const [selectedDifficulte, setSelectedDifficulte] = useState('');

    useEffect(() => {
        dispatch(setExerciceTimer(timer));
    }, [timer, dispatch]);

    const HandleActiveTimer = () => {
        const newActive = !active;
        setActive(newActive);
        dispatch(setExerciceTimerActive(newActive));
        setTimerBgColor(newActive ? color : '#858585');
    };

    const HandleAddTimer = () => {
        if (timer < 15) {
            setTimer(timer + 1);
        }
    };

    const HandleSubstractTimer = () => {
        if (timer > 1) {
            setTimer(timer - 1);
        }
    };

    const mobile = window.innerWidth < 560 ? '15vw' : '5vw';

    const hiraganaLvl = localStorage.getItem('hiraganaLvL');
    const katakanaLvl = localStorage.getItem('katakanaLvL');
    const kanjiLvl = localStorage.getItem('kanjiLvL');
    const vocabulaireLvl = localStorage.getItem('vocabulaireLvL');
    const nombreLvl = localStorage.getItem('nombreLvL');

    let lvlLock1 = "lock"
    let lvlLock2 = "lock"

    switch (location.pathname) {
        case '/Hiragana':
            if (hiraganaLvl >= '3') {
                lvlLock1 = "unlock";
            }
            if (hiraganaLvl >= '7') {
                lvlLock2 = "unlock";
            }
            break;
        case '/Katakana':
            if (katakanaLvl >= '3') {
                lvlLock1 = "unlock";
            }
            if (katakanaLvl >= '7') {
                lvlLock2 = "unlock";
            }
            break;
        case '/Kanji':
            if (kanjiLvl >= '3') {
                lvlLock1 = "unlock";
            }
            if (kanjiLvl >= '7') {
                lvlLock2 = "unlock";
            }
            break;
        case '/Vocabulaire':
            if (vocabulaireLvl >= '3') {
                lvlLock1 = "unlock";
            }
            if (vocabulaireLvl >= '7') {
                lvlLock2 = "unlock";
            }
            break;
        case '/Nombre':
            if (nombreLvl >= '3') {
                lvlLock1 = "unlock";
            }
            if (nombreLvl >= '7') {
                lvlLock2 = "unlock";
            }
            break;
        default:
            break;
    }



    return (
        <SectionDifficulte id='SectionDifficulte'>
            <Timer $bgColor={bgColor}>
                <TimerContainer $mainBgColor={mainBgColor} $fontColor={fontColor} >
                    <span>Temps par question</span>
                    <TimerDisplay $color={color} >
                        <button onClick={HandleAddTimer}><StrongArrowIcon width={mobile} height={mobile} color={color}></StrongArrowIcon></button>
                        <p>{timer}<span>S</span></p>
                        <button onClick={HandleSubstractTimer}><StrongArrowIcon width={mobile} height={mobile} color={color}></StrongArrowIcon></button>
                    </TimerDisplay>
                    <ActiveButton onClick={HandleActiveTimer} $color={timerBgColor}>
                        {!active ? 'Désactiver' : 'Activer'}
                    </ActiveButton>
                </TimerContainer>
            </Timer>
            <DifficulteContainer $bgColor={bgColor}>
                <DifficulteTitleContainer>
                    <DifficulteTitle $mainBgColor={mainBgColor} $fontColor={fontColor}>Difficulté</DifficulteTitle>
                    <DifficulteTitleJp $color={color}>
                        <DifficulteTitleFurigana>
                            <span>こん</span>
                            <span>なん</span>
                        </DifficulteTitleFurigana>
                        <DifficulteTitleKanji>
                            <span>困</span>
                            <span>難</span>
                        </DifficulteTitleKanji>
                    </DifficulteTitleJp>
                </DifficulteTitleContainer>
                <DifficulteContentContainer>
                    <DifficulteContentComponent $difficulte="Débutant" $icon={IconDifficulte1} $selectedDifficulte={selectedDifficulte} $setSelectedDifficulte={setSelectedDifficulte}>
                        <span>Hiragana/Katakana</span>
                        <span>Rōmaji</span>
                        <Xp className="xp" $difficulte="Débutant" $color={color} $fontColor={fontColor}>5xp</Xp>
                    </DifficulteContentComponent>
                    <DifficulteContentComponent $difficulte="Intermédiaire" $icon={IconDifficulte2} $selectedDifficulte={selectedDifficulte} $setSelectedDifficulte={setSelectedDifficulte} $lvlLock={lvlLock1} $disabled={lvlLock1 === "lock"}>
                        <span>Hiragana/Katakana</span>
                        <Xp className="xp" $difficulte="Intermédiaire" $color={color} $fontColor={fontColor}>6.25xp</Xp>
                        {lvlLock1 === "lock" && (
                            <LockLvlMask $lvl="lvl 3">
                                <LockIcon color={color} width={mobile} height={mobile} />
                            </LockLvlMask>
                        )}
                    </DifficulteContentComponent>
                    <DifficulteContentComponent $difficulte="Confirmer" $icon={IconDifficulte3} $selectedDifficulte={selectedDifficulte} $setSelectedDifficulte={setSelectedDifficulte} $lvlLock={lvlLock2} $disabled={lvlLock2 === "lock"}>
                        <Xp className="xp" $difficulte="Confirmer" $color={color} $fontColor={fontColor}>7.8xp</Xp>
                        {lvlLock2 === "lock" && (
                            <LockLvlMask $lvl="lvl 7">
                                <LockIcon color={color} width={mobile} height={mobile} />
                            </LockLvlMask>
                        )}
                    </DifficulteContentComponent>
                </DifficulteContentContainer>
            </DifficulteContainer>
        </SectionDifficulte>
    );
}