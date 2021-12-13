
import React from 'react';
import { connect } from 'react-redux';
import GifList from "./components/GifList"
import GifForm from "./components/GifForm"

// import {data} from "./data/gifs"
// import data from "./data/gifs"
import './App.css';

function App(props) {
  // const gifs = data
  // const loading = false
  // const error = "";
  console.log("App props", props)
  console.log("App props.loading", props.loading)
  const {gifs, loading, error} = props
  return (
    <div className="App">
      <h1>Search for Gifs</h1>

      {/* <form>
        <input />
        <button>Search</button>
      </form> */}
      <GifForm />
      {/* <h1>{props.gifd}</h1> */}
      {
        loading ? <h3>We are loading</h3> : <GifList gifs={gifs} />
      }
    </div>
  );
}
const mapStateToProps = state => {
  console.log("App currentState: ", state)
  return {
    gifs: state.gifs,
    loading: state.loading,
    error: state.error
  }
}
export default connect(mapStateToProps)(App);