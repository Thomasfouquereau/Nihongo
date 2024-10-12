import PropTypes from "prop-types";

const LockIcon = ({ color, width = "4vw", height = "5vw" }) => (

    <svg width={width} height={height} viewBox="0 0 67 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.725 32.0889V21.9556C11.725 16.1326 14.0191 10.5481 18.1028 6.43065C22.1863 2.31317 27.7249 0 33.5 0C39.2751 0 44.8136 2.31317 48.8973 6.43065C52.9809 10.5481 55.275 16.1326 55.275 21.9556V32.0889H56.95C62.5006 32.0889 67 36.6256 67 42.2222V65.8667C67 71.4633 62.5006 76 56.95 76H10.05C4.49955 76 0 71.4633 0 65.8667V42.2222C0 36.6256 4.49955 32.0889 10.05 32.0889H11.725ZM25.2092 13.596C27.408 11.3789 30.3902 10.1333 33.5 10.1333C36.6098 10.1333 39.592 11.3789 41.7909 13.596C43.9899 15.8131 45.225 18.8201 45.225 21.9556V32.0889H21.775V21.9556C21.775 18.8201 23.0103 15.8131 25.2092 13.596Z"
            fill={color} />
    </svg>

);

export default LockIcon;

LockIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};
