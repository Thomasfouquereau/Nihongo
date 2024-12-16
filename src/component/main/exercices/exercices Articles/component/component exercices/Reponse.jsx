import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Reponse({ question, onReponseClick, isCorrectAnswer }) {
    const [reponses, setReponses] = useState(question.reponseProposee);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    shuffleArray(reponses);

    const handleReponseClick = (reponse) => {
        const correct = isCorrectAnswer(reponse);
        if (correct) {
            console.log('correct');
        } else {
            console.log('incorrect');
        }
        onReponseClick(reponse);
        setReponses(reponses.filter(r => r !== reponse));
        setTimeout(() => {
            setReponses(prevReponses => [...prevReponses, reponse]);
        }, 1000);
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
    isCorrectAnswer: PropTypes.func.isRequired,
};