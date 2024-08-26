import NavMenu from './nav menu/NavMenu';
import styled from 'styled-components';

const Container = styled.div`  
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 3vw;
    top: 6vw;
`;

export default function Nav() {
    return (
        <Container>
            
            <NavMenu />
        </Container>
    );
}