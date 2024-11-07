import propTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1vw;
    gap: 0.5vw;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    width: 50%;
    height: 28vw;
    cursor: pointer;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    will-change: transform;
    &:hover{
        transform: scale(1.03);
    }
    @media screen and (max-width: 560px){
        width: 90%;
        height: 70vw;
        padding: 3vw;
        border-radius: 4vw;
    }
`

const CardHeader = styled.div`
    width: 100%;
    position: relative;
    img{
        width: 100%;
        height: 12vw;
        object-fit: cover;
        border-radius: 0.8vw;
        @media screen and (max-width: 560px){
            height: 30vw;
            border-radius: 3vw;
        }
    }
    h2{
        position: absolute;
        bottom: 0.5vw;
        left: 0.5vw;
        background-color: ${(props) => props.$mainBgColor};
        color: ${(props) => props.$fontColor};
        border-radius: 0.5vw;
        font-size: 1.7vw;
        padding: 0.4vw 1.3vw;
        @media screen and (max-width: 560px){
            border-radius: 3vw;
            font-size: 5vw;
            padding: 1vw 4vw;
            left: 1vw;
            bottom: 2vw;
        }
    }
`

const CardDescription = styled.p`
    font-size: 1.2vw;
    color: ${(props) => props.$fontColor};
    background-color: ${(props) => props.$mainBgColor};
    border-radius: 0.5vw;
    padding: 1vw;
    height: 9vw;
    width: calc(100% - 2vw);
    @media screen and (max-width: 560px){
        height: 27vw;
        border-radius: 3vw;
        font-size: 3vw;
        padding: 3vw;
        width: calc(100% - 6vw);
    }
`

const CardFilters = styled.div`
    display: flex;  
    gap: 0.5vw;
    width: 100%;
    height: 4vw;
    @media screen and (max-width: 560px){
        height: 8vw;
    }
    span{
        background-color: ${(props) => props.$color};
        color: #F7F7F2;
        border-radius: 0.5vw;
        padding: 0.5vw;
        font-size: 1.7vw;
        width: 50%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
        @media screen and (max-width: 560px){
            border-radius: 3vw;
            font-size: 5vw;
            padding: 1.5vw;
        }
    }
`

export default function ArticleCard({ article }) {

    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

    return (
        <CardContainer $bgColor={bgColor}>
            <CardHeader $mainBgColor={mainBgColor} $fontColor={fontColor}>
                <img src={article.headerImage} alt={article.title} />
                <h2>{article.title}</h2>
            </CardHeader>
            <CardDescription $mainBgColor={mainBgColor} $fontColor={fontColor}>
                {article.description}
            </CardDescription>
            <CardFilters $color={color}>
                {article.filters.map((filter, index) => (
                    <span key={index}>{filter}</span>
                ))}
            </CardFilters>
        </CardContainer>
    );
};

ArticleCard.propTypes = {
    article: propTypes.object.isRequired,
};