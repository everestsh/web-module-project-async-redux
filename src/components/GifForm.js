
import React from 'react';
import { connect } from 'react-redux';


function GifForm(props) {
    const {gifs} = props
    console.log("GifList", gifs)
  return (
    <div className="GifList">
      <form>
        <input />
        <button>Search</button>
      </form>
    </div>
  );
}

export default GifForm;