import { configureStore, createSlice } from '@reduxjs/toolkit';

// Initial State
const initialStateColor = {
    color: '#F75D48', // Valeur par défaut
};

const initialStateMode = {
    mode: 'dark',
    fontColor: '#353535',
    bgColor: '#F7F7F2',
    mainBgColor: '#353535',
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
                state.fontColor = '#F7F7F2';
                state.bgColor = '#353535';
                state.mainBgColor = '#F7F7F2';
            } else {
                state.fontColor = '#353535';
                state.bgColor = '#F7F7F2';
                state.mainBgColor = '#353535';
            }
        },
    },
});

// Export Actions
export const { setColor } = colorSlice.actions;
export const { setMode } = modeSlice.actions;

// Create Store
const store = configureStore({
    reducer: {
        color: colorSlice.reducer,
        mode: modeSlice.reducer,
    },
});

export default store;