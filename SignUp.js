import React,{useState} from 'react'
import './Popup.css'

function PopUp(props) {

    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [error,setError]=useState("")

    const onSignUp = (e)=>{
        e.preventDefault();
        const user={
            firstName: firstName,
            lastName: lastName,
            email:email,
            password: password,
        };
        console.log(user);
    }

    const checkValidation=(e)=>{
        
        setConfirmPassword(e.target.value);
        if(password != confirmPassword){
            setError("Confirm password should match with password")
        }
        else{
            setError("");
        }
    }

    return (props.trigger)?(
        <div className='popup'>
            <div className='popup-inner'>
                <button id="btn" className='close-btn' onClick={()=>props.setTrigger(false)}>close</button>
                {props.children}

                <form className='ip'>
                    <p>
                    <label>First Name: </label>
                    <input 
                    type="text" 
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                    required/>
                    </p>

                    <p>
                    <label>Last Name: </label>
                    <input
                    type="text" 
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                    required/>
                    </p>
                    
                    <p>
                    <label>Email: </label>
                    <input 
                    type="email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required/>
                    </p>

                    <p>
                    <label>Password: </label>
                    <input 
                    type="password"
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                    required/>
                    </p>

                    <p>
                    <label>Confirm Password: </label>
                    <input 
                    type="password" 
                    value={confirmPassword}
                    onChange={(e)=> checkValidation(e)}
                    required/>
                    </p>

                    <p style={{color:"red", fontSize:"12px"}}>{error}</p>
                    
                    <button id="btn" onClick={(e)=>{onSignUp(e)}} >Signup</button>
          
                </form> 
           
            </div>
        </div>
  ):"";
}

export default PopUp


    