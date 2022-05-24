import React from "react";
import Header from "./src/components/Header"
import LoginForm from "./src/components/LoginForm";
import {initializeApp} from "firebase/app";

import {createStore} from "redux";
import {Provider} from "react-redux";
import reducers from "./src/reducers";

const store = createStore(reducers)
initializeApp({
  apiKey: "AIzaSyAcgS9Qjio2MN97KqrH1Ta8yaXK6B21lrM",
  authDomain: "react-native-auth-d8906.firebaseapp.com",
  projectId: "react-native-auth-d8906",
  storageBucket: "react-native-auth-d8906.appspot.com",
  messagingSenderId: "331897691837",
  appId: "1:331897691837:web:a7b221650419ea6fc021d4",
  measurementId: "G-F6VRJ5MC6H"
})

const App = ()=>{

  return <React.Fragment>
    <Provider store={store}>
      <Header title="Login"/>
      <LoginForm/>
    </Provider>
  </React.Fragment>
}

export default App;