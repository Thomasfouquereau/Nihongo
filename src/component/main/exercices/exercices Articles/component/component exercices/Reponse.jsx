import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Reponse({ question, onReponseClick, reponseArray }) {
    const [reponses, setReponses] = useState(question.reponseProposee);

    useEffect(() => {
        if (reponseArray.length === 0) {
            setReponses(question.reponseProposee);
        }
    }, [reponseArray, question.reponseProposee]);

    const handleReponseClick = (reponse, index) => {
        onReponseClick(reponse);
        setReponses((prevReponses) => {
            const newReponses = [...prevReponses];
            newReponses[index] = null; // Remplacer l'élément par null pour conserver la position
            return newReponses;
        });
    }

    return (
        <div>
            {reponses.map((reponse, index) => (
                reponse !== null && (
                    <span
                        key={index}
                        style={{ margin: '0.5rem', padding: '0.5rem', backgroundColor: 'lightgrey', cursor: 'pointer' }}
                        onClick={() => handleReponseClick(reponse, index)}
                    >
                        {reponse}
                    </span>
                )
            ))}
        </div>
    );
}

Reponse.propTypes = {
    question: PropTypes.object.isRequired,
    onReponseClick: PropTypes.func.isRequired,
    reponseArray: PropTypes.array.isRequired,
};