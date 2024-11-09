import styled from "styled-components"
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.$bgColor};
    padding: 1vw;
    border-radius: 0.8vw;
    position: absolute;
    left: 3vw;
`

const AuthorName = styled.h3`
    font-size: 1.5vw;
    color: ${(props) => props.$fontColor};
    text-transform: capitalize;
    background-color: ${(props) => props.$mainBgColor};
    border-radius: 0.5vw;
    padding: 1vw;
    @media screen and (max-width: 560px){
        font-size: 5vw;
    }
`

export default function ArticleAuthor({ article }) {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    return (
        <Container $bgColor={bgColor}>
            <AuthorName $fontColor={fontColor} $mainBgColor={mainBgColor}>créé par: {article.author}</AuthorName>
        </Container>
    )
}

ArticleAuthor.propTypes = {
    article: PropTypes.shape({
        author: PropTypes.string.isRequired
    }).isRequired
}