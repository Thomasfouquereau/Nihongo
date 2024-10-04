import { Link } from "react-router-dom";
import Mode from "./mode/Mode";
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import iconColorLight from '../../assets/icon-color-light-mode.svg';
import iconColorDark from '../../assets/icon-color-dark-mode.svg';

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
    background-color: ${(props) => props.$isActive ? props.$color : props.$bgColor};
    color: ${(props) => props.$isActive ? '#fff' : '#000'};
    width: 5vw;
    height: 4.3vw;
    border-radius: 0.8vw;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    &:hover{
        transform: scale(1.1);
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

export default function Custome() {
    const mode = useSelector(state => state.mode);
    const { bgColor } = useSelector((state) => state.mode);
    return (
        <Container>
            <Mode />
            <Button $bgColor={bgColor}  to="/color">
                <img src={mode.mode === 'light' ? iconColorLight : iconColorDark}/>
            </Button>
        </Container>
    );
}