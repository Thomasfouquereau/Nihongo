import { configureStore, createSlice } from '@reduxjs/toolkit';

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
            state.kanaType = action.payload
        },
        setVocabulaireCategorie: (state, action) => {
            state.vocabulaireCategorie = action.payload;
        }
    },
});

// Export Actions
export const { setColor } = colorSlice.actions;
export const { setMode } = modeSlice.actions;
export const { setSearchText, setJlptLevel, setkanaType, setVocabulaireCategorie } = searchSlice.actions;

// Create Store
const store = configureStore({
    reducer: {
        color: colorSlice.reducer,
        mode: modeSlice.reducer,
        search: searchSlice.reducer,
    },
});

export default store;