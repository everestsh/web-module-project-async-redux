

import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from './../actions';

import data from "../data/gifs"

const initialState = {
    gifs: [],
    loading: false,
    searchItem: '',
    error: '',
    // error: 'This is an error',
}

const reducer = (state = initialState , action) =>{
    switch(action.type) {
        case(FETCH_START):
            return({
                ...state,
                loading: true, 
                error: ''
            });
        case(FETCH_SUCCESS):
            return({
                ...state,
                gifs: action.payload,
                loading: false,
                error: ''
            });
        default:
            return state
    }
}

export default reducer;