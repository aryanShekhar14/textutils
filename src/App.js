import './App.css';
import React, { useState } from 'react';

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import Alert from './components/Alert';
import {    //router import
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");//whether dark mode is enabled or not
  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(8, 11, 40)";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";

    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils";
    }

  }
  const [alert, setAlert] = useState(null);
  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    //JSX fragment to return more than 1 tag(ex: h1 and div)
    <>
      <Router>
        <Navbar title='TextUtils' aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>

    </>
  );
}

export default App;
