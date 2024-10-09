import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    width: ${props => props.$width};
    background-color: ${props => props.$bgColor};
    border-radius: 2vw;
    overflow: hidden;
    height: ${props => props.$height};
    box-sizing: border-box;
`;

const ProgressBar = styled.div`
    width: ${props => props.$percentage}%;
    height: 100%;
    border-radius: 2vw;
    background-color: ${props => props.$color};
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
`;

export default function XpProgressBar({ xp, xpToNextLevel, height, width, color, bgColor }) {
    const percentage = (xp / xpToNextLevel) * 100;

    return (
        <Container $bgColor={bgColor} $width={width} $height={height} $color={color}>
            <ProgressBar
                $percentage={percentage}
                $color={color}
            >
            </ProgressBar>
        </Container>
    );
}

XpProgressBar.propTypes = {
    xp: PropTypes.number.isRequired,
    xpToNextLevel: PropTypes.number.isRequired,
    height: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string,
    bgColor: PropTypes.string,
};