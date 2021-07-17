import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'snippet',
    initialState: {
        snippets: [
            {
                id: 1,
                name: 'First test',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                id: 2,
                name: 'Second test',
                text: 'Maecenas arcu nulla, mattis vitae nisi vel, sodales lobortis odio.'
            },
        ]
    },
    reducers: {

    }
});

export default slice.reducer;

export const {

} = slice.actions;