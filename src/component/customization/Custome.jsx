import { Link } from "react-router-dom";
import Mode from "./mode/mode";
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import iconColorLight from '../../assets/icon-color-light-mode.svg';
import iconColorDark from '../../assets/icon-color-dark-mode.svg';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 16.7vw;
    margin-bottom: 1.3vw;
    position: absolute;
    right: 3.1vw;
    top: 1vw;
`;

const Button = styled(Link)`
    background-color: ${(props) => props.$isActive ? props.$color : props.$bgColor};
    color: ${(props) => props.$isActive ? '#fff' : '#000'};
    width: 5vw;
    height: 4.3vw;
    border-radius: 0.8vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function Custome() {
    const mode = useSelector(state => state.mode);
    console.log('Active mode:', mode);
    const { bgColor } = useSelector((state) => state.mode);
    return (
        <Container>
            <Mode />
            <Button $bgColor={bgColor}  to="/color">
                <img src={mode.mode === 'light' ? iconColorLight : iconColorDark}/>
            </Button>
        </Container>
    );
}