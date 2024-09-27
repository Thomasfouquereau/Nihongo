import PropTypes from 'prop-types';

const SaveIcon = ({ mainColor, color, width = "2.5vw", height = "2.5vw" }) => (
    <svg width={width} height={height} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M47.1066 7.13958L47.1138 7.14652L47.1207 7.15373L50.5746 10.7515C52.4517 12.7069 53.5 15.3125 53.5 18.0231V27V44C53.5 49.2467 49.2467 53.5 44 53.5H28.04H10C4.75329 53.5 0.5 49.2467 0.5 44V10C0.5 4.7533 4.7533 0.5 10 0.5H27H35.9722C38.6858 0.5 41.2939 1.5505 43.2499 3.43125L47.1066 7.13958Z" fill={mainColor} stroke={mainColor} />
        <rect width="40.56" height="6.76" rx="3.38" transform="matrix(-1 0 0 1 47.28 42.0798)" fill={color} />
        <rect width="40.56" height="6.76" rx="3.38" transform="matrix(-1 0 0 1 47.28 33.24)" fill={color} />
        <path d="M37 1H9V13C9 15.7614 11.2386 18 14 18H32C34.7614 18 37 15.7614 37 13V1Z" fill={color} />
        <rect width="7.28" height="11.44" rx="3.64" transform="matrix(-1 0 0 1 18 3)" fill={mainColor} />
    </svg>

);

export default SaveIcon;

SaveIcon.propTypes = {
    mainColor: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};