import React from 'react';
import Header from './src/components/Header'
import PhotoFeed from "./src/components/PhotoFeed";

const App = ()=>{
  return <React.Fragment>
    <Header title="Photos"/>
    <PhotoFeed/>
  </React.Fragment>
};


export default App;
