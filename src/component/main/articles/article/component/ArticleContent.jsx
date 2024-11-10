import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Container = styled.div``

const ArticleContentCreator = ({ heading, content, type, list, image, content1, content2 }) => {
    if (type === "paragraphs") {
        return (
            <div>
                <h2>{heading}</h2>
                <p>{content}</p>
            </div>
        )
    } else if (type === "list and image") {
        return (
            <div>
                <h2>{heading}</h2>
                {list && list.map((item, index) => (
                    <ul key={index}>
                        <li>{item.name}</li>
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
            <div>
                <h2>{heading}</h2>
                <p>{content1}</p>
                <p>{content2}</p>
            </div>
        )
    }
    return (
        <div>
            <h2>{heading}</h2>
            <p>{content}</p>
        </div>
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
    content2: PropTypes.string
}

export default function ArticleContent({ article }) {
    const { bgColor } = useSelector((state) => state.mode);
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