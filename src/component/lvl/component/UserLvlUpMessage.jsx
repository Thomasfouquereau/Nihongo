import { useSelector } from 'react-redux';
import styled from 'styled-components';

const UserLvlUpMessageContainer = styled.div`
    display: ${props => props.$display};
    position: absolute;
    top : 12vw;
    right: 11.3vw;
    z-index: 100;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    span{
        background-color: ${props => props.$color};
        color: #F7F7F2;
        padding: 0.5vw 1vw;
        font-size: 1.3vw;
        font-weight: 700;
        border-radius: 0.6vw;
        margin-bottom: -1vw;
        margin-left: -2.5vw;
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
    }
`

export default function UserLvlUpMessage() {
    const { bgColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

    const lvlUpName = useSelector((state) => state.lvlUp.lvlName);
    const lvlUp = useSelector((state) => state.lvlUp.lvlUp);
    let displayMessage = '  none';
    if (lvlUp === true) {
        displayMessage = '  block';
    }

    console.log('name',lvlUpName);
    console.log('lvlUp',lvlUp);
    console.log('displayMessage',displayMessage);

    const lvl = useSelector((state) => state.lvl[`${lvlUpName}LvL`]);

    console.log('lvl',lvl);

    return (
        <UserLvlUpMessageContainer $mainBgColor={mainBgColor} $color={color} $bgColor={bgColor}  $display={displayMessage} >
            <span>lvl up</span>
            <p>lvl {lvl}</p>
        </UserLvlUpMessageContainer>
    );
}