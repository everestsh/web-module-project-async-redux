
import React from 'react';
import { connect } from 'react-redux';
import GifList from "./components/GifList"
import GifForm from "./components/GifForm"

// import {data} from "./data/gifs"
import data from "./data/gifs"
import './App.css';

function App(props) {
  // const gifs = data
  // const loading = false
  // const error = "";
  console.log("App props", props)
  return (
    <div className="App">
      <h1>Search for Gifs</h1>

      {/* <form>
        <input />
        <button>Search</button>
      </form> */}
      <GifForm />
      <h1>{props.gifd}</h1>
      {
        // loading ? <h3>We are loading</h3> : <GifList gifs={gifs} />
      }
    </div>
  );
}
const mapStateToProps = state => {
  console.log("App currentState: ", state)
  return {
    gifd: state.gifd
  }
}
export default connect(mapStateToProps)(App);