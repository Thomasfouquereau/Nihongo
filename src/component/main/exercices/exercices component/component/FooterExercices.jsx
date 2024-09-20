import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import RefreshIcon from "../../../../../svg/RefreshIcon";

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5vw;
    background-color: ${(props) => props.$bgColor};
    width: 125.5%;
    height: 10%;
    padding: 1vw;
    border-radius: 0.8vw;
    @media screen and (max-width: 560px){
        width: 100%;
        padding: 3vw;
        border-radius: 4vw;
        height: 8vh;
        gap: 1.5vw;
    }
    button{
        border: none;
        height: 100%;
        cursor: pointer;
        border-radius: 0.5vw;
        font-size: 1.7vw;
        @media screen and (max-width: 560px){
            border-radius: 3vw;
            font-size: 5vw;
        }
        &:hover{
            background-color: #858585;
        }
    }
    button:nth-child(1){
        background-color: ${(props) => props.$mainBgColor};
        color: ${(props) => props.$fontColor};
        width: 25%;
        
    }
    button:nth-child(2){
        background-color: ${(props) => props.$color};
        color: #F7F7F2;
        width: 50%;
        font-weight: 600;
    }
    button:nth-child(3){
        background-color: ${(props) => props.$mainBgColor};
        color: ${(props) => props.$fontColor};
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 2vw;
            height: 2vw;
        }
    }
`;


export default function Footer({ onReload, onSkip, buttonDisabled  }) {
    const { bgColor, mainBgColor, fontColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const navigate = useNavigate();

    const mobile = window.innerWidth <= 560 ? '7vw' : '2.5vw';
    return (
        <FooterContainer $color={color} $bgColor={bgColor} $mainBgColor={mainBgColor} $fontColor={fontColor}>
            <button onClick={() => { onReload(); navigate(-1); }}>Retour</button>
            <button onClick={onSkip} disabled={buttonDisabled}>Passer</button>
            <button onClick={onReload}><RefreshIcon width={mobile} height={mobile} color={color}> </RefreshIcon ></button>
        </FooterContainer>
    );
}

Footer.propTypes = {
    onReload: PropTypes.func.isRequired,
    onSkip: PropTypes.func.isRequired,
    buttonDisabled: PropTypes.bool,
};