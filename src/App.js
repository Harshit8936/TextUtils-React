// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// let name ="Harry";
// function formatUser(users){
//   return users.firstName + ' ' + users.lastName
// }
// const user = {
//   firstName:"Harshit",
//   lastName:"Bhargav"
// }
// function getGreeting(u){
//   if(u){
//     return <h1>Hello {formatUser(u)}</h1>
//   }else{
//     return <h1>Hello Stranger !</h1>
//   }
// }

function App() {
  const [mode, setMode] = useState('light');   // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")

    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About us" mode={mode} toggle={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try Text Utils" />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>


  );
}

export default App;
