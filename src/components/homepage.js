import React,{useState} from 'react'
//import { Container } from 'react-bootstrap';
//import ReactDOM from 'react-dom/client';
import './index.css'

//import Login from "./login";

import PopUp from './SignUp';

function Homepage() {
  const [buttonPopup,setButtonPopup]=useState(false);
  
  return (
    <div>
        <ul>
        {/* <li> <Login/></li> */}
        <li>
        <button onClick={()=>setButtonPopup(true)}>Signup</button>
        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup} />
        </li>
      </ul>  
      <div className='background'>    
      <form className="container" >
        <input type="text" name="Search" />
        <button type="submit" >Search</button>
      </form>  
      </div>       
    </div>
  )
}

export default Homepage
