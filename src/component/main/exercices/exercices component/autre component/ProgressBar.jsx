import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
    width: 6vw;
    border-radius: 0.8vw;
    padding: 1vw;
    height: 60.3vh;
    display: flex;
    flex-direction: column-reverse;
    background-color: ${(props) => props.$bgColor};
    div{
        background-color:${(props) => props.$mainBgColor} ;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        border-radius: 0.6vw;
        overflow: hidden;
        div{
            min-width: 102%;
            z-index: 10;
            border-radius: 0.4vw;
            background-color: ${(props) => props.$color};
            transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
        }
    }
`;

export default function ProgressBar() {
    const exerciceNumber = useSelector(state => state.parametersExercice.exerciceNumber);
    const totalfaute = useSelector(state => state.exercice.totalfaute);
    const totalreussite = useSelector(state => state.exercice.totalreussite);
    const { color } = useSelector((state) => state.color);
    const { bgColor, mainBgColor } = useSelector((state) => state.mode);

    // Calculer la progression
    const progression = (totalfaute + totalreussite) / exerciceNumber * 100;

    return (
        <Container $bgColor={bgColor} $mainBgColor={mainBgColor} $color={color}  >
            <div>
                <div style={{ height: `${progression}%` }}></div>
            </div>
        </Container>
    );
}