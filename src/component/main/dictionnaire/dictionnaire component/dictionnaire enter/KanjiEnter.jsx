import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleKanji } from '../../../../store';
import { useLocation } from 'react-router-dom';

const KanjiEnterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6vw;
    width: calc(100% - 3vw);
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
        width: calc(100% - 4vw);;
    }
`

const KanjiEnterItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    width: 22.38%;
    height: 21 vw;
    @media screen and (max-width: 560px) {
        width: 100%;
        height: 80vw;
        border-radius: 4vw;
        padding: 3vw;
        gap: 1.5vw;
    }
`
const KunReading = styled.p`
    color: ${(props) => props.$fontColor};
    background-color: ${(props) => props.$mainBgColor};
    max-width: 100%;
    height: 25%;
    max-height: 25%;
    display: flex;
    align-items: center;
    padding-left: 1vw;
    font-size: 1vw;
    border-radius: 0.5vw;
    @media screen and (max-width: 560px) {
        font-size: 5vw;
        padding-left: 3vw;
        padding-top: 1vw;
        padding-bottom: 1vw;
        border-radius: 3vw;
    }
    span{
        font-weight: bold;
        margin-right: 0.5vw;
        font-style: italic;
        @media screen and (max-width: 560px) {
            margin-right: 1.5vw;
        }
    }
`

const KanjiEnterItemMainContainer = styled.div`
    color: ${(props) => props.$fontColor};
    background-color: ${(props) => props.$mainBgColor};
    border-radius: 0.5vw;
    height: 50%;
    max-height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
    }
    h2{
        font-size: 3.8vw;
        font-weight: bold;
        color: ${(props) => props.$color};
        @media screen and (max-width: 560px) {
            font-size: 13vw;
        }
    }
    p{
        font-size: 1.2vw;
        position: absolute;
        text-transform: capitalize;
        font-weight: 700;
        text-align: center;
        @media screen and (max-width: 560px) {
            font-size: 5vw;
        }
    }
    p:first-child{
        top: 0.5vw;
        right: 1vw;
        text-align: center;
        @media screen and (max-width: 560px) {
            top: 1.5vw;
            right: 3vw;
        }
    }
    p:last-child{
        bottom: 0.3vw;
        left:50% ;
        transform: translateX(-50%);
        @media screen and (max-width: 560px) {
            bottom: 2.5vw;
        }
    }
`

const KanjiEnterItemBottomContainer = styled.div`
    display: flex;
    gap: 0.6vw;
    height: 25%;
    width: 100%;
    p{
        font-size: 1vw;
        border-radius: 0.5vw;
        display: flex;
        align-items: center;
        @media screen and (max-width: 560px) {
            font-size: 5vw;
            border-radius: 3vw;
        }
        span{
            font-weight: bold;
            margin-right: 0.5vw;
            font-style: italic;
            @media screen and (max-width: 560px) {
                margin-right: 1.5vw;
            }
        }
    }
    p:first-child{
        background-color: ${(props) => props.$color};
        color:#F7F7F2;
        width: 30%;
        justify-content: center;
    }
    p:last-child{
        background-color: ${(props) => props.$mainBgColor};
        color: ${(props) => props.$fontColor};
        max-width: 75%;
        width: 70%;
        padding-left: 1vw;
        padding-right: 1vw;
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

export default function KanjiEnter({ kanjiList }) {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const selectedKanji = useSelector((state) => state.dataChoice.kanji);
    const exerciceNumber = useSelector((state) => state.parametersExercice.exerciceNumber);
    const dispatch = useDispatch();
    const location = useLocation();

    const handleKanjiClick = (kanji) => {
        const isSelected = selectedKanji.includes(kanji);
        if (isSelected || selectedKanji.length < exerciceNumber) {
            if (location.pathname === '/choisir-ses/Kanji') {
                dispatch(toggleKanji(kanji));
            }
        }
    };

    return (
        <KanjiEnterContainer>
            {Array.isArray(kanjiList) && kanjiList.length > 0 ? (
                kanjiList.map((kanji) => (
                    <KanjiEnterItemContainer
                        key={kanji.id}
                        $bgColor={bgColor}
                        onClick={() => handleKanjiClick(kanji)}
                        style={{ backgroundColor: selectedKanji.includes(kanji) ? '#858585' : bgColor, cursor: 'pointer' }}
                    >
                        <KunReading $fontColor={fontColor} $mainBgColor={mainBgColor}><span>Kun</span> {kanji.KunReading.join(', ')}</KunReading>
                        <KanjiEnterItemMainContainer $fontColor={fontColor} $mainBgColor={mainBgColor} $color={color}>
                            {kanji.SecondaryMeaning && <p>{kanji.SecondaryMeaning}</p>}
                            <h2>{kanji.Kanji}</h2>
                            <p>{kanji.Meaning}</p>
                        </KanjiEnterItemMainContainer>
                        <KanjiEnterItemBottomContainer $fontColor={fontColor} $mainBgColor={mainBgColor} $color={color}>
                            <p><span>JLPT</span> {kanji.JLPTLevel}</p>
                            <p><span>On</span> {kanji.OnReading.join(', ')}</p>
                        </KanjiEnterItemBottomContainer>
                    </KanjiEnterItemContainer>
                ))
            ) : (
                <ErrorMesaageContainer $bgColor={bgColor} $color={color} $mainBgColor={mainBgColor}>
                    <p>Aucun résultat</p>
                </ErrorMesaageContainer>
            )}
        </KanjiEnterContainer>
    );
}

KanjiEnter.propTypes = {
    kanjiList: PropTypes.array.isRequired,
};