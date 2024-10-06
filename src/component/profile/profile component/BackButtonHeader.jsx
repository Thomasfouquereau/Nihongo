import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import BackIcon from "../../../svg/BackIcon";

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 34%;
    height: calc(100% - 2vw);
    background-color: ${(props) => props.$bgColor};
    padding: 1vw;
    border-radius: 0.8vw;
    @media screen and (max-width: 560px) {
        padding: 3vw;
        border-radius: 3vw;
        width: 90%;
        height: 50%;
    }
`

const BackButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    height: 100%;
    max-width: 100%;
    width: 100%;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
    }
    &:hover{
        transform: scale(1.04);
    }
    div{
        display: flex;
        flex-direction: column;
        margin-right: 2vw;
        @media screen and (max-width: 560px) {
            margin-right: 5vw;
        }
        span:nth-child(1){
            font-size: 0.7vw;
            @media screen and (max-width: 560px) {
                font-size: 2.5vw;
            }
        }
        span:nth-child(2){
            font-weight: 700;
            font-size: 1.5vw;
            @media screen and (max-width: 560px) {
                font-size: 5vw;
            }
        }
        span{
            font-size: 1.2vw;
            @media screen and (max-width: 560px) {
                font-size: 4vw;
            }
        }
    }
    img{
        width: 4vw;
        height: 4vw;
        @media screen and (max-width: 560px) {
            margin-left: 5vw;
        }
    }
`

export default function BackButtonHeader() {
    const { mainBgColor, fontColor, bgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const mobile = window.innerWidth < 560 ? '14vw' : '5vw';
    const navigate = useNavigate();
    return (
        <Container $bgColor={bgColor}>
            <BackButton $mainBgColor={mainBgColor} $fontColor={fontColor} onClick={() => navigate(-1)}>
                <BackIcon width={mobile} height={mobile} color={color}></BackIcon>
                <div>
                    <span>もど</span>
                    <span>戻る</span>
                    <span>Retour</span>
                </div>
            </BackButton>
        </Container>
    )
}