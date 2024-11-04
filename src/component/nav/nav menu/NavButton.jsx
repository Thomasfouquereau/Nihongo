import styled from "styled-components";
import proptypes from 'prop-types';
import { useSelector } from 'react-redux';

const Button = styled.button`
    display: none;
    @media screen and (max-width: 560px) {
        background-color: ${(props) => props.$color};
        color: #F7F7F2;
        border: 0.4vw solid ${(props) => props.$mainBgColor };
        padding: 1vw;
        border-radius: 0.5vw;
        font-size: 2.5vw;
        font-weight: 700;
        position: fixed;
        font-size: 7vw;
        padding: 3vw;
        border-radius: 3vw;
        display: block;
        bottom: 4.7vw;
        right: 5vw;
        width: 13vh;
        height: 9.2vh;
    }
   `


export default function NavButton({ onButtonClick }) {
    const { color } = useSelector((state) => state.color);
    const { mainBgColor } = useSelector((state) => state.mode);
    return (
        <Button $color={color} $bgColor={mainBgColor} onClick={onButtonClick}>Menu</Button>
    );
}

NavButton.propTypes = {
    onButtonClick: proptypes.func.isRequired,
}