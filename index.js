import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchMovie from "./SearchMovie"
import MovieItem from "./MovieItem"
import {Provider} from "react-redux"
import store from "./Redux"

function App(){
  return (
    <SearchMovie />
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
  )