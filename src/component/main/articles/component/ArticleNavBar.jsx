import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import HomeIcon from '../../../../svg/HomeIcon';
import BackIcon from '../../../../svg/BackIcon';

const Container = styled.div`
    width: 93.8%;
    display: flex;
    justify-content: end;
    @media screen and (max-width: 560px){
        width: 90%;
    }
`

const ContainerNav = styled.div`
    background-color: ${(props) => props.$bgColor};
    padding: 1vw;
    display: flex;
    gap: 1vw;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.8vw;
    width: 15.5%;
    @media screen and (max-width: 560px){
        width: 54%;
        padding: 2.3vw 2.5vw;
        gap: 3vw;
        border-radius: 4vw;
    }
`

const BackButton = styled.div`
    display: flex;
    gap: 1vw;
    align-items: center;
    padding: 1vw;
    cursor: pointer;
    border-radius: 0.5vw;
    background-color: ${(props) => props.$mainBgColor};
    @media screen and (max-width: 560px){
        border-radius: 3vw;
        padding: 3vw 4vw;
    }
    a{
        font-size: 1.5vw;
        color: ${(props) => props.$fontColor};
        @media screen and (max-width: 560px){
            font-size: 5vw;
        }
    }
`

const HomeButton = styled(Link)`
    padding: 1vw;
    cursor: pointer;
    border-radius: 0.5vw;
    background-color: ${(props) => props.$mainBgColor};
    @media screen and (max-width: 560px){
        border-radius: 3vw;
        padding: 3vw 4vw;
    }
`


export default function ArticlesNavBar() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const mobile = window.innerWidth <= 560 ? '7vw' : '2vw';

    let navigate = useNavigate();

    return (
        <Container>
            <ContainerNav $bgColor={bgColor}>
                <BackButton $fontColor={fontColor} $mainBgColor={mainBgColor}>
                    <BackIcon color={color} width={mobile} height={mobile} />
                    <Link onClick={() => navigate(-1)} >Retour</Link>
                </BackButton>
                <HomeButton to={'/'} $mainBgColor={mainBgColor}>
                    <HomeIcon color={color} mainBgColor={mainBgColor} width={mobile} height={mobile} />
                </HomeButton>
            </ContainerNav>
        </Container>
    );
}