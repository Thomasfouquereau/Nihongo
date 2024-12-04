import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import iconSkinLight from '../../../assets/icon-skin-light.svg';
import iconSkinDark from '../../../assets/icon-skin-dark.svg';
import iconColorLight from '../../../assets/icon-color-light-mode.svg';
import iconColorDark from '../../../assets/icon-color-dark-mode.svg';

const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const BackLink = styled(Link)`
    font-size: 1.5vw;
    color: #F7F7F2;
    font-weight: bold;
    border-radius: 0.8vw;
    padding: 1vw 2vw;
    cursor: pointer;
    position: absolute;
    top: 1vw;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        top: 20vw;
        padding: 3vw 6vw;
        font-size: 4.5vw;
        right: 5vw;
        border-radius: 2vw;
    }
    &:hover{
        transform: scale(1.05);
    }
`

const CustomNavLinkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7vw;
    width: 100%;
    height: 100vh;
    @media screen and (max-width: 560px) {
        flex-direction: column;
        gap: 10vw;
        height: 80vh;
        margin-top: 25vw;
    }
`

const CustomNavLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    height: 50vh;
    border-radius: 0.8vw;
    padding: 1vw;
    background-color: ${(props) => props.$bgColor};
    color: ${(props) => props.$fontColor};
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    @media screen and (max-width: 560px) {
        height: 25vh;
        padding: 3vw;
        border-radius: 4vw;
        width: 80%;
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 3vw;
        align-items: center;
        background-color: ${(props) => props.$mainBgColor};
        width: 100%;
        height: 100%;
        border-radius: 0.5vw;
        img{
            width: 7vw;
            height: 7vw;
        }
        p{
            font-size: 2vw;
        }
        @media screen and (max-width: 560px) {
            height: 25vh;
            border-radius: 3vw;
            gap: 3vw;
            img{
                width: 15vw;
                height: 15vw;
            }
            p{
                font-size: 5vw;
            }
        }
    }
    &:hover{
        transform: scale(1.05);
    }
`

const ComingSoon = styled.div`
    position: relative;
    &::after{
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 0.5vw;
        background-color: #858585c1;
        @media screen and (max-width: 560px) {
            border-radius: 3vw;  
        }
    }
    &::before{
        content: 'a venir';
        font-size: 2vw;
        text-transform: uppercase;
        font-weight: bold;
        position: absolute;
        color: #F7F7F2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        @media screen and (max-width: 560px) {
            font-size: 5vw;    
        }
    }
`

export default function CustomNav() {
    const mode = useSelector(state => state.mode);
    const { color } = useSelector((state) => state.color);
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const navigate = useNavigate();

    return (
        <NavContainer>
            <BackLink style={{ backgroundColor: color }} onClick={() => navigate(-1)}>Retour</BackLink>
            <CustomNavLinkContainer>
                <CustomNavLink $bgColor={bgColor} $fontColor={fontColor} $mainBgColor={mainBgColor} to={'/color'}>
                    <div>
                        <img src={mode.mode === 'light' ? iconColorDark : iconColorLight} />
                        <p>Couleur</p>
                    </div>
                </CustomNavLink>
                <CustomNavLink $bgColor={bgColor} $fontColor={fontColor} $mainBgColor={mainBgColor}>
                    <ComingSoon>
                        <img src={mode.mode === 'light' ? iconSkinLight : iconSkinDark} />
                        <p>Skin</p>
                    </ComingSoon>
                </CustomNavLink>
            </CustomNavLinkContainer>
        </NavContainer>
    )
}