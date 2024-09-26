import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setExerciceTypeDeKana } from '../../../store';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1vw;
    width: calc(100% - 3vw);
    height: 100%;
    @media screen and (max-width: 560px) {
        flex-direction: column;
        height: 100%;
        max-width: 100vw;
        width: 100%;
        align-items: center;
        gap: 3vw;
    }
    
`;

const Button = styled.button`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5vw;
        width: 24.19%;
        height: 15vw;
        background-color: ${(props) => props.$bgColor};
        border-radius: 0.8vw;
        padding: 1vw;
        @media screen and (max-width: 560px) {
            width: calc(100% - 4vw);
            padding: 3vw;
            height: 45vw;
            border-radius: 4vw;
        }
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.5vw;
            width: 100%;
            height: 100%;
            background-color: ${(props) => props.$mainBgColor};
            border-radius: 0.5vw;
            transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
            @media screen and (max-width: 560px) {
                border-radius: 3vw;
                gap: 1.5vw;
            }
        }
        p {
            font-size: 2vw;
            color: ${(props) => props.$fontColor};
            text-transform: capitalize;
            @media screen and (max-width: 560px) {
                font-size: 7vw;
            }
        }
        p:first-child {
            color: ${(props) => props.$color};
            font-weight: 700;
        }
        &:hover {
            div{
                transform: scale(1.04);
            }
        }

`

export default function TypeDeKana() {
    const location = useLocation();
    const dispatch = useDispatch();
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const [selectedTypeDeKana, setSelectedTypeDeKana] = useState(null);
    const getText = () => {
        switch (location.pathname) {
            case '/Katakana':
                return {
                    normal: 'キ',
                    accents: 'ギ',
                    combinaison: 'ギャ',
                    tout: 'キギギャ',
                };
            case '/Hiragana':
                return {
                    normal: 'き',
                    accents: 'ぎ',
                    combinaison: 'きゃ',
                    tout: 'きぎきゃ',
                };
            default:
                return null;
        }
    };

    const text = getText();

    if (!text) {
        return <div>Chemin non pris en charge</div>;
    }



    const handelClick = (value) => {
        dispatch(setExerciceTypeDeKana(value));
        setSelectedTypeDeKana(value);
    }

    const getButtonBgColor = (type) => {
        return selectedTypeDeKana === type  ? color : mainBgColor;
    };

    const getButtonColor = (type) => {
        return selectedTypeDeKana === type ? mainBgColor : fontColor;
    }

    return (
        <Container >
            <Button onClick={() => handelClick('normal')} $bgColor={bgColor} $fontColor={fontColor} $color={getButtonColor('normal')} $mainBgColor={getButtonBgColor('normal')}>
                <div>
                    <p>{text.normal}</p>
                    <p>normal</p>
                </div>
            </Button>
            <Button onClick={() => handelClick('accents')} $bgColor={bgColor} $fontColor={fontColor} $color={getButtonColor('accents')} $mainBgColor={getButtonBgColor('accents')}>
                <div>
                    <p>{text.accents}</p>
                    <p>accents</p>
                </div>
            </Button>
            <Button onClick={() => handelClick('combinaison')} $bgColor={bgColor} $fontColor={fontColor} $color={getButtonColor('combinaison')} $mainBgColor={getButtonBgColor('combinaison')}>
                <div>
                    <p>{text.combinaison}</p>
                    <p>combinaison</p>
                </div>
            </Button>
            <Button onClick={() => handelClick('tout')} $bgColor={bgColor} $fontColor={fontColor} $color={getButtonColor('tout')} $mainBgColor={getButtonBgColor('tout')}>
                <div>
                    <p>{text.tout}</p>
                    <p>tout</p>
                </div>
            </Button>
        </Container>
    );
}