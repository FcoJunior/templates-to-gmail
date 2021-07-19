import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'snippet',
    initialState: {
        userEmail: '',
        snippets: []
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
        }
    }
});

export default slice.reducer;

export const {
    setSnippets,
    setUserEmail
} = slice.actions;