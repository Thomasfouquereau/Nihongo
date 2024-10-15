import { useSelector } from 'react-redux';
import styled from 'styled-components';

const UserLvlUpMessageContainer = styled.div`
    display: ${props => props.$display};
    position: absolute;
    top : 12.5vw;
    right: 11.3vw;
    z-index: 100;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        top : 49vw;
        right: 8vw; 
    }
    span{
        background-color: ${props => props.$color};
        color: #F7F7F2;
        padding: 0.5vw 1vw;
        font-size: 1.3vw;
        font-weight: 700;
        border-radius: 0.6vw;
        margin-bottom: -1vw;
        margin-left: -2.5vw;
        @media screen and (max-width: 560px) {
            font-size: 3.7vw;
            border-radius: 2vw;
            padding: 2vw 3vw;
            margin-bottom: -3vw;
            margin-left: -8vw;
        }
    }
    p{
        background-color: ${props => props.$bgColor};
        color: ${props => props.$mainBgColor};
        padding: 0.5vw;
        width: 8vw;
        font-size: 2vw;
        font-weight: 700;
        border-radius: 0.8vw;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 560px) {
            font-size: 5vw;
            border-radius: 3vw;
            padding: 2vw;
            width: 24vw;
        }
    }
`

export default function UserLvlUpMessage() {
    const { bgColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

    const lvlUpName = useSelector((state) => state.lvlUp.lvlName);
    const lvlUp = useSelector((state) => state.lvlUp.lvlUp);
    
    let displayMessage = 'none';
    if (lvlUp === true) {
        displayMessage = 'block';
    }

    const lvl = useSelector((state) => state.lvl[`${lvlUpName}LvL`]);

    return (
        <UserLvlUpMessageContainer $mainBgColor={mainBgColor} $color={color} $bgColor={bgColor}  $display={displayMessage} >
            <span>lvl up</span>
            <p>lvl {lvl}</p>
        </UserLvlUpMessageContainer>
    );
}