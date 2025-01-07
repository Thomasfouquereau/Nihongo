import styled from 'styled-components';
import { useSelector } from 'react-redux';
import iconQuete1 from '../../../../assets/icon-quete-1.svg';

const Container = styled.div`
    display: flex;
`

const Quete = styled.div`
    display: flex;
    flex-direction: column;
    width: 27%;
    height: 29vw;
    border-radius: 0.8vw;
    background-color: ${(props) => props.$bgColor};
    padding: 1vw;
`

const QueteBg = styled.div`
    background-color: ${(props) => props.$mainBgColor};
    border-radius: 0.5vw;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vw;
`

const HeaderQuete = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    color: ${(props) => props.$fontColor};
    margin-top: 1.5vw;
    span{
        font-size: 1vw;
        font-weight: 700;
        color:${(props) => props.$color} ;
    }
`

const CompteurQuete = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3vw;
    font-size: 1vw;
    font-weight: 700;
    color: ${(props) => props.$fontColor};
    :first-child{
        position: relative;
        &::before{
            content: "";
            bottom: -0.25vw;
            width: 1.3vw;
            height: 0.2vw;
            left: -0.3vw;
            position: absolute;
            background-color: ${(props) => props.$color};
            border-radius: 0.5vw;
        }
    }
`

const MainQuete = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 80%;
    margin-bottom: 1.5vw;
    img{
        width: 5vw;
        height: 5vw;
    }
    h2{
        font-size: 1.5vw;
        text-align: center;
    }
    p{
        font-size: 1vw;
        text-align: center;
        width: 80%;
    }
    button{
        background-color: ${(props) => props.$color};
        color: #fff;
        width: 80%;
        height: 3vw;
        border-radius: 0.5vw;
        font-size: 1.2vw;
    }
`

export default function DisplayQuete() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    return (
        <Container>
            <Quete $bgColor={bgColor}>
                <QueteBg $mainBgColor={mainBgColor}>
                    <HeaderQuete $fontColor={fontColor} $color={color}>
                        <CompteurQuete $fontColor={fontColor} $color={color}>
                            <p>0</p>
                            <p>10</p>
                        </CompteurQuete>
                        <span>+50xp</span>
                    </HeaderQuete>
                    <MainQuete $color={color}>
                        <img src={iconQuete1} />
                        <h2>Lorem ipsum dolor</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet odio finibus, tristique tortor vel, ultrices orci. </p>
                        <button>Accepter</button>
                    </MainQuete>
                </QueteBg>
            </Quete>
        </Container>
    );
}