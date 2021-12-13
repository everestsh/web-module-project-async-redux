

import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from './../actions';

import data from "../data/gifs"

const initialState = {
    gifs: data,
    loading: false,
    error: ''
    // error: 'This is an error'
}

const reducer = (state = initialState , action) =>{
    switch(action.type) {
        case(FETCH_START):
            return({
                ...state,
                loading: true, 
                error: ''
            });
        default:
            return state
    }
}

export default reducer;