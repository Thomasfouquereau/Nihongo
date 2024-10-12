import styled from "styled-components"
import XpProgressBar from "../../lvl/component/XpProgressBar";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserInfoHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.$bgColor};
    padding: 1vw;
    border-radius: 0.8vw;
    width: 60%;
    height: calc(100% - 2vw);
    gap: 0.6vw;
    @media screen and (max-width: 560px) {
        width: 90%;
        padding: 3vw;
        gap: 1.8vw;
        border-radius: 3vw;
        height: 50%;
    }
    p {
        background-color: ${(props) => props.$mainBgColor};
        color: ${(props) => props.$fontColor};
        border-radius: 0.6vw;
        width: 75%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4vw;
        font-weight: 700;
        @media screen and (max-width: 560px) {
            font-size: 7vw;
            border-radius: 3vw;
        }
    }
`

const UserLevel = styled(Link)`
    background-color: ${(props) => props.$color};
    border-radius: 0.6vw;
    width: 25%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 1vw;
    padding-right: 1vw;
    @media screen and (max-width: 560px) {
        border-radius: 3vw;
        width: 30%;
        padding-left: 2vw;
        padding-right: 2vw;
    }
    
    p{
        background-color: ${(props) => props.$color};
        color: #F7F7F2; 
        height: 70%;
        width: 100%;
        font-size: 5vw;
        font-weight: 700;
        display: flex;
        align-items: baseline;
        margin-bottom: -0.7vw;
        @media screen and (max-width: 560px) {
            font-size: 10vw;
            margin-bottom: -5vw;
        }
        span{
            font-size: 2vw;
            font-weight: 400;
            @media screen and (max-width: 560px) {
                font-size: 4vw;   
            }
        }
    }
`

export default function UserInfoHeader() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const userName = localStorage.getItem('userName');
    const lvl = Number(useSelector((state) => state.lvl.userLvL)) || 0;
    const xp = Number(useSelector((state) => state.lvl.userXp));
    const xpToNextLevel = Number(useSelector((state) => state.lvl.userXpToNextLvL));
    const heightBar = window.innerWidth < 560 ? '3vw' : '1.2vw';
    const widthBar = '100%';
    const colorBar = mainBgColor;
    const bgColorBar = bgColor;

    return (
        <UserInfoHeaderContainer $bgColor={bgColor} $color={color} $fontColor={fontColor} $mainBgColor={mainBgColor}>
            <p>{userName}</p>
            <UserLevel $color={color} to='/lvl/user'>
                <p>{lvl}<span>lvl</span></p>
                <div>
                    <XpProgressBar
                        xp={xp}
                        xpToNextLevel={xpToNextLevel}
                        height={heightBar}
                        width={widthBar}
                        color={colorBar}
                        bgColor={bgColorBar}
                    />
                </div>
            </UserLevel>
        </UserInfoHeaderContainer>
    )
}
