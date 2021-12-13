
import React from 'react';
import { connect } from 'react-redux';
import Gif from "./Gif"

function GifList(props) {
    const {gifs} = props
    console.log("GifList", gifs)
  return (
    <div className="App">
      <h1>GifList</h1>
      {
        gifs.map( (gif, index) => (
            <Gif key={index} gif={gif}/>
        ))
      }
    </div>
  );
}

const mapStateToProps = state => {
  console.log("App currentState: ", state)
  return {
    gifs: state.gifs,
  }
}

export default connect(mapStateToProps)(GifList); 