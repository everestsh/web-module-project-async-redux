
import axios from 'axios';
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

export const getGifs = () => {
    return (dispatch) => {
        // dispatch({type: FETCH_START});
        // dispatch({type: FETCH_ERROR, payload:"Test error"});
        // setTimeout(() =>{
        //     dispatch({type: FETCH_ERROR, payload:"Test error"});
        // }, 2000)

        // dispatch({type: FETCH_START});
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=3g6nabgKJk22VyMEWQZNbE8d3hL5c6wL&q=cats`)
        .then(res=>{
          console.log("asios ",res.data.data)
        //   fetchSuccess(res.data.data)
          dispatch({type: FETCH_SUCCESS, payload: res.data.data });
        })
        .catch(err => {
            // dispatch(fetchError(err));
        });

    }
}