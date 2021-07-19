import api from './api';
import { setSnippets } from './../store/snippet';

export const getSnippets = (email) => async (dispatch) => {
    api.get(`snippets?email=${email}`).then((response) => {
        dispatch(setSnippets(response.data));
    })
}