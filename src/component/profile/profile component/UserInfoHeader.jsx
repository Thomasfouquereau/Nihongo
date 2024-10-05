import styled from "styled-components"
import XpProgressBar from "../../lvl/component/XpProgressBar";
import { useSelector } from 'react-redux';

const UserInfoHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.$bgColor};
    padding: 1vw;
    border-radius: 0.8vw;
    width: 60%;
    height: 100%;
    gap: 0.6vw;
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
    }
`

const UserLevel = styled.div`
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
    p{
        background-color: ${(props) => props.$color};
        color: #F7F7F2; 
        height: 70%;
        width: 100%;
        font-size: 5vw;
        font-weight: 700;
        display: flex;
        align-items: baseline;
        margin-bottom: -1vw;
        span{
            font-size: 2vw;
            font-weight: 400;
        }
    }

`



export default function UserInfoHeader() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

    const userName = localStorage.getItem('userName');
    const lvl = '36';
    const heightBar = '30px';
    const widthBar = '100%';
    const colorBar = mainBgColor;
    const bgColorBar = bgColor;

    return (
        <UserInfoHeaderContainer $bgColor={bgColor} $color={color} $fontColor={fontColor} $mainBgColor={mainBgColor}>
            <p>{userName}</p>
            <UserLevel $color={color}>
                <p>{lvl}<span>lvl</span></p>
                <div>
                    <XpProgressBar
                        xp={68}
                        xpToNextLevel={150}
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
