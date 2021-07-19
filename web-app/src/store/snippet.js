import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'snippet',
    initialState: {
        userEmail: '',
        snippets: [],
        currentSnippet: null
    },
    reducers: {
        setSnippets: (state, action) => {
            const { data } = action.payload;
            return {
                ...state,
                snippets: data
            }
        },
        setUserEmail: (state, action) => {
            return {
                ...state,
                userEmail: action.payload
            }
        },
        setCurrentSnippet: (state, action) => {
            return {
                ...state,
                currentSnippet: action.payload
            }
        },
        deleteSnippet: (state, action) => {
            return {
                ...state,
                snippets: state.snippets.filter(x => x.id !== action.payload )
            }
        }
    }
});

export default slice.reducer;

export const {
    setSnippets,
    setUserEmail,
    setCurrentSnippet,
    deleteSnippet
} = slice.actions;