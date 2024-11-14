import PropTypes from 'prop-types';

export default function Reponse({ question }) {
    const handleDragStart = (e, reponse) => {
        e.dataTransfer.setData('text', reponse);
    };

    return (
        <div>
            {question.reponseProposee.map((reponse, index) => (
                <span
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, reponse)}
                    style={{ margin: '0.5rem', padding: '0.5rem', backgroundColor: 'lightgrey', cursor: 'pointer' }}
                >
                    {reponse}
                </span>
            ))}
        </div>
    );
}

Reponse.propTypes = {
    question: PropTypes.object.isRequired,
};