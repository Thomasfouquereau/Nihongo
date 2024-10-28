import { Link } from "react-router-dom";
import Mode from "./mode/Mode";
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import iconColorLight from '../../assets/icon-color-light-mode.svg';
import iconColorDark from '../../assets/icon-color-dark-mode.svg';
import LockIcon from '../../svg/LockIcon';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 16.7vw;
    margin-bottom: 1.3vw;
    position: absolute;
    right: 3.1vw;
    top: 1vw;
    @media screen and (max-width: 560px) {
        width: 45vw;
        top: 3vw;
    }
`;

const Button = styled(Link)`
    background-color: ${(props) => props.$bgColor};
    width: 5vw;
    height: 4.3vw;
    border-radius: 0.8vw;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    position: relative; 
    pointer-events: ${(props) => props.$disabled ? 'none' : 'auto'};
    &:hover{
        transform: ${(props) => props.$disabled ? 'none' : 'scale(1.1)'};
    }
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

const LockLvlMask = styled.div`
    position: absolute;
    right: 0vw;
    top: 0vw;
    width: 5vw;
    height: 4.3vw;
    border-radius: 0.8vw;
    background-color: #858585c1;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 560px) {
        width: 13vw;
        height: 12vw;
        border-radius: 3vw;
    }
    &::before{
        content: 'lvl 3';
        font-size: 1vw;
        color: #F7F7F2;
        position: absolute;
        bottom: 0.9vw;
        right: 1.5vw;
        @media screen and (max-width: 560px) {
            font-size: 3vw;
            bottom: 2.2vw;
            right: 3.5vw;
        }
    }
`;

export default function Custome() {
    const mode = useSelector(state => state.mode);
    const { color } = useSelector((state) => state.color);
    const { bgColor } = useSelector((state) => state.mode);

    const mobile = window.innerWidth < 560 ? '9vw' : '3vw';
    
    const userLvl = localStorage.getItem('userLvL');
    let lvlLock = "lock"

    if (userLvl >= '3') {
        lvlLock = "unlock"
    }

    return (
        <Container>
            <Mode />
            <Button $bgColor={bgColor} to={lvlLock === "lock" ? "#" : "/color"} $disabled={lvlLock === "lock"}>
                <img src={mode.mode === 'light' ? iconColorLight : iconColorDark} />
                {lvlLock === "lock" && (
                    <LockLvlMask>
                        <LockIcon color={color} width={mobile} height={mobile} />
                    </LockLvlMask>
                )}
            </Button>
        </Container>
    );
}