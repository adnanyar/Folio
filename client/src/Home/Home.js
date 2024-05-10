
// import React  from "react";
// import { useDispatch } from "react-redux";
// import { incrementAction } from "../store/actions/actions";
// function Home(){
//     const dispatch = useDispatch();

//     const handleIncrement = () => {
//       dispatch(incrementAction());
//     };

//     return(
//         <>
//         <div>
//             <h1>Home</h1>
//             <button onClick={handleIncrement}>Increment</button>
//         </div>
//         </>
//     )
// } 

// export default Home;  








// Home.js (with connect HOC)
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { incrementAction } from "../store/actions/actions";

function Home({ count, dispatch }) {
  const handleIncrement = () => {
    const data={'message':12345}
    dispatch(incrementAction(data));
  };

  useEffect(() => {
    console.log('State changed:', count);
  }, [count]); // This effect will run whenever 'count' changes

  return (
    <div>
      <h1>Home</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button> 
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.count, // Assuming 'count' is a property in your Redux state
});

export default connect(mapStateToProps)(Home);


