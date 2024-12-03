import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    width: calc( 100% - 6vw);
    @media screen and (max-width: 560px){
        gap: 5vw;
        width: 95%;
    }
`

const Cadre = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    background-color: ${(props) => props.$bgColor};
    color: ${(props) => props.$fontColor};
    padding: 1vw;
    border-radius: 0.8vw;
    width: calc(  100% - 2vw);
    @media screen and (max-width: 560px){
        gap: 1.5vw;
        padding: 3vw;
        border-radius: 4vw;
        width: calc(100% - 6vw);
    }
`

const Title = styled.h2`
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$color};
    border-radius: 0.5vw;
    padding: 1vw 2vw;
    font-size: 2vw; 
    @media screen and (max-width: 560px){
        font-size: 7vw;
        text-align: center;
        padding: 3vw;
        border-radius: 3vw;
    }
`

const Paragraph = styled.p`
    font-size: 1.2vw;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    padding: 2vw;
    line-height: 1.4 ;
    @media screen and (max-width: 560px){
        font-size: 4vw;
        padding: 7vw 5vw;
        border-radius: 3vw;
    }
`

const Paragraphs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5vw;
    width: 100%;
    @media screen and (max-width: 560px){
        gap: 1.5vw;
    }
`

const ParagraphsAndImage = styled.div`
    display: flex;
    gap: 0.5vw;
    width: 100%;
    @media screen and (max-width: 560px){
        gap: 1.5vw;
        flex-direction: column;
    }
    p{
        width: 50%;
        display: flex;
        align-items: center;
        color: ${(props) => props.$fontColor};
        @media screen and (max-width: 560px){
            width: calc( 100% - 10vw);
        }
    }
    img{
        width: 50%;
        height: auto;
        object-fit: cover;
        border-radius: 0.5vw;
        @media screen and (max-width: 560px){
            width:100%;
            border-radius: 3vw;
        }
    }
`

const ListAndImage = styled.div`
    display: flex;
    gap: 0.5vw;
    width: 100%;
    @media screen and (max-width: 560px){
        gap: 1.5vw;
        flex-direction: column;
    }
    div{
        width: 50%;
        height: 100%;
        display: flex;
        gap: 0.5vw;
        @media screen and (max-width: 560px){
            width: 100%;
            gap: 1vw;
        }
        div{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 0.5vw;
            align-items: center;
            @media screen and (max-width: 560px){
                gap: 1vw;
            }
            p{
                font-size: 1.2vw;
                background-color: ${(props) => props.$mainBgColor};
                color: ${(props) => props.$color};
                border-radius: 0.5vw;
                line-height: 1.4 ;
                width: 100%;
                height: 25%;
                text-align: center;
                padding: 0.5vw 0;
                text-transform: capitalize;
                font-weight: bold;
                @media screen and (max-width: 560px){
                    font-size: 4vw;
                    border-radius: 3vw;
                    padding: 1.5vw 0;
                }
            }
            ul{
                list-style-type: none;
                padding: 0;
                margin: 0;
                background-color: ${(props) => props.$mainBgColor};
                border-radius: 0.5vw;
                width: 100%;
                height: 75%;
                text-align: center;
                @media screen and (max-width: 560px){
                    font-size: 4vw;
                    border-radius: 3vw;
                    padding: 1.5vw 0;
                }
                li{
                    font-size: 1.2vw;
                    padding: 1vw;
                    color: ${(props) => props.$fontColor};
                    @media screen and (max-width: 560px){
                        font-size: 4vw;
                        padding: 2vw;
                    }
                }
            }
        }
    }
    img{
        width: 50%;
        height: auto;
        object-fit: cover;
        border-radius: 0.5vw;
        @media screen and (max-width: 560px){
            width:100%;
            border-radius: 3vw;
        }
    }
`

const ArticleContentCreator = ({ heading, content, type, list, image, content1, content2, bgColor, fontColor, mainBgColor, color }) => {
    if (type === "paragraphs") {
        return (
            <Cadre $bgColor={bgColor} id={String(heading)} >
                <Paragraphs>
                    <Title $color={color} $mainBgColor={mainBgColor}>{heading}</Title>
                    <Paragraph $fontColor={fontColor} $mainBgColor={mainBgColor}>{content}</Paragraph>
                </Paragraphs>
            </Cadre>
        )
    } else if (type === "list and image") {
        return (
            <Cadre $bgColor={bgColor} id={String(heading)}>
                <Title $color={color} $mainBgColor={mainBgColor}>{heading}</Title>
                <ListAndImage $mainBgColor={mainBgColor} $color={color} $fontColor={fontColor} >
                    <div>
                        {list && list.map((item, index) => (
                            <div key={index}>
                                <p>{item.name}</p>
                                <ul>
                                    {item.itemList.map((subItem, subIndex) => (
                                        <li key={subIndex}>{subItem.item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    {image && <img src={image} alt="article" />}
                </ListAndImage>
            </Cadre>
        )
    } else if (type === "paragraphs and image") {
        return (
            <Cadre $bgColor={bgColor} id={String(heading)}>
                <Title $color={color} $mainBgColor={mainBgColor}>{heading}</Title>
                <ParagraphsAndImage>
                    <Paragraph $fontColor={fontColor} $mainBgColor={mainBgColor}>{content}</Paragraph>
                    {image && <img src={image} alt="article" />}
                </ParagraphsAndImage>
            </Cadre>
        )
    } else if (type === "paragraphs and paragraphs") {
        return (
            <Cadre $bgColor={bgColor} id={String(heading)}>
                <Paragraphs>
                    <Title $color={color} $mainBgColor={mainBgColor}>{heading}</Title>
                    <Paragraph $fontColor={fontColor} $mainBgColor={mainBgColor}>{content1}</Paragraph>
                    <Paragraph $fontColor={fontColor} $mainBgColor={mainBgColor}>{content2}</Paragraph>
                </Paragraphs>
            </Cadre>
        )
    }
    return (
        <Cadre $bgColor={bgColor} id={String(heading)}>
            <Paragraphs $bgColor={bgColor} $fontColor={fontColor} $mainBgColor={mainBgColor} $color={color}>
                <Title $color={color} $mainBgColor={mainBgColor}>{heading}</Title>
                <Paragraph $fontColor={fontColor} $mainBgColor={mainBgColor}>{content}</Paragraph>
            </Paragraphs>
        </Cadre>
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