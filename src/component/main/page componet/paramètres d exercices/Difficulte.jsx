import { useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setExerciceDifficulté } from '../../../store';
import { setExerciceTimerActive, setExerciceTimer } from '../../../store';


import IconDifficulte1 from '../../../../assets/icon-difficulte-1.svg';
import IconDifficulte2 from '../../../../assets/icon-difficulte-2.svg';
import IconDifficulte3 from '../../../../assets/icon-difficulte-3.svg';
import StrongArrowIcon from '../../../../svg/StrongArrowIcon'; 

const SectionDifficulte = styled.div`
    display: flex;
    width: 100%;
    height: 35vw;
    gap: 1vw;
    margin-right: 3vw;
`;

const Timer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    width: 24%;
    padding: 1vw;
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
    span{
        font-size: 2vw;
        text-align: center;
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
        img{
            width: 5vw;
            height: 3.5vw;
        }
    }
    button:first-child{
        rotate: 180deg;
    }
    p{
        font-size: 5.7vw;
        font-weight: 700;
        margin: 0;
        
        span{
            font-size: 3vw;
            width: 2vw;
            font-weight: 700;
            color: ${(props) => props.$color};
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
    &:hover{
        background-color: #858585;
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
`;

const DifficulteTitleContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 0.6vw;
    height: 6vw;
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
`;

const DifficulteTitleFurigana = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 0.8vw;
    span{
        width: 2vw;
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
    }
`;

const DifficulteContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    height: 27vw;
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
    &:hover{
        background-color: #858585;
    }
`;

const DifficulteContentLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    margin-left: 2vw;
    img{
        width: 5vw;
        height: 5vw;
    }
    span{
        font-size: 1.7vw;
    }
`;

export const DifficulteContentRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5vw;
    margin-right: 2vw;
    span{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2vw;
        background-color: ${(props) => props.$color};
        width: 15vw;
        height: 7vw;
        border-radius: 0.5vw;
        color: #F7F7F2;
    }
`;

const DifficulteContentComponent = ({ difficulte, icon, children }) => {
    const dispatch = useDispatch();
    const { fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
 

    const handleClick = () => {
        dispatch(setExerciceDifficulté(difficulte));
    };

    return (
        <DifficulteContent $mainBgColor={mainBgColor} $fontColor={fontColor} onClick={handleClick}>
            <DifficulteContentLeft>
                <img src={icon} />
                <span>{difficulte}</span>
            </DifficulteContentLeft>
            <DifficulteContentRight $mainBgColor={mainBgColor} $color={color}>
                {children}
            </DifficulteContentRight>
        </DifficulteContent>
    );
};

DifficulteContentComponent.propTypes = {
    difficulte: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default function Difficulte() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const dispatch = useDispatch();
    const [timer, setTimer] = useState(useSelector((state) => state.parametersExercice.exerciceTimer));
    const [active, setActive] = useState(useSelector((state) => state.parametersExercice.exerciceTimerActive));

    useEffect(() => {
        dispatch(setExerciceTimer(timer));
    }, [timer, dispatch]);

    const HandleActiveTimer = () => {
        setActive(!active);
        dispatch(setExerciceTimerActive(!active));
    }

    const HandleAddTimer = () => {
        setTimer(timer + 1);
    }

    const HandleSubstractTimer = () => {
        setTimer(timer - 1);
    }

    return (
        <SectionDifficulte id='SectionDifficulte'>
            <Timer $bgColor={bgColor}>
                <TimerContainer $mainBgColor={mainBgColor} $fontColor={fontColor} >
                    <span>Temps par question</span>
                    <TimerDisplay $color={color} >
                        <button onClick={HandleAddTimer}><StrongArrowIcon color={color}></StrongArrowIcon></button> 
                        <p>{timer}<span>S</span></p>
                        <button onClick={HandleSubstractTimer}><StrongArrowIcon color={color}></StrongArrowIcon></button>
                    </TimerDisplay>
                    <ActiveButton onClick={HandleActiveTimer} $color={color}>
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
                    <DifficulteContentComponent difficulte="Débutant" icon={IconDifficulte1}>
                        <span>Hiragana/Katakana</span>
                        <span>Rōmaji</span>
                    </DifficulteContentComponent>
                    <DifficulteContentComponent difficulte="Intermédiaire" icon={IconDifficulte2}>
                        <span>Hiragana/Katakana</span>
                    </DifficulteContentComponent>
                    <DifficulteContentComponent difficulte="Confirmer" icon={IconDifficulte3} />
                </DifficulteContentContainer>
            </DifficulteContainer>
            
        </SectionDifficulte>
    );
}