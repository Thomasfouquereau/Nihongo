import PropTypes from 'prop-types';

const SearchIcon = ({ color, width = "3.5vw", height = "3.5vw" }) => (
    <svg width={width} height={height} viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18.983" cy="18.9829" r="11" transform="rotate(-45 18.983 18.9829)" stroke={color} strokeWidth="4.84598" />
        <rect x="23.7218" y="27.2935" width="5.32537" height="22.0876" rx="2.66269" transform="rotate(-45 23.7218 27.2935)" fill={color} stroke={color} />
    </svg>
);

export default SearchIcon;

SearchIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};