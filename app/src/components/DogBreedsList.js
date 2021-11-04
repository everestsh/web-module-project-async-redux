
   
import React from 'react';
import {connect} from 'react-redux'

import axios from 'axios';


class DogBreedsList extends React.Component {




    render() {
      console.log(Object.keys(this.props.message))

      const handleClick = () => {
        // dispatch(fetchError("this causes an eror now"));
        axios.get('https://dog.ceo/api/breeds/list/all')
        .then(resp=> {
          console.log(resp.data)
          // dispatch(fetchSuccess(resp.data.results[0]));  
          // dispatch(fetchError("jjdjjjdfnj"));
        })
        .catch(err => {
          // dispatch(fetchError(err));
        });
      }
        return (
        <div className="App">
            <h1>{}</h1>
            {  
              Object.keys(this.props.message).map( (breeds, key)=> (
                  <p keyid={key}> {breeds}</p>
              ))
            }
            

            <button onClick={handleClick}>Update</button>
        </div>
        );
    }

  }
  const mapStateToProps = state =>{
      console.log("currentState", state)
      return {
        message: state.message
      }
  }
// export default DogBreedsList;
export default connect(
    mapStateToProps, 
    {})(DogBreedsList);