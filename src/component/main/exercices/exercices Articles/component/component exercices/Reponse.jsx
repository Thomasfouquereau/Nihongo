import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Reponse({ question, onReponseClick, reponseArray }) {
    const [reponses, setReponses] = useState(question.reponseProposee);

    useEffect(() => {
        if (reponseArray.length === 0) {
            setReponses(question.reponseProposee);
        }
    }, [reponseArray, question.reponseProposee]);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    shuffleArray(reponses);

    const handleReponseClick = (reponse) => {
        onReponseClick(reponse);
        setReponses(reponses.filter(r => r !== reponse));
    }

    return (
        <div>
            {reponses.map((reponse, index) => (
                <span
                    key={index}
                    style={{ margin: '0.5rem', padding: '0.5rem', backgroundColor: 'lightgrey', cursor: 'pointer' }}
                    onClick={() => handleReponseClick(reponse)}
                >
                    {reponse}
                </span>
            ))}
        </div>
    );
}

Reponse.propTypes = {
    question: PropTypes.object.isRequired,
    onReponseClick: PropTypes.func.isRequired,
    reponseArray: PropTypes.array.isRequired,
};