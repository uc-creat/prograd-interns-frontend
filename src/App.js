import React,{useState} from 'react';
import './App.css';

import Login from "./components/login"

import PopUp from './components/SignUp';

function App() {

  const [buttonPopup,setButtonPopup]=useState(false);

  return (
    
    <div className="App">
      <ul>
        <li> <Login/></li>
        <li>
        <button onClick={()=>setButtonPopup(true)}>Signup</button>
        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}/>
        </li>
      </ul>       
    </div>
    
  );
}

export default App;