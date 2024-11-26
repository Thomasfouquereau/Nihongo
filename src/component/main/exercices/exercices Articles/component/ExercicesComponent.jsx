import PropType from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import LogiqueExercicesArticles from '../logique exercices/LogiqueExercicesArticles';

const Container = styled.div`
    display: flex;
    background-color: ${(props) => props.$bgColor};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1vw;
    padding: 1vw;
    width: 70%;
    height: 70%;
    border-radius: 0.8vw;
`;

export default function ExercicesComponent({ article }) {
    const { bgColor } = useSelector((state) => state.mode);
    
    return (
        <Container $bgColor={bgColor}>
            <LogiqueExercicesArticles article={article}/>WE
        </Container>
    );
}

ExercicesComponent.propTypes = {
    article: PropType.object.isRequired,
};