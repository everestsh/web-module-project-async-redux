


    const initialState = {
        breeds: ['affenpinscher',"african"]
      };
    
      function reducer(state = initialState, action) {
        console.log("reducer ",state)
        switch (action.type) {
            default:
              return state;
          }
    
    }
    export default reducer;