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
};

const initialTotalData = {
    kanji: listeKanji.kanji.length,
    vocabulaire: listeVocabulaire.vocabulaire.length,
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

// Export Actions
export const { setColor } = colorSlice.actions;
export const { setMode } = modeSlice.actions;
export const { setSearchText, setJlptLevel, setkanaType, setVocabulaireCategorie } = searchSlice.actions;
export const { setExerciceModeDeJeu, setExerciceDifficulté, setExerciceNumber, setExerciceResult } = parametersExerciceSlice.actions;
export const { setTotalData } = totalDataSlice.actions;

// Create Store
const store = configureStore({
    reducer: {
        color: colorSlice.reducer,
        mode: modeSlice.reducer,
        search: searchSlice.reducer,
        parametersExercice: parametersExerciceSlice.reducer,
        totalData: totalDataSlice.reducer,
    },
});

export default store;