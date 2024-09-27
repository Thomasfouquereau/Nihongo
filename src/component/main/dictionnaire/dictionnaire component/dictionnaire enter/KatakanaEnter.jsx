import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchText, toggleKatakana, setkanaType } from '../../../../store';
import { useLocation } from 'react-router-dom';

import CrossIcon from '../../../../../svg/CrossIcon';
import iconAudio from '../../../../../assets/icon-audio.svg';

const KatakanaEnterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6vw;
    width: calc(100% - 3vw);
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
        width: calc(100% - 4vw);
    }
`;

const KanaEnterItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    width: 22.37%;
    height: 20vw;
    @media screen and (max-width: 560px) {
        width: 100%;
        height: 80vw;
        border-radius: 4vw;
        padding: 3vw;
        gap: 1.5vw;
    }
`

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
    @media screen and (max-width: 560px) {
        font-size: 7vw;
        border-radius: 3vw;
    }
`

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
    @media screen and (max-width: 560px) {
        font-size: 15vw;
        border-radius: 3vw;
    }
`

const KanaBottomContainer = styled.div`
    display: flex;
    gap: 0.6vw;
    max-width: 100%;
    height: 25%;
    max-height: 25%;
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
    }
`

const KanaBottomAudioButton = styled.button`
    background-color: ${(props) => props.$color};
    border-radius: 0.5vw;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
    }
    img{
        width: 2.5vw;
        @media screen and (max-width: 560px) {
            width: 10vw;
        }
    }
`

const KanaBottomButton = styled.div`
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
    }
    button{
        font-size: 1.8vw;
        font-weight: 700;
        background-color: transparent;
        color: ${(props) => props.$fontColor};
        @media screen and (max-width: 560px) {
            font-size: 7vw;
        }
    }
    img{
        width: 3vw;
    }
`

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
    margin-left: 50% ;
    transform: translateX(-50%);
    @media screen and (max-width: 560px) {
        min-width: 93%;    
        height: 50vw;
        border-radius: 3vw;
        padding: 3vw;
        gap: 1.5vw;
    }
    p{
        color: ${(props) => props.$color};
        background-color: ${(props) => props.$mainBgColor};
        width: 100%;
        font-size: 1.5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        border-radius: 0.5vw;
        @media screen and (max-width: 560px) {
            font-size: 7vw;
            border-radius: 3vw;
        }
    }
`

export default function KatakanaEnter({ katakanaList }) {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const selectedKatakana = useSelector((state) => state.dataChoice.katakana);
    const exerciceNumber = useSelector((state) => state.parametersExercice.exerciceNumber);
    const dispatch = useDispatch();
    const location = useLocation();
    const vide = "";
    
    const handleButtonClick = (katakana) => {
        dispatch(setSearchText(katakana));
        dispatch(setkanaType(vide));
    }

    const handleKatakanaClick = (katakana) => {
        const isSelected = selectedKatakana.includes(katakana);
        if (isSelected || selectedKatakana.length < exerciceNumber) {
            if (location.pathname === '/choisir-ses/Katakana') {
                dispatch(toggleKatakana(katakana));
            }
        }
    };

    const mobile = window.innerWidth <= 560 ? '10vw' : '3.5vw';

    return (
        <KatakanaEnterContainer >
            {Array.isArray(katakanaList) && katakanaList.length > 0 ? (
                katakanaList.map((katakana) => (
                    <KanaEnterItemContainer
                        $bgColor={bgColor}
                        key={katakana.id}
                        onClick={() => handleKatakanaClick(katakana)}
                        style={{ backgroundColor: selectedKatakana.includes(katakana) ? color : bgColor, cursor: 'pointer' }}
                    >
                        <Romaji $fontColor={fontColor} $mainBgColor={mainBgColor}>{katakana.Romaji}</Romaji>
                        <KanaItemMainContainer $color={color} $mainBgColor={mainBgColor}>
                            {katakana.Type === 'Katakana' ? katakana.Katakana
                                : katakana.Nom === 'Dakuten' ? katakana.Dakuten
                                    : katakana.Nom === 'Handakuten' ? katakana.Handakuten
                                        : katakana.Type === 'Combinaison' ? katakana.Katakana
                                            : katakana.Handakuten}
                        </KanaItemMainContainer>
                        {katakana.Type === 'Katakana' ?
                            <KanaBottomContainer>
                                <KanaBottomAudioButton $color={color}><img src={iconAudio} /></KanaBottomAudioButton>
                                <KanaBottomButton onClick={() => handleButtonClick(katakana.Accent?.Dakuten)} $fontColor={fontColor} $mainBgColor={mainBgColor}>
                                    {katakana.Accent?.Dakuten === null ? <CrossIcon width={mobile} height={mobile} color={color}></CrossIcon> :
                                        <button >{katakana.Accent?.Dakuten}</button>}
                                </KanaBottomButton>
                                <KanaBottomButton onClick={() => handleButtonClick(katakana.Accent?.Handakuten)} $fontColor={fontColor} $mainBgColor={mainBgColor}>
                                    {katakana.Accent?.Handakuten === null ? <CrossIcon width={mobile} height={mobile} color={color}></CrossIcon> :
                                        <button >{katakana.Accent?.Handakuten}</button>}
                                </KanaBottomButton>
                            </KanaBottomContainer>
                            : katakana.Nom === 'Dakuten' ?
                                <KanaBottomContainer>
                                    <KanaBottomAudioButton $color={color}><img src={iconAudio} /></KanaBottomAudioButton>
                                    <KanaBottomButton onClick={() => handleButtonClick(katakana.Katakana)} $fontColor={fontColor} $mainBgColor={mainBgColor}>
                                        {katakana.Accent && katakana.Accent.Katakana === null ? <CrossIcon width={mobile} height={mobile} color={color}></CrossIcon> :
                                            <button >{katakana.Katakana}</button>}
                                    </KanaBottomButton>
                                    <KanaBottomButton onClick={() => handleButtonClick(katakana.Handakuten)} $fontColor={fontColor} $mainBgColor={mainBgColor}>
                                        {katakana.Handakuten === null ? <CrossIcon width={mobile} height={mobile} color={color}></CrossIcon> :
                                            <button >{katakana.Handakuten}</button>}
                                    </KanaBottomButton>
                                </KanaBottomContainer>
                                : katakana.Nom === 'Handakuten' ?
                                    <KanaBottomContainer>
                                        <KanaBottomAudioButton $color={color}><img src={iconAudio} /></KanaBottomAudioButton>
                                        <KanaBottomButton onClick={() => handleButtonClick(katakana.Katakana)} $fontColor={fontColor} $mainBgColor={mainBgColor}>
                                            {katakana.Accent && katakana.Accent.Katakana === null ? <CrossIcon width={mobile} height={mobile} color={color}></CrossIcon> :
                                                <button >{katakana.Katakana}</button>}
                                        </KanaBottomButton>
                                        <KanaBottomButton onClick={() => handleButtonClick(katakana.Dakuten)} $fontColor={fontColor} $mainBgColor={mainBgColor}>
                                            {katakana.Accent && katakana.Handakuten || katakana.Dakuten === null ? <CrossIcon width={mobile} height={mobile} color={color}></CrossIcon> :
                                                <button >{katakana.Dakuten}</button>}
                                        </KanaBottomButton>
                                    </KanaBottomContainer>
                                    : katakana.Type === 'Combinaison' ?
                                        <KanaBottomContainer>
                                            <KanaBottomAudioButton $color={color}><img src={iconAudio} /></KanaBottomAudioButton>
                                            <KanaBottomButton onClick={() => handleButtonClick(katakana.Katakana1)} $fontColor={fontColor} $mainBgColor={mainBgColor}>
                                                {katakana.Accent && katakana.Accent.Katakana1 === null ? <CrossIcon width={mobile} height={mobile} color={color}></CrossIcon> :
                                                    <button >{katakana.Katakana1}</button>}
                                            </KanaBottomButton>
                                            <KanaBottomButton $fontColor={fontColor} $mainBgColor={mainBgColor}>
                                                {katakana.Accent && katakana.Accent.Katakana2 === null ? <CrossIcon width={mobile} height={mobile} color={color}></CrossIcon> :
                                                    <button >{katakana.Katakana2}</button>}
                                            </KanaBottomButton>
                                        </KanaBottomContainer>
                                        :
                                        <KanaBottomContainer>
                                            <KanaBottomAudioButton $color={color}><img src={iconAudio} /></KanaBottomAudioButton>
                                            <KanaBottomButton $fontColor={fontColor} $mainBgColor={mainBgColor}><CrossIcon width={mobile} height={mobile} color={color}></CrossIcon> </KanaBottomButton>
                                            <KanaBottomButton $fontColor={fontColor} $mainBgColor={mainBgColor}><CrossIcon width={mobile} height={mobile} color={color}></CrossIcon> </KanaBottomButton>
                                        </KanaBottomContainer>
                        }
                    </KanaEnterItemContainer>
                ))
            ) : (
                <ErrorMesaageContainer $bgColor={bgColor} $color={color} $mainBgColor={mainBgColor}>
                    <p>Aucun résultat</p>
                </ErrorMesaageContainer>

            )}
        </KatakanaEnterContainer>
    );
}

KatakanaEnter.propTypes = {
    katakanaList: PropTypes.array.isRequired,
};