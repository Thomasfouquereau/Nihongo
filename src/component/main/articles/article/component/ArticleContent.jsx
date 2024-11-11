import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    width: calc( 100% - 6vw);
`

const Paragraphs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    background-color: ${(props) => props.$bgColor};
    color: ${(props) => props.$fontColor};
    padding: 1vw;
    border-radius: 0.8vw;
    width: calc(  100% - 2vw);
    div{
        display: flex;
        flex-direction: column;
        gap: 1vw;
        width: 100%;
        h2{
            background-color: ${(props) => props.$mainBgColor};
            color: ${(props) => props.$color};
            border-radius: 0.5vw;
            padding: 1vw 2vw;
            font-size: 2vw;  
        }
        p{
            font-size: 1.2vw;
            background-color: ${(props) => props.$mainBgColor};
            border-radius: 0.5vw;
            padding: 2vw;
            line-height: 1.4 ;
            @media screen and (max-width: 560px){
                font-size: 4vw;
            }
        }
    }
`

const ArticleContentCreator = ({ heading, content, type, list, image, content1, content2, bgColor, fontColor, mainBgColor, color }) => {
    if (type === "paragraphs") {
        return (
            <Paragraphs $bgColor={bgColor} $fontColor={fontColor} $mainBgColor={mainBgColor} $color={color}>
                <div>
                    <h2>{heading}</h2>
                    <p>{content}</p>
                </div>
            </Paragraphs>
        )
    } else if (type === "list and image") {
        return (
            <div>
                <h2>{heading}</h2>
                {list && list.map((item, index) => (
                    <ul key={index}>
                        <p>{item.name}</p>
                        {item.itemList.map((subItem, subIndex) => (
                            <li key={subIndex}>{subItem.item}</li>
                        ))}
                    </ul>
                ))}
                {image && <img src={image} alt="article" />}
            </div>
        )
    } else if (type === "paragraphs and image") {
        return (
            <div>
                <h2>{heading}</h2>
                <p>{content}</p>
                {image && <img src={image} alt="article" />}
            </div>
        )
    } else if (type === "paragraphs and paragraphs") {
        return (
            <Paragraphs $bgColor={bgColor} $fontColor={fontColor} $mainBgColor={mainBgColor} $color={color}>
                <div>
                    <h2>{heading}</h2>
                    <p>{content1}</p>
                    <p>{content2}</p>
                </div>
            </Paragraphs>
        )
    }
    return (
        <Paragraphs $bgColor={bgColor} $fontColor={fontColor} $mainBgColor={mainBgColor} $color={color}>
            <h2>{heading}</h2>
            <p>{content}</p>
        </Paragraphs>
    )
}

ArticleContentCreator.propTypes = {
    heading: PropTypes.string,
    content: PropTypes.string,
    type: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            itemList: PropTypes.arrayOf(
                PropTypes.shape({
                    item: PropTypes.string
                })
            )
        })
    ),
    image: PropTypes.string,
    content1: PropTypes.string,
    content2: PropTypes.string,
    bgColor: PropTypes.string,
    fontColor: PropTypes.string,
    mainBgColor: PropTypes.string,
    color: PropTypes.string
}

export default function ArticleContent({ article }) {

    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

    return (
        <Container $bgColor={bgColor}>
            {article.paragraphs.map((paragraph, index) => (
                <ArticleContentCreator
                    key={index}
                    heading={paragraph.heading}
                    content={paragraph.content}
                    type={paragraph.type}
                    list={paragraph.list}
                    image={paragraph.image}
                    content1={paragraph.content1}
                    content2={paragraph.content2}
                    bgColor={bgColor}
                    fontColor={fontColor}
                    mainBgColor={mainBgColor}
                    color={color}
                />
            ))}
        </Container>
    )
}

ArticleContent.propTypes = {
    article: PropTypes.shape({
        paragraphs: PropTypes.arrayOf(
            PropTypes.shape({
                heading: PropTypes.string,
                content: PropTypes.string,
                type: PropTypes.string.isRequired,
                list: PropTypes.arrayOf(
                    PropTypes.shape({
                        name: PropTypes.string,
                        itemList: PropTypes.arrayOf(
                            PropTypes.shape({
                                item: PropTypes.string
                            })
                        )
                    })
                ),
                image: PropTypes.string,
                content1: PropTypes.string,
                content2: PropTypes.string
            })
        ).isRequired
    }).isRequired
}