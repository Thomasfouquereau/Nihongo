import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleVocabulaire } from '../../../../store';
import { useLocation } from 'react-router-dom';



const VocabulaireEnterContainer = styled.div`
    display: flex;
    gap: 0.6vw;
    flex-wrap: wrap;
    width:calc(100% - 3vw);
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
        width: calc(100% - 4vw);
    }
`

const VocabulaireEnterItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    padding: 1vw;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.5vw;
    width: 47.5%;
    height: 20vw;
    @media screen and (max-width: 560px) {
        width: 100%;
        height: 80vw;
        border-radius: 4vw;
        padding: 3vw;
        gap: 1.5vw;
    }
`

const VocabulaireEnterItemTop = styled.div`
    display: flex;
    gap: 0.6vw;
    height: 33%;
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
    }
    p{
        border-radius: 0.5vw;
        font-size: 1.7vw;
        background-color: ${(props) => props.$mainBgColor};
        color: ${(props) => props.$fontColor};
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 100%;
        text-align: center;
        padding-left: 2vw;
        padding-right: 2vw;
        @media screen and (max-width: 560px) {
            font-size: 6vw;
            padding-left: 3vw;
            padding-right: 3vw;
            border-radius: 3vw;
        }
        span{
            position: absolute;
            font-size: 0.8vw;
            font-weight: 400;
            color: #F7F7F2;
            background-color: ${(props) => props.$color};
            border-radius: 1vw;
            padding: 0.2vw 1vw;
            bottom: 0.3vw;
            left: 0.3vw;
            @media screen and (max-width: 560px) {
                font-size: 2.9vw;
                padding: 1vw 3vw;
                border-radius: 0vw 3vw 0 3vw ;
                bottom: 0vw;
                left: 0vw;
            }
        }
    }
    p:nth-child(1){
        max-width: 45%;
        width:45%;
        font-weight: 700;
    }
    p:nth-child(2){
        max-width: 55%;
        width:55%;
    }
`

const VocabulaireEnterItemMiddle = styled.div`
    display: flex;
    gap: 0.6vw;
    height: 40%;
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
    }
    p:nth-child(1){
        max-width: 70%;
        width:70%;
        text-transform: capitalize;
        font-weight: 700;
    }
    p:nth-child(2){
        max-width: 40%;
        width:40%;
        font-style: italic;
    }
    p{
        width: 50%;
        border-radius: 0.5vw;
        font-size: 1.5vw;
        background-color: ${(props) => props.$mainBgColor};
        color: ${(props) => props.$fontColor};
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 100%;
        text-align: center;
        @media screen and (max-width: 560px) {
            font-size: 6vw;
            padding-left: 3vw;
            padding-right: 3vw;
            border-radius: 3vw;
        }
        span{
            position: absolute;
            font-size: 0.8vw;
            font-weight: 400;
            color: #F7F7F2;
            background-color: ${(props) => props.$color};
            border-radius: 1vw;
            padding: 0.2vw 1vw;
            top: 0.3vw;
            left: 0.3vw;
            @media screen and (max-width: 560px) {
                font-size: 2.9vw;
                padding: 1vw 3vw;
                border-radius:  3vw 0vw  3vw 0 ;
                top: 0vw;
                left: 0vw;
            }
        }
        
    }
`

const VocabulaireEnterItemBottom = styled.div`
    display: flex;
    gap: 0.6vw;
    height: 23%;
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
    }
    p{
        width: 20%;
        border-radius: 0.5vw;
        font-size: 1.5vw;
        background-color: ${(props) => props.$color};
        color: #F7F7F2;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 100%;
        @media screen and (max-width: 560px) {
            font-size: 6vw;
            padding-left: 3vw;
            padding-right: 3vw;
            border-radius: 3vw;
        }
        span{
            font-style: italic;
            margin-right:0.5vw ;
            font-weight: 700;
        }
    }
    div{
        width: 80%;
        border-radius: 0.5vw;
        font-size: 1vw;
        background-color: ${(props) => props.$mainBgColor};
        color: ${(props) => props.$fontColor};
        display: flex;
        align-items: center;
        position: relative;
        height: 100%;
        padding-left: 0.6vw;
        padding-right: 0.6vw;
        gap: 0.6vw;
        @media screen and (max-width: 560px) {
            font-size: 3vw;
            border-radius: 3vw;
            gap: 1.5vw;
        }
        span{
            background-color: ${(props) => props.$color};
            color: #F7F7F2;
            height: 80%;
            padding-left: 1vw;
            padding-right: 1vw;
            border-radius: 0.5vw;
            display: flex;
            align-items: center;
            text-transform: capitalize;
            @media screen and (max-width: 560px) {
                border-radius: 3vw;
                padding-left: 3vw;
                padding-right: 3vw;
                border-radius: 3vw;
                text-align : center;
            }
        }
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
`;

export default function VocabulaireEnter({ vocabulaireList = [] }) {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const selectedVocabulaire = useSelector((state) => state.dataChoice.vocabulaire);
    const exerciceNumber = useSelector((state) => state.parametersExercice.exerciceNumber);
    const dispatch = useDispatch();
    const location = useLocation();

    const handleVocabulaireClick = (vocabulaire) => {
        const isSelected = selectedVocabulaire.includes(vocabulaire);
        if (isSelected || selectedVocabulaire.length < exerciceNumber) {
            if (location.pathname === '/choisir-ses/Vocabulaire') {
                dispatch(toggleVocabulaire(vocabulaire));
            }
        }
    };

    return (
        <VocabulaireEnterContainer>
            {Array.isArray(vocabulaireList) && vocabulaireList.length > 0 ? (
                vocabulaireList.map((vocabulaire) => (
                    <VocabulaireEnterItem
                        $bgColor={bgColor}
                        key={vocabulaire.id}
                        onClick={() => handleVocabulaireClick(vocabulaire)}
                        style={{ backgroundColor: selectedVocabulaire.includes(vocabulaire) ? color : bgColor, cursor: 'pointer' }}
                    >
                        <VocabulaireEnterItemTop $color={color} $fontColor={fontColor} $mainBgColor={mainBgColor}>
                            <p>{vocabulaire.kanji} <span>Kanji</span></p>
                            <p>{vocabulaire.hiragana} <span>Hiragana</span></p>
                        </VocabulaireEnterItemTop>
                        <VocabulaireEnterItemMiddle $color={color} $fontColor={fontColor} $mainBgColor={mainBgColor}>
                            <p>{vocabulaire.francais} <span>Français</span></p>
                            <p>{vocabulaire.Romaji} <span>Romaji</span></p>
                        </VocabulaireEnterItemMiddle>
                        <VocabulaireEnterItemBottom $color={color} $fontColor={fontColor} $mainBgColor={mainBgColor}>
                            <div>
                                <span>{Array.isArray(vocabulaire.categorie) && vocabulaire.categorie[0]}</span>
                                {Array.isArray(vocabulaire.categorie) && vocabulaire.categorie[1] && (
                                    <span>{vocabulaire.categorie[1]}</span>
                                )}
                                {Array.isArray(vocabulaire.categorie) && vocabulaire.categorie[2] && (
                                    <span>{vocabulaire.categorie[2]}</span>
                                )}
                            </div>
                            <p><span>JLPT</span>{vocabulaire.niveau}</p>
                        </VocabulaireEnterItemBottom>
                    </VocabulaireEnterItem>
                ))
            ) : (
                <ErrorMesaageContainer $fontColor={fontColor} $bgColor={bgColor} $color={color} $mainBgColor={mainBgColor}>
                    <p>Aucun résultat</p>
                </ErrorMesaageContainer>
            )}
        </VocabulaireEnterContainer>
    );
}

VocabulaireEnter.propTypes = {
    vocabulaireList: PropTypes.array.isRequired,
};