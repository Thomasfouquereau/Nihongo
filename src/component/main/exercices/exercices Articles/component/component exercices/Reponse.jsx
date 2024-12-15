import PropTypes from 'prop-types';

export default function Reponse({ question }) {

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    shuffleArray(question.reponseProposee);

    return (
        <div>
            {question.reponseProposee.map((reponse, index) => (
                <span
                    key={index}
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