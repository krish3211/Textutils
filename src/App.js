import './App.css';
import logo from './logo.png';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const error = (selecterror)=>{
    if (selecterror === 'error'){
      showAlert("You selected wrong sentence" , "warning");
    }
  }
  const togglmode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#020729';
      showAlert("Dark mode has been enable" , "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable" , "success"); 
    }
  }
  return (
    <>
    <Navbar logo={logo} mode={mode} togglmode={togglmode}/>
    <Alert alert={alert}/>
    <div className="container mb-3">
      <TextForm heading="Enter a Text to Analyze" mode={mode} error={error} />
    </div>
    </>
  );
}

export default App;
