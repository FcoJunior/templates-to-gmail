import api from './api';
import { setSnippets, deleteSnippet } from './../store/snippet';

export const getSnippets = (email) => async (dispatch) => {
    api.get(`snippets?email=${email}`).then((response) => {
        dispatch(setSnippets(response.data));
    })
}

export const createSnippet = (data, handler = () => {}) => {
    api.post('snippets', data).then((response) => {})
        .finally(() => {
            handler();
        })
}

export const updateSnippet = (id, data, handler = () => {}) => {
    api.put(`snippets/${id}`, data).then((response) => {})
        .finally(() => {
            handler();
        })
}

export const destroySnippet = (id) => async (dispatch) => {
    api.delete(`snippets/${id}`).then((response) => {
        dispatch(deleteSnippet(id));
    })
}