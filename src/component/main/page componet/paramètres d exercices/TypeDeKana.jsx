import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setExerciceTypeDeKana } from '../../../store';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1vw;
    width: calc(100% - 3vw);
    height: 100%;
    button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5vw;
        width: 24.2%;
        height: 15vw;
        background-color: ${(props) => props.$bgColor};
        border-radius: 0.8vw;
        padding: 1vw;
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
        }
        p {
            font-size: 2vw;
            color: ${(props) => props.$fontColor};
            text-transform: capitalize;
        }
        p:first-child {
            color: ${(props) => props.$color};
            font-weight: 700;
        }
        &:hover {
            div{
                background-color: #858585;
            }
        }
    }
`;

export default function TypeDeKana() {
    const location = useLocation();
    const dispatch = useDispatch();
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

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
        console.log('click', value);
        dispatch(setExerciceTypeDeKana(value));
    }
    
    return (
        <Container $bgColor={bgColor} $mainBgColor={mainBgColor} $fontColor={fontColor} $color={color}>
            <button onClick={() => handelClick('normal')}>
                <div>
                    <p>{text.normal}</p>
                    <p>normal</p>
                </div>
            </button>
            <button onClick={() => handelClick('accents')}>
                <div>
                    <p>{text.accents}</p>
                    <p>accents</p>
                </div>
            </button>
            <button onClick={() => handelClick('combinaison')}>
                <div>
                    <p>{text.combinaison}</p>
                    <p>combinaison</p>
                </div>
            </button>
            <button onClick={() => handelClick('tout')}>
                <div>
                    <p>{text.tout}</p>
                    <p>tout</p>
                </div>
            </button>
        </Container>
    );
}