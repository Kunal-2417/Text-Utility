
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
      const [mode, setmode] = useState('light')
      const [alert, setAlert] = useState(null)
      

  const showAlert=(message,type)=>{
      setAlert({
        msg: message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },2000)
  }

  const toggleMode = ()=>{
    if(mode==='light')
    {

       setmode('dark');
       document.body.style.backgroundColor='#0e0631';
       showAlert("Dark mode has been enbled","success");
    }
     
    else 
    {
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enbled", "success");
    }
      
      
    
  }
  return (
    
    <>
      <Router>
          <Navbar title="TextUtils" aboutus="About TextUtils" mode={mode}  toggleMode={toggleMode}/>
        <Alert Alert={alert}  />
          <div className="container my-3">

                    <Routes>
            <Route exact path="/About" element={<About mode={mode} />}>
                      </Route>
                       
                       <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Here is the space" mode={mode} />}>
                       
                      </Route>
                    </Routes>

          </div>
      </Router>
      
         
          
    </>
    
     
  );
}

export default App;
