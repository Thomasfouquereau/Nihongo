import PropTypes from "prop-types";

const StrongArrowIcon = ({ color, width = "6vw", height = "4vw" }) => (
    <svg width={width} height={height} viewBox="0 0 109 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.99999 9L54.5 44L100 9" stroke={color} strokeWidth="17" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default StrongArrowIcon;

StrongArrowIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};