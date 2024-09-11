import PropTypes from "prop-types";

const BackIcon = ({color, width = "5vw", height = "5vw"}) => (
    <svg width={width} height={height} viewBox="0 0 43 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M39 4L4 36L39 68" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default BackIcon;

BackIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};