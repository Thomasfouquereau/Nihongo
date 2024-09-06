import PropTypes from 'prop-types';

export default function Question({ question }) {
    console.log(question);

    function vocabulaire(){
        if (question.kanji === ""){
            return question.hiragana;
        } else {
            return question.kanji;
        }
    }

    return (
        <div>
            <p>{question.Kanji || question.Katakana || question.Hiragana || vocabulaire() || question.Nombre  }</p>
        </div>
    );
}

Question.propTypes = {
    question: PropTypes.shape({
        Kanji: PropTypes.string,
        Katakana: PropTypes.string,
        Hiragana: PropTypes.string,
        kanji: PropTypes.string,
        Nombre: PropTypes.string,
        hiragana: PropTypes.string,
    }).isRequired,
};