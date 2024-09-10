import { configureStore, createSlice } from '@reduxjs/toolkit';
import listeKanji from './data/kanji/listeKanji.json';
import listeVocabulaire from './data/vocabulaire/listeVocabulaire.json';

// Initial State
const initialStateColor = {
    color: '#F75D48',
};

const initialStateMode = {
    mode: 'light',
    fontColor: '#353535',
    bgColor: '#353535',
    mainBgColor: '#F7F7F2',
};

const initialStateSearch = {
    searchText: '',
    jlptLevel: '',
    kanaType: '',
    vocabulaireCategorie: [],
};

const initialParametersExercice = {
    exerciceModeDeJeu: '',
    exerciceDifficulté: '',
    exerciceNumber: 0,
    exerciceResult: [],
    exerciceTimer: 5,
    exerciceTimerActive: false,
    exerciceTypeDeKana: 'normal',
};

const initialExercice = {
    totalTimer: 0, 
    totalfaute : 0, 
    totalreussite : 0, 
}

const initialTotalData = {
    kanji: listeKanji.kanji.length,
    vocabulaire: listeVocabulaire.vocabulaire.length,
};

const initialDataChoice = {
    kanji: [],
    vocabulaire: [],
    hiragana: [],
    katakana: [],
    nombre: [],
};

// Color Slice
const colorSlice = createSlice({
    name: 'color',
    initialState: initialStateColor,
    reducers: {
        setColor: (state, action) => {
            state.color = action.payload;
        },
    },
});

// Mode Slice
const modeSlice = createSlice({
    name: 'mode',
    initialState: initialStateMode,
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload;
            if (action.payload === 'light') {
                state.fontColor = '#353535';
                state.bgColor = '#353535';
                state.mainBgColor = '#F7F7F2';
            } else {
                state.fontColor = '#F7F7F2';
                state.bgColor = '#F7F7F2';
                state.mainBgColor = '#353535';
            }
        },
    },
});

// Search Slice
const searchSlice = createSlice({
    name: 'search',
    initialState: initialStateSearch,
    reducers: {
        setSearchText: (state, action) => {
            state.searchText = action.payload;
        },
        setJlptLevel: (state, action) => {
            state.jlptLevel = action.payload;
        },
        setkanaType: (state, action) => {
            state.kanaType = action.payload;
        },
        setVocabulaireCategorie: (state, action) => {
            state.vocabulaireCategorie = action.payload;
        }
    },
});

// ParametersExercice Slice
const parametersExerciceSlice = createSlice({
    name: 'parametersExercice',
    initialState: initialParametersExercice,
    reducers: {
        setExerciceModeDeJeu: (state, action) => {
            state.exerciceModeDeJeu = action.payload;
        },
        setExerciceDifficulté: (state, action) => {
            state.exerciceDifficulté = action.payload;
        },
        setExerciceNumber: (state, action) => {
            state.exerciceNumber = action.payload;
        },
        setExerciceResult: (state, action) => {
            state.exerciceResult = action.payload;
        },
        setExerciceTimer: (state, action) => {
            state.exerciceTimer = action.payload;
        },
        setExerciceTimerActive: (state, action) => {
            state.exerciceTimerActive = action.payload
        },
        setExerciceTypeDeKana: (state, action) => {
            state.exerciceTypeDeKana = action.payload;
        }
    },
});

// Exercice Slice

const exerciceSlice = createSlice({
    name: 'exercice',
    initialState: initialExercice,
    reducers: {
        setTotalTimer: (state, action) => {
            state.totalTimer = action.payload;
        },
        setTotalfaute: (state, action) => {
            state.totalfaute = action.payload;
        },
        setTotalreussite: (state, action) => {
            state.totalreussite = action.payload;
        },
    },
});

// TotalData Slice
const totalDataSlice = createSlice({
    name: 'totalData',
    initialState: initialTotalData,
    reducers: {
        setTotalData: (state, action) => {
            state.kanji = action.payload.kanji;
            state.vocabulaire = action.payload.vocabulaire;
        },
    },
});

// DataChoice Slice
const dataChoiceSlice = createSlice({
    name: 'dataChoice',
    initialState: initialDataChoice,
    reducers: {
        toggleKanji: (state, action) => {
            const kanji = action.payload;
            const index = state.kanji.findIndex(item => item.id === kanji.id);
            if (index >= 0) {
                state.kanji.splice(index, 1);
            } else {
                state.kanji.push(kanji);
            }
        },
        toggleVocabulaire: (state, action) => {
            const vocabulaire = action.payload;
            const index = state.vocabulaire.findIndex(item => item.id === vocabulaire.id);
            if (index >= 0) {
                state.vocabulaire.splice(index, 1);
            } else {
                state.vocabulaire.push(vocabulaire);
            }
        },
        toggleKatakana: (state, action) => {
            const katakana = action.payload;
            const index = state.katakana.findIndex(item => item.id === katakana.id);
            if (index >= 0) {
                state.katakana.splice(index, 1);
            } else {
                state.katakana.push(katakana);
            }
        },
        toggleNombre: (state, action) => {
            const nombre = action.payload;
            const index = state.nombre.findIndex(item => item.id === nombre.id);
            if (index >= 0) {
                state.nombre.splice(index, 1);
            } else {
                state.nombre.push(nombre);
            }
        },
        toggleHiragana: (state, action) => {
            const hiragana = action.payload;
            const index = state.hiragana.findIndex(item => item.id === hiragana.id);
            if (index >= 0) {
                state.hiragana.splice(index, 1);
            } else {
                state.hiragana.push(hiragana);
            }
        },
        resetKanji: (state) => {
            state.kanji = [];
        },
        resetVocabulaire: (state) => {
            state.vocabulaire = [];
        },
        resetKatakana: (state) => {
            state.katakana = [];
        },
        resetNombre: (state) => {
            state.nombre = [];
        },
        resetHiragana: (state) => {
            state.hiragana = [];
        },
    },
});

// Export Actions
export const { setColor } = colorSlice.actions;
export const { setMode } = modeSlice.actions;
export const { setSearchText,
    setJlptLevel,
    setkanaType,
    setVocabulaireCategorie
} = searchSlice.actions;
export const { setExerciceModeDeJeu,
    setExerciceDifficulté,
    setExerciceNumber,
    setExerciceResult,
    setExerciceTimer,
    setExerciceTimerActive,
    setExerciceTypeDeKana
} = parametersExerciceSlice.actions;
export const { setTotalTimer, setTotalfaute, setTotalreussite } = exerciceSlice.actions;
export const { setTotalData } = totalDataSlice.actions;
export const {
    toggleKanji, toggleVocabulaire, toggleKatakana, toggleNombre, toggleHiragana,
    resetKanji, resetVocabulaire, resetKatakana, resetNombre, resetHiragana
} = dataChoiceSlice.actions;

// Create Store
const store = configureStore({
    reducer: {
        color: colorSlice.reducer,
        mode: modeSlice.reducer,
        search: searchSlice.reducer,
        parametersExercice: parametersExerciceSlice.reducer,
        exercice: exerciceSlice.reducer,
        totalData: totalDataSlice.reducer,
        dataChoice: dataChoiceSlice.reducer,
    },
});

export default store;