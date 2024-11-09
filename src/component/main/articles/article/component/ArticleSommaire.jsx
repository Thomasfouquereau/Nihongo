import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1vw;
    width: 94%;
    @media screen and (max-width: 560px){
        gap: 5vw;
        width: 95%;
    }
`

const SommaireCard = styled.div`
    display: flex;
    gap: 0.5vw;
    padding: 1vw;
    border-radius: 0.8vw;
    background-color: ${(props) => props.$bgColor};
    width: 47.3%;
    height: 12vw;
    @media screen and (max-width: 560px){
        width: 100%;
        height: 30vw;
        border-radius: 4vw;
        padding: 3vw;
        gap: 1.5vw;
    }
    div{
        background-color: ${(props) => props.$mainBgColor};
        border-radius: 0.5vw;
        width: 100%;
        height: 100%;
        position: relative;
        @media screen and (max-width: 560px){
            border-radius: 3vw;
        }
        span{
            position: absolute;
            top: 0.7vw;
            left: 1vw;
            font-size: 1.5vw;
            font-weight: 600;
            color: ${(props) => props.$color};
            @media screen and (max-width: 560px){
                font-size: 5vw;
                top: 2vw;
                left: 3vw;
            }
        }
        p{
            font-size: 2.3vw;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            color: ${(props) => props.$fontColor};
            text-transform: capitalize;
            @media screen and (max-width: 560px){
                font-size: 7vw;
                font-weight: 600;
            }
        }
    }
`

export default function ArticleSommaire({ article }) {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

    return (
        <Container>
            {article.summary.map((summary, index) => (
                <SommaireCard $color={color} $bgColor={bgColor} $fontColor={fontColor} $mainBgColor={mainBgColor} key={index}>
                    <div>
                        <span>Sommaire</span>
                        <p>{summary}</p>
                    </div>
                </SommaireCard>
            ))}
        </Container>
    )
}

ArticleSommaire.propTypes = {
    article: PropTypes.shape({
        summary: PropTypes.array.isRequired
    }).isRequired
}