import styled from 'styled-components';

import TitleQuete from './component/TitleQuete';
import DisplayQuete from './component/DisplayQuete';

const Container = styled.div`
    margin-top: 6vw;
    margin-left: 3vw;
    gap: 1vw;
    display: flex;
    flex-direction: column;
`

export default function Quête() {
    return (
        <Container>
            <TitleQuete />  
            <DisplayQuete />
        </Container>
    );
} 