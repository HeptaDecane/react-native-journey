import React from "react";
import Header from "./src/components/Header"
import LoginForm from "./src/components/LoginForm";

const App = ()=>{
  return <React.Fragment>
    <Header title="Login"/>
    <LoginForm/>
  </React.Fragment>
}

export default App;