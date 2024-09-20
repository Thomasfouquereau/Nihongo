import { Link } from 'react-router-dom'; 
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Error404Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1vw;
    height: 100vh;
    text-align: center;
    width: calc( 100% - 17vw);
    color: ${(props) => props.$fontColor};
    @media screen and (max-width: 560px) {
        width: 100%;
        gap: 3vw;
    }
    h1{
        font-size: 5vw;
        color: ${(props) => props.$color};
        @media screen and (max-width: 560px) {
            font-size: 25vw;
        }
    }
    p{
        font-size: 2vw;
        margin-bottom: 2vw;
        @media screen and (max-width: 560px) {
            font-size: 7vw;
        }
    }
    a{
        font-size: 2vw;
        color:  #F7F7F2;
        background-color: ${(props) => props.$color};
        padding: 1vw;
        border-radius: 0.5vw;
        @media screen and (max-width: 560px) {
            font-size: 7vw;
            padding: 3vw;
            border-radius: 3vw;
        }
    }
`

const Error404 = () => {
    const { fontColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    return (
        <Error404Container $fontColor={fontColor} $color={color} className="error404-container">
            <h1>404</h1>
            <p>Je crois que tu t&apos;es perdu là</p>
            <Link to="/">Retour à l&apos;accueil</Link>
        </Error404Container>
    );
};

export default Error404;