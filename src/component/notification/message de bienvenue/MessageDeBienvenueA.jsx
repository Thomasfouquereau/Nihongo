import styled from "styled-components"
import { useSelector } from 'react-redux';

const Container = styled.div`
    top:0;
    left: 0;
    z-index: 101;
    &::before{
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #929291dd;
        z-index: 100;
    }
`

const MessageDeBienvenueContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0.1vw solid #F7F7F2;
    background-color: ${(props) => props.$bgColor};
    width: 30vw;
    height: 28.3vw;
    border-radius: 0.8vw;
    padding: 1vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5vw;
    z-index: 101;
    color: ${(props) => props.$fontColor};
    @media screen and (max-width: 560px) {
        width: 90vw;
        height: 95vw;
        border-radius: 4vw;
        gap: 1.5vw;
        padding: 3vw;
    }
    h1{
        background-color: ${(props) => props.$mainBgColor};
        width: 100%;
        height: 9vw;
        font-size: 5vw;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.5vw;
        @media screen and (max-width: 560px) {
            height: 27vw;
            font-size: 15vw;
            border-radius: 3vw;
        }
    }
    p{
        font-size: 1vw;
        background-color: ${(props) => props.$mainBgColor};
        padding: 1vw;
        border-radius: 0.5vw;
        @media screen {
            font-size: 3.5vw;   
            border-radius: 3vw;
            padding: 3vw;
        }
        span{
            font-size: 1.5vw;
            font-weight: 700;
            color: ${(props) => props.$color};
            @media screen and (max-width: 560px) {
                font-size: 5vw;
            }
        }
    }
`

const UserNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5vw;
    width: 100%;
    @media screen and (max-width: 560px) {
        gap: 1.5vw;
    }
    p{
        font-size: 1.5vw;
        background-color: ${(props) => props.$mainBgColor};
        border-radius: 0.5vw;
        width:calc( 100% - 2vw);
        color: ${(props) => props.$color};
        font-weight: 700;
        @media screen and (max-width: 560px) {
            font-size: 4.5vw;
            border-radius: 3vw;
            width:calc( 100% - 6vw);
        }
    }
    input{
        height: 3vw;
        border: none;
        border-radius: 0.5vw;
        font-size: 1.2vw;
        width:calc( 100% - 1.6vw);
        padding-left: 1vw;
        background-color: ${(props) => props.$mainBgColor};
        color: ${(props) => props.$fontColor};
        border: 0.3vw solid ${(props) => props.$color};
        @media screen and (max-width: 560px) {
            height: 11vw;
            border-radius: 3vw;
            font-size: 4vw;
            width:calc( 100% - 4.5vw);
            padding-left: 3vw;
        }
    }
    input::placeholder{
        font-size: 1.2vw;
        color: ${(props) => props.$fontColor};
        @media screen and (max-width: 560px) {
            font-size: 4vw;
        }
    }
    div{
        display: flex;
        gap: 0.5vw;
        width: 100%;
        @media screen and (max-width: 560px) {
            gap: 1.5vw;
        }
        button{
            height: 3vw;
            border: none;
            border-radius: 0.5vw;
            background-color: ${(props) => props.$mainBgColor};
            color: ${(props) => props.$fontColor};
            font-size: 1.2vw;
            cursor: pointer;
            @media screen and (max-width: 560px) {
                height: 11vw;
                border-radius: 3vw;
                font-size: 4vw;
            }
        }
        button:nth-child(1){
            width: 70%;
            font-weight: 700;
        }
        button:nth-child(2){
            background-color: ${(props) => props.$color};
            color:#F7F7F2;
            font-weight: 700;
            width: 40%;
        }
    }
`

export default function MessageDeBienvenueA() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

    const handleGuest = () => {
        localStorage.setItem('userName', 'Invité');
        window.location.reload();
    }

    const handleUserName = () => {
        const userName = document.querySelector('input').value;
        localStorage.setItem('userName', userName);
        window.location.reload();
    }

    return (
        <Container>
            <MessageDeBienvenueContainer $mainBgColor={mainBgColor} $fontColor={fontColor} $color={color} $bgColor={bgColor}>
                <h1>Bienvenue</h1>
                <p>
                    <span>Bienvenue dans l&apos;alpha de nihongo </span><br/>
                    sachez que tout votre progression sera garder dans votre navigateur si vous changez de navigateur vous perdrez votre progression
                </p>
                <UserNameContainer $mainBgColor={mainBgColor} $fontColor={fontColor} $color={color} $bgColor={bgColor}>
                    <p>Ajouter un nom utilisateur</p>
                    <input type="text" placeholder="Entrez votre nom d'utilisateur"  />
                    <div>
                        <button onClick={handleGuest}>Continuer en tant qu&apos;invité</button>
                        <button onClick={handleUserName}>Valider</button>
                    </div>
                </UserNameContainer>
            </MessageDeBienvenueContainer>
        </Container>
    )
}