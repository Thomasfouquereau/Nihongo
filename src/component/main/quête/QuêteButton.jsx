import styled from "styled-components"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import QueteIcon from "../../../svg/QueteIcon";

const Container = styled(Link)`
    position: absolute;
    top: 1vw;
    right: 20.8vw;
    background-color: ${(props) => props.$mainBgColor};
    color: #fff;
    width: 5vw;
    height: 4.3vw;
    border-radius: 0.8vw;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
        width: 2.5vw;
        height: 2.5vw;
        border-radius: 50%;
        @media screen and (max-width: 560px) {
            width: 6vw;
            height: 6vw;
        }
    }
`

export default function QuêteButton() {

    const { bgColor, mainBgColor } = useSelector((state) => state.mode);

    return (
        <Container to="/quete" $mainBgColor={bgColor} >
            <QueteIcon color={mainBgColor} BgColor={bgColor} />
        </Container>
    );
}