
   
import React from 'react';
import {connect} from 'react-redux'

class DogBreedsList extends React.Component {



    render() {
        return (
        <div className="App">
            <h1>{this.props.breeds}</h1>
            
        </div>
        );
    }

  }
  const mapStateToProps = state =>{
      console.log("currentState", state)
      return {
        breeds: state.breeds
      }
  }
// export default DogBreedsList;
export default connect(
    mapStateToProps, 
    {})(DogBreedsList);