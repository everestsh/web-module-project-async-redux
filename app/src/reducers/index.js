
import { UPDATE_BREEDS } from '../actions';

    const initialState = {
        message: 
            {
            'affenpinscher':[],
            "african":[]
        }
        
      };
    
      function reducer(state = initialState, action) {
        console.log("reducer ",state)
        switch (action.type) {
            case UPDATE_BREEDS:
            return {
                ...state,
                title: action.payload
            };
                default:
                return state;
            }
    
    }
    export default reducer;