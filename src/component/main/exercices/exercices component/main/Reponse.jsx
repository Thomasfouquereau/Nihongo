


import PropTypes from 'prop-types';
import { useState } from 'react';
    
export default function Reponse({ question }) {
    const [userAnswer, setUserAnswer] = useState('');
    
    const handleInputChange = (e) => {
        setUserAnswer(e.target.value);
    };
    
    const options = question.options || [];
    
    Reponse.propTypes = {
      question: PropTypes.shape({
        options: PropTypes.array,
      }).isRequired,
    };
    
    return (
        <div>
            {options.length > 0 ? (
                options.map((option, index) => (
                    <button key={index} onClick={() => setUserAnswer(option)}>
                        {option}
                    </button>
                ))
            ) : (
                <input type="text" value={userAnswer} onChange={handleInputChange} />
            )}
        </div>
    );
}