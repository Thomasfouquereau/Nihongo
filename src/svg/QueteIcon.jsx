import PropTypes from "prop-types";

const QueteIcon = ({ color, width = "4vw", height = "5vw", BgColor }) => (

    <svg width={width} height={height} viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="23" cy="23" r="23" fill={color} />
        <path d="M25.858 11.6457L25.3352 27.7935H20.6648L20.142 11.6457H25.858ZM22.9943 35.248C22.1837 35.248 21.4867 34.9601 20.9034 34.3844C20.3277 33.8086 20.0398 33.1116 20.0398 32.2935C20.0398 31.4904 20.3277 30.8048 20.9034 30.2366C21.4867 29.6609 22.1837 29.373 22.9943 29.373C23.7746 29.373 24.4602 29.6609 25.0511 30.2366C25.6496 30.8048 25.9489 31.4904 25.9489 32.2935C25.9489 32.8389 25.8087 33.3351 25.5284 33.7821C25.2557 34.2291 24.8958 34.5851 24.4489 34.8503C24.0095 35.1154 23.5246 35.248 22.9943 35.248Z" fill={BgColor} />
    </svg>


);

export default QueteIcon;

QueteIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    BgColor: PropTypes.string
};
