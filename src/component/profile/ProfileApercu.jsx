import styled from "styled-components"
import { useSelector } from 'react-redux';

import ProfileIconDark from "../../assets/icon-profile-dark.svg";
import ProfileIconLight from "../../assets/icon-profile-light.svg";

const Container = styled.div`
    position: absolute;
    top: 1vw;
    left: 3.1vw;
    display: flex;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    &:hover{
        transform: scale(1.06);
    }
    @media screen and (max-width: 560px) {
        top: 4vw;
    }
`;

const ProfileContainerImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.$bgColor};
    width: 5vw;
    height: 4.3vw;
    border-radius: 0.8vw;
    z-index: 1;
    @media screen and (max-width: 560px) {
            width: 13vw;
            height: 12vw;
            border-radius: 3vw;
        }
    img{
        width: 2vw;
        height: 2.5vw;
        @media screen and (max-width: 560px) {
            width: 6vw;
            height: 6vw;
        }
    }
`;

const ProfileContainerinfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p{
        font-size: 1vw;
        color: #F7F7F2;
        background-color:  ${(props) => props.$color};
        height: 2vw;
        border-radius: 1vw;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 1.5vw;
        margin-left: -1.5vw;
        font-weight: 700;
        @media screen and (max-width: 560px) {
            height:6vw; 
            border-radius: 3vw;
            padding-left: 4.5vw;
            margin-left: -4.5vw;
            font-size: 3vw;
        }
    }
    p:nth-child(1){
        width: 100%;
        padding-right: 1vw;
        padding-left: 1.8vw;
        @media screen and (max-width: 560px) {
            padding-right: 3vw;
            padding-left: 4.5vw;
        }
    }
    p:nth-child(2){
        width: 5.5vw;
        @media screen and (max-width: 560px) {
            width: 15vw;
        }
        span{
            margin-right: 0.3vw;
        }
    }
`;


export default function ProfileApercu() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const activeMode = localStorage.getItem('mode') || 'light';

    const userName = localStorage.getItem('userName');

    return (
        <Container  $mainBgColor={mainBgColor} $fontColor={fontColor} >
            <ProfileContainerImg $bgColor={bgColor}>
                <img src={activeMode === 'light' ? ProfileIconLight : ProfileIconDark} alt="Profile" />
            </ProfileContainerImg>
            <ProfileContainerinfo $color={color}>
                <p>{userName}</p>
                <p><span>lvl</span>1</p>
            </ProfileContainerinfo>
        </Container>
    )
}