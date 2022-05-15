import React from 'react';
import Header from './src/components/Header'
import PhotoSection from "./src/components/PhotoSection";

const App = ()=>{
  return <React.Fragment>
    <Header title="Photos"/>
    <PhotoSection/>
  </React.Fragment>
};


export default App;
