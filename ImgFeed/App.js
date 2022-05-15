import React from 'react';
import Header from './src/components/Header'
import PhotoSection from "./src/components/PhotoSection";
import PhotoFeed from "./src/components/PhotoFeed";

const App = ()=>{
  return <React.Fragment>
    <Header title="Photos"/>
    <PhotoSection/>
    <PhotoFeed/>
  </React.Fragment>
};


export default App;
