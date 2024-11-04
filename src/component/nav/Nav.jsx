import { useState } from 'react';
import styled from 'styled-components';
import NavMenu from './nav menu/NavMenu';
import Horloge from './horloge/Horloge';
import NavButton from './nav menu/NavButton';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 3vw;
    top: 6vw;
    gap: 1vw;
    @media screen and (max-width: 560px) {
        position: fixed;
        width:  ${({ $clicked }) => ($clicked ? '100%' : '0')};
        height: ${({ $clicked }) => ($clicked ? '100vh' : '0')};
        align-items: center;
        justify-content: center;
        right: 0;
        top: 0;
        z-index: 100;
        &:before {
            content: ${({ $clicked }) => ($clicked ? '""' : 'none')};
            position: fixed;
            width: 100%;
            height: 100vh;
            background-color: #494949ec;
            z-index: -1;
        }
    }
`;

export default function Nav() {
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setIsButtonClicked(!isButtonClicked);
    };

    const handleLinkClick = () => {
        setIsButtonClicked(false);  
    };

    return (
        <Container $clicked={isButtonClicked ? "true" : undefined}>
            <NavMenu isButtonClicked={isButtonClicked} onLinkClick={handleLinkClick} />
            <Horloge />
            <NavButton onButtonClick={handleButtonClick} />
        </Container>
    );
}