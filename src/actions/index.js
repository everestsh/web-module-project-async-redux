

export const FETCH_START = "FETCH_START";

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSuccess = (gifs)=> {
    return({type: FETCH_SUCCESS, payload:gifs});
}

export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchError = (errorMessage)=> {
    return({type: FETCH_ERROR, payload:errorMessage});
}