import PropTypes from "prop-types";

const HomeIcon = ({ color, mainBgColor, width = "5vw", height = "5vw" }) => (
    <svg width={width} height={height} viewBox="0 0 74 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="2" width="36" height="68" fill={ color } />
        <rect x="41" y="18" width="3" height="2" fill={ color } />
        <rect x="60" y="18" width="3" height="2" fill={ color } />
        <rect x="29" width="3" height="2" fill={ color } />
        <rect x="8" width="3" height="2" fill={ color } />
        <rect x="38" y="20" width="36" height="50" fill={ color } />
        <path d="M54 61C54 59.8954 54.8954 59 56 59C57.1046 59 58 59.8954 58 61V70H54V61Z" fill={mainBgColor} />
        <path d="M16 61C16 59.8954 16.8954 59 18 59C19.1046 59 20 59.8954 20 61V70H16V61Z" fill={mainBgColor} />
        <rect x="4" y="44" width="4" height="11" fill={mainBgColor} />
        <rect x="4" y="28" width="4" height="11" fill={mainBgColor} />
        <rect x="42" y="43" width="4" height="11" fill={mainBgColor} />
        <rect x="4" y="12" width="4" height="11" fill={mainBgColor} />
        <rect x="42" y="27" width="4" height="11" fill={mainBgColor} />
        <rect x="10" y="44" width="4" height="11" fill={mainBgColor} />
        <rect x="10" y="28" width="4" height="11" fill={mainBgColor} />
        <rect x="48" y="43" width="4" height="11" fill={mainBgColor} />
        <rect x="10" y="12" width="4" height="11" fill={mainBgColor} />
        <rect x="48" y="27" width="4" height="11" fill={mainBgColor} />
        <rect x="16" y="44" width="4" height="11" fill={mainBgColor} />
        <rect x="16" y="28" width="4" height="11" fill={mainBgColor} />
        <rect x="54" y="43" width="4" height="11" fill={mainBgColor} />
        <rect x="16" y="12" width="4" height="11" fill={mainBgColor} />
        <rect x="54" y="27" width="4" height="11" fill={mainBgColor} />
        <rect x="22" y="44" width="4" height="11" fill={mainBgColor} />
        <rect x="22" y="58" width="10" height="11" fill={mainBgColor} />
        <rect x="42" y="58" width="10" height="11" fill={mainBgColor} />
        <rect x="60" y="58" width="10" height="11" fill={mainBgColor} />
        <rect x="4" y="58" width="10" height="11" fill={mainBgColor} />
        <rect x="22" y="28" width="4" height="11" fill={mainBgColor} />
        <rect x="60" y="43" width="4" height="11" fill={mainBgColor} />
        <rect x="22" y="12" width="4" height="11" fill={mainBgColor} />
        <rect x="60" y="27" width="4" height="11" fill={mainBgColor} />
        <rect x="28" y="44" width="4" height="11" fill={mainBgColor} />
        <rect x="28" y="28" width="4" height="11" fill={mainBgColor} />
        <rect x="66" y="43" width="4" height="11" fill={mainBgColor} />
        <rect x="28" y="12" width="4" height="11" fill={mainBgColor} />
        <rect x="66" y="27" width="4" height="11" fill={mainBgColor} />
    </svg>
);

export default HomeIcon;

HomeIcon.propTypes = {
    color: PropTypes.string,
    mainBgColor: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};