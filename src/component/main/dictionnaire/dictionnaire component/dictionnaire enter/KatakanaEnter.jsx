import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import iconCross from '../../../../../assets/icon-cross.svg';
import iconAudio from '../../../../../assets/icon-audio.svg';

const KatakanaEnterContainer = styled.div`
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
`

const KanaBottomContainer = styled.div`
    display: flex;
    gap: 0.6vw;
    max-width: 100%;
    height: 25%;
    max-height: 25%;
`

const KanaBottomAudioButton = styled.button`
    background-color: ${(props) => props.$color};
    border-radius: 0.5vw;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 2.5vw;
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
    button{
        font-size: 1.8vw;
        font-weight: 700;
        background-color: transparent;
        color: ${(props) => props.$fontColor};
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
    margin-left: calc(50% - 3vw);
    transform: translateX(-50%);
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
    }
`

export default function KatakanaEnter({ katakanaList }) {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

    return (
        <KatakanaEnterContainer >
            {Array.isArray(katakanaList) && katakanaList.length > 0 ? (
                katakanaList.map((katakana) => (
                    <KanaEnterItemContainer $bgColor={bgColor} key={katakana.id}>
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
                                <KanaBottomAudioButton  $color={color}><img src={iconAudio} /></KanaBottomAudioButton>
                                <KanaBottomButton  $fontColor={fontColor} $mainBgColor={mainBgColor}>{katakana.Accent && katakana.Accent.Dakuten === null ? <img src={iconCross} alt="icon" /> : <button>{katakana.Accent?.Dakuten}</button>}</KanaBottomButton>
                                <KanaBottomButton  $fontColor={fontColor} $mainBgColor={mainBgColor}>{katakana.Accent && katakana.Accent.Handakuten === null ? <img src={iconCross} alt="icon" /> : <button>{katakana.Accent?.Handakuten}</button>}</KanaBottomButton>
                            </KanaBottomContainer>
                            : katakana.Nom === 'Dakuten' ?
                                <KanaBottomContainer>
                                    <KanaBottomAudioButton  $color={color}><img src={iconAudio} /></KanaBottomAudioButton>
                                    <KanaBottomButton  $fontColor={fontColor} $mainBgColor={mainBgColor}>{katakana.Accent && katakana.Accent.Katakana === null ? <img src={iconCross} alt="icon" /> : <button>{katakana.Katakana}</button>}</KanaBottomButton>
                                    <KanaBottomButton  $fontColor={fontColor} $mainBgColor={mainBgColor}>{katakana.Accent && katakana.Handakuten || katakana.Handakuten === null ? <img src={iconCross} alt="icon" /> : <button>{katakana.Handakuten}</button>}</KanaBottomButton>
                                </KanaBottomContainer>
                                : katakana.Nom === 'Handakuten' ?
                                    <KanaBottomContainer>
                                        <KanaBottomAudioButton  $color={color}><img src={iconAudio} /></KanaBottomAudioButton>
                                        <KanaBottomButton  $fontColor={fontColor} $mainBgColor={mainBgColor}>{katakana.Accent && katakana.Accent.Katakana === null ? <img src={iconCross} alt="icon" /> : <button>{katakana.Katakana}</button>}</KanaBottomButton>
                                        <KanaBottomButton  $fontColor={fontColor} $mainBgColor={mainBgColor}>{katakana.Accent && katakana.Handakuten || katakana.Dakuten === null ? <img src={iconCross} alt="icon" /> : <button>{katakana.Dakuten}</button>}</KanaBottomButton>
                                    </KanaBottomContainer>
                                    : katakana.Type === 'Combinaison' ?
                                        <KanaBottomContainer>
                                            <KanaBottomAudioButton  $color={color}><img src={iconAudio} /></KanaBottomAudioButton>
                                            <KanaBottomButton  $fontColor={fontColor} $mainBgColor={mainBgColor}>{katakana.Accent && katakana.Accent.Katakana1 === null ? <img src={iconCross} alt="icon" /> : <button>{katakana.Katakana1}</button>}</KanaBottomButton>
                                            <KanaBottomButton  $fontColor={fontColor} $mainBgColor={mainBgColor}>{katakana.Accent && katakana.Accent.Katakana2 === null ? <img src={iconCross} alt="icon" /> : <button>{katakana.Katakana2}</button>}</KanaBottomButton>
                                        </KanaBottomContainer>
                                        :
                                        <KanaBottomContainer>
                                            <KanaBottomAudioButton  $color={color}><img src={iconAudio} /></KanaBottomAudioButton>
                                            <KanaBottomButton  $fontColor={fontColor} $mainBgColor={mainBgColor}><img src={iconCross} alt="icon" /> </KanaBottomButton>
                                            <KanaBottomButton  $fontColor={fontColor} $mainBgColor={mainBgColor}><img src={iconCross} alt="icon" /> </KanaBottomButton>
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