import { useDispatch } from 'react-redux';
import { setMode } from '../../store';

export default function Mode() {

    const dispatch = useDispatch();

    const handleModeChange = (Mode) => {
        dispatch(setMode(Mode));
    };

    return (
        <div>
            <button onClick={() => handleModeChange('light')}>light</button>
            <button onClick={() => handleModeChange('dark')}>dark</button>
        </div>
    );
}