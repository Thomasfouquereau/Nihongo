import PropTypes from "prop-types";

const CrossIcon = ({ color, width = "3.5vw", height = "3.5vw" }) => (
    <svg width={width} height={height}  viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="19.4456" y="14.4956" width="48" height="7" rx="3" transform="rotate(45 19.4456 14.4956)" fill={color} />
        <rect x="14.4956" y="48.437" width="48" height="7" rx="3" transform="rotate(-45 14.4956 48.437)" fill={color} />
    </svg>

);

export default CrossIcon;

CrossIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};