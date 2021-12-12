
import React from 'react';
import { connect } from 'react-redux';
import GifList from "./components/GifList"
import {data} from "./data/gifs"
import './App.css';

function App() {
  const gifs = data
  const loading = false
  const error = "";
  return (
    <div className="App">
      <h1>Search for Gifs</h1>

      <form>
        <input />
        <button>Search</button>
      </form>

      {
        loading ? <h3>We are loading</h3> : <GifList gifs={gifs} />
      }
    </div>
  );
}

export default App;