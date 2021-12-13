
import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import { getGifs } from '../actions'


function GifForm(props) {
    const [searchItem, setSearchItem] = useState("")
    const {gifs} = props
    console.log("GifList", gifs)
    const handleSubmit = (e) => {
        e.preventDefault()
        props.getGifs(searchItem)
    }
    const handleChange = (e) => {
        console.log(e.target.value)
        setSearchItem(e.target.value)
    }
  return (
    <div className="GifList">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default connect(null, {getGifs})(GifForm);