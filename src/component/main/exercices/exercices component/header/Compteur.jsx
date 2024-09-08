import { useSelector } from 'react-redux';

export default function Compteur() {
    const totalfaute = useSelector((state) => state.exercice.totalfaute);
    const totalreussite = useSelector((state) => state.exercice.totalreussite);
    const questionMax = useSelector((state) => state.parametersExercice.exerciceNumber);
    const questionActuelle = totalreussite + totalfaute;

    return (
        <div>
            <p>{totalreussite}</p>
            <p>{questionActuelle}/{questionMax}</p>
            <p>{totalfaute}</p>
        </div>
    );
}