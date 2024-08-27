import NavMenu from './nav menu/NavMenu';
import styled from 'styled-components';
import Horloge from './horloge/Horloge';

const Container = styled.div`  
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 3vw;
    top: 6vw;
    gap: 1vw;
`;

export default function Nav() {
    return (
        <Container>
            <NavMenu />
            <Horloge />
        </Container>
    );
}