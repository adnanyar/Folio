// reducers.js

const initialState = {
    count: 0, // Example property with default value
    // Other initial state properties
  };
  
  const rootReducer = (state = initialState, action) => {
    console.log(action.data)
    switch (action.type) {
      case 'INCREMENT':
        console.log(state);
        return { ...state, count: state.count + 1 };
      // other cases
      default:
        return state;
    } 
  };  
   
  export default rootReducer;  
  