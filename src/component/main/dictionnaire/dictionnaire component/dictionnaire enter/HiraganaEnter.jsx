import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchText, toggleHiragana,setkanaType } from '../../../../store';
import { useLocation } from 'react-router-dom';

import CrossIcon from '../../../../../svg/CrossIcon';
import iconAudio from '../../../../../assets/icon-audio.svg';

const HiraganaEnterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6vw;
    width: calc(100% - 3vw);
`;

const KanaEnterItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    width: 22.39%;
    height: 20vw;
`;

const Romaji = styled.p`
    color: ${(props) => props.$fontColor};
    background-color: ${(props) => props.$mainBgColor};
    max-width: 100%;
    height: 25%;
    max-height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2vw;
    font-weight: 700;
    border-radius: 0.5vw;
    text-transform: uppercase;
`;

const KanaItemMainContainer = styled.p`
    color: ${(props) => props.$color};
    background-color: ${(props) => props.$mainBgColor};
    border-radius: 0.5vw;
    height: 50%;
    max-height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 3.8vw;
    font-weight: bold;
`;

const KanaBottomContainer = styled.div`
    display: flex;
    gap: 0.6vw;
    max-width: 100%;
    height: 25%;
    max-height: 25%;
`;

const KanaBottomAudioButton = styled.button`
    background-color: ${(props) => props.$color};
    border-radius: 0.5vw;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 2.5vw;
    }
`;

const KanaBottomButton = styled.div`
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    button {
        font-size: 1.8vw;
        font-weight: 700;
        background-color: transparent;
        color: ${(props) => props.$fontColor};
    }
    img {
        width: 3vw;
    }
`;

const ErrorMesaageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.5vw;
    width: 50%;
    height: 5vw;
    margin-left: 50%;
    transform: translateX(-50%);
    p {
        color: ${(props) => props.$color};
        background-color: ${(props) => props.$mainBgColor};
        width: 100%;
        font-size: 1.5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        border-radius: 0.5vw;
    }
`;

export default function HiraganaEnter({ hiraganaList }) {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const selectedHiragana = useSelector((state) => state.dataChoice.hiragana);
    const exerciceNumber = useSelector((state) => state.parametersExercice.exerciceNumber);
    const dispatch = useDispatch();
    const location = useLocation();
    const vide = "";

    const handleButtonClick = (hiragana) => {
        dispatch(setSearchText(hiragana));
        dispatch(setkanaType(vide));
    };

    const handleHiraganaClick = (hiragana) => {
        const isSelected = selectedHiragana.includes(hiragana);
        if (isSelected || selectedHiragana.length < exerciceNumber) {
            if (location.pathname === '/choisir-ses/Hiragana') {
                dispatch(toggleHiragana(hiragana));
            }
        }
    };

    return (
        <HiraganaEnterContainer>
            {Array.isArray(hiraganaList) && hiraganaList.length > 0 ? (
                hiraganaList.map((hiragana) => (
                    <KanaEnterItemContainer
                        id="item"
                        $bgColor={bgColor}
                        key={hiragana.id}
                        onClick={() => handleHiraganaClick(hiragana)}
                        style={{ backgroundColor: selectedHiragana.includes(hiragana) ? '#858585' : bgColor, cursor: 'pointer' }}
                    >
                        <Romaji $fontColor={fontColor} $mainBgColor={mainBgColor}>{hiragana.Romaji}</Romaji>
                        <KanaItemMainContainer $color={color} $mainBgColor={mainBgColor}>
                            {hiragana.Type === 'Hiragana' ? hiragana.Hiragana
                                : hiragana.Nom === 'Dakuten' ? hiragana.Dakuten
                                    : hiragana.Nom === 'Handakuten' ? hiragana.Handakuten
                                        : hiragana.Type === 'Combinaison' ? hiragana.Hiragana
                                            : hiragana.Handakuten}
                        </KanaItemMainContainer>
                        {hiragana.Type === 'Hiragana' ? (
                            <KanaBottomContainer>
                                <KanaBottomAudioButton $color={color}><img src={iconAudio} /></KanaBottomAudioButton>
                                <KanaBottomButton onClick={() => handleButtonClick(hiragana.Accent?.Dakuten)} $fontColor={fontColor} $mainBgColor={mainBgColor}>
                                    {hiragana.Accent?.Dakuten === null ? <CrossIcon color={color}></CrossIcon> : <button>{hiragana.Accent?.Dakuten}</button>}
                                </KanaBottomButton>
                                <KanaBottomButton onClick={() => handleButtonClick(hiragana.Accent?.Handakuten)} $fontColor={fontColor} $mainBgColor={mainBgColor}>
                                    {hiragana.Accent?.Handakuten === null ? <CrossIcon color={color}></CrossIcon> : <button>{hiragana.Accent?.Handakuten}</button>}
                                </KanaBottomButton>
                            </KanaBottomContainer>
                        ) : hiragana.Nom === 'Dakuten' ? (
                            <KanaBottomContainer>
                                <KanaBottomAudioButton $color={color}><img src={iconAudio} /></KanaBottomAudioButton>
                                <KanaBottomButton onClick={() => handleButtonClick(hiragana.Hiragana)} $fontColor={fontColor} $mainBgColor={mainBgColor}>
                                    {hiragana.Accent?.Hiragana === null ? <CrossIcon color={color}></CrossIcon> : <button>{hiragana.Hiragana}</button>}
                                </KanaBottomButton>
                                <KanaBottomButton onClick={() => handleButtonClick(hiragana.Handakuten)} $fontColor={fontColor} $mainBgColor={mainBgColor}>
                                    {hiragana.Handakuten === null ? <CrossIcon color={color}></CrossIcon> : <button>{hiragana.Handakuten}</button>}
                                </KanaBottomButton>
                            </KanaBottomContainer>
                        ) : hiragana.Nom === 'Handakuten' ? (
                            <KanaBottomContainer>
                                <KanaBottomAudioButton $color={color}><img src={iconAudio} /></KanaBottomAudioButton>
                                <KanaBottomButton onClick={() => handleButtonClick(hiragana.Hiragana)} $fontColor={fontColor} $mainBgColor={mainBgColor}>
                                    {hiragana.Accent?.Hiragana === null ? <CrossIcon color={color}></CrossIcon> : <button>{hiragana.Hiragana}</button>}
                                </KanaBottomButton>
                                <KanaBottomButton onClick={() => handleButtonClick(hiragana.Dakuten)} $fontColor={fontColor} $mainBgColor={mainBgColor}>
                                    {hiragana.Dakuten === null ? <CrossIcon color={color}></CrossIcon> : <button>{hiragana.Dakuten}</button>}
                                </KanaBottomButton>
                            </KanaBottomContainer>
                        ) : hiragana.Type === 'Combinaison' ? (
                            <KanaBottomContainer>
                                <KanaBottomAudioButton $color={color}><img src={iconAudio} /></KanaBottomAudioButton>
                                <KanaBottomButton onClick={() => handleButtonClick(hiragana.Hiragana1)} $fontColor={fontColor} $mainBgColor={mainBgColor}>
                                    {hiragana.Accent?.Hiragana1 === null ? <CrossIcon color={color}></CrossIcon> : <button>{hiragana.Hiragana1}</button>}
                                </KanaBottomButton>
                                <KanaBottomButton $fontColor={fontColor} $mainBgColor={mainBgColor}>
                                    {hiragana.Accent?.Hiragana2 === null ? <CrossIcon color={color}></CrossIcon> : <button>{hiragana.Hiragana2}</button>}
                                </KanaBottomButton>
                            </KanaBottomContainer>
                        ) : (
                            <KanaBottomContainer>
                                <KanaBottomAudioButton $color={color}><img src={iconAudio} /></KanaBottomAudioButton>
                                <KanaBottomButton $fontColor={fontColor} $mainBgColor={mainBgColor}><CrossIcon color={color}></CrossIcon></KanaBottomButton>
                                <KanaBottomButton $fontColor={fontColor} $mainBgColor={mainBgColor}><CrossIcon color={color}></CrossIcon></KanaBottomButton>
                            </KanaBottomContainer>
                        )}
                    </KanaEnterItemContainer>
                ))
            ) : (
                <ErrorMesaageContainer $bgColor={bgColor} $color={color} $mainBgColor={mainBgColor}>
                    <p>Aucun résultat</p>
                </ErrorMesaageContainer>
            )}
        </HiraganaEnterContainer>
    );
}

HiraganaEnter.propTypes = {
    hiraganaList: PropTypes.array.isRequired,
};