import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../../store';
import styled from 'styled-components';
import { useState } from 'react';

import iconLightModeLight from '../../../assets/icon-light-mode-light.svg';
import iconLightModeDark from '../../../assets/icon-light-mode-dark.svg';
import iconDarkModeLight from '../../../assets/icon-dark-mode-light.svg';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 11vw;
    @media screen and (max-width: 560px) {
        width: 30vw;
    }
`

const Button = styled.button`
    background-color: ${(props) => props.$isActive ? props.$color : props.$bgColor};
    color: ${(props) => props.$isActive ? '#fff' : '#000'};
    width: 5vw;
    height: 4.3vw;
    border-radius: 0.8vw;
    img{
        width: 2vw;
        height: 2vw;
        @media screen and (max-width: 560px) {
            width: 6vw;
            height: 6vw;
        }
    }
    @media screen and (max-width: 560px) {
        width: 15vw;
        height: 12vw;
        margin: 1vw;
        border-radius: 3vw;
    }
`;

export default function Mode() {
    const dispatch = useDispatch();
    const [activeMode, setActiveMode] = useState(localStorage.getItem('mode') || 'light');

    const handleModeChange = (mode) => {
        setActiveMode(mode);
        dispatch(setMode(mode));
    };

    const { bgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

    return (
        <Container>
            <Button
                $bgColor={bgColor}
                $color={color}
                $isActive={activeMode === 'light'}
                onClick={() => handleModeChange('light')}
            >
                <img src={activeMode === 'light' ? iconLightModeLight : iconLightModeDark} />
            </Button>
            <Button
                $bgColor={bgColor}
                $color={color}
                $isActive={activeMode === 'dark'}
                onClick={() => handleModeChange('dark')}
            >
                <img src={iconDarkModeLight} />
            </Button>
        </Container>
    );
}