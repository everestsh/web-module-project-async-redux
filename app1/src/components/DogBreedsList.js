import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { fetchStart, fetchSuccess,  fetchError} from './../actions';

const DogBreedsList = ({ message, isFetching, error ,dispatch}) => {
  //console.log("DogBreedsList",dispatch)
  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching person for ya!</h2>;
  }

  const handleClick = () => {
    //dispatch(fetchStart());
    axios.get('https://dog.ceo/api/breeds/list/all')
    .then(resp=> {
      //console.log("handleClick = ", resp.data.message)
      dispatch(fetchSuccess(resp.data.message));
    })
    .catch(err => {
      // dispatch(fetchError(err));
    });
    // dispatch(fetchError("this causes an eror now"));
  }
  return (
    <>
      <div>
        <h1>Test</h1>
        {  
            Object.keys(message).map( (breeds, index)=> (
                <p key={index}> {breeds}</p>
            ))
          }
        {/* <h2>Say Hi to: {person.name.first} {person.name.last}</h2> */}
        {/* <img src={person.picture.large}/> */}
      </div>
      <button onClick={handleClick} >Get dog breeds </button>
    </>
  );
};

const mapStateToProps = state => {
  //console.log("mapStateToProps = ", state.message)
  return {
    message: state.message,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps)(DogBreedsList);