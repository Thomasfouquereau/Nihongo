import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const TimerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 2vw;
    left: 1vw;
    background-color: ${(props) => props.$color};
    width: 9vw;
    height: 4vw;
    border-radius: 0.5vw;
    color: #F7F7F2;
    p{
        font-size: 2vw;
        font-weight: 600;
        span{
            font-size: 1.5vw;
        }
    }
`;

const Timer = ({ duration, onTimeUp, onReset }) => {
    const [time, setTime] = useState(duration);
    const { color } = useSelector((state) => state.color);


    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timerInterval);
                    onTimeUp();
                    setTimeout(() => {
                        setTime(duration); // Reset the timer after 700ms
                    }, 700);
                    return 0; // Set time to 0 before the reset
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [duration, onTimeUp]);

    useEffect(() => {
        setTime(duration);
    }, [duration]);

    useEffect(() => {
        if (onReset) {
            onReset(() => setTime(duration));
        }
    }, [onReset, duration]);

    return (
        <TimerContainer $color={color}>
            <p>{time}<span>s</span></p>
        </TimerContainer>
    );
};

Timer.propTypes = {
    duration: PropTypes.number.isRequired,
    onTimeUp: PropTypes.func.isRequired,
    onReset: PropTypes.func,
};

export default Timer;