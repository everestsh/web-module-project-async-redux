
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import GifList from "./components/GifList"
import GifForm from "./components/GifForm"

import { fetchStart , fetchSuccess, getGifs} from './actions';
import './App.css';
import axios from 'axios';

function App(props) {


  // console.log("App props.loading", props.loading)
  const {gifs, loading, error, fetchStart, fetchSuccess, getGifs} = props

  // if(error != ""){
  //   return <h3>{error}</h3>
  // }
  // console.log("App props", props)
  useEffect(()=>{
    console.log("fetch start")
    // getGifs("dogs dance")
    // getGifs("fridays")
    getGifs("fall")
    // fetchStart()
    // axios.get(`https://api.giphy.com/v1/gifs/search?api_key=3g6nabgKJk22VyMEWQZNbE8d3hL5c6wL&q=cats`)
    //   .then(res=>{
    //     console.log("asios ",res.data.data)
    //     fetchSuccess(res.data.data)
    //   })
    //   .catch(err=>{
    //     console.log(err)

    //   })
  },[])
  return (
    <div className="App">
      <h1>Search for Gifs</h1>

      <GifForm />
      {
        (error != "") && <h3 >{error}</h3>
      }
      {
        loading ? <h3>We are loading ...</h3> : <GifList />
      }
    </div>
  );
}
const mapStateToProps = state => {
  // console.log("App currentState: ", state)
  return {
    // gifs: state.gifs,
    loading: state.loading,
    error: state.error
  }
}

const mapActionsToProps = () => {
  return {
    fetchStart: fetchStart
  }
}
export default connect(mapStateToProps, {fetchStart, fetchSuccess, getGifs})(App);
// export default connect(mapStateToProps, {fetchStart:fetchStart})(App);
// export default connect(mapStateToProps, mapActionsToProps())(App);