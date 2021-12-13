import React from 'react';
import { connect } from 'react-redux';
import GifList from './GifList';


function Gif(props) {
    const {gif} = props
 
  return (
    <div className="Gif">
      {/* <h1>GifList</h1> */}
        <h3>{gif.title}</h3>
        <p> {gif.username} </p>
        <img width="400" src={gif.images.original.url} alt="Alt"/>
        <p>Rating: <strong>{gif.rating}</strong></p>
        <a target="_blank" href={gif.url}><button>Cleck it out on giffy</button></a>
    </div>
  );
}

export default Gif;