import React, { useState } from 'react';
import SignUp from './SignUp'


function SignUpbutton(){
    const[display, setDisplay]=useState(false);
return(
    <div>
        <button onClick={()=>setDisplay(true)} className='login-open-btn'>SignUp</button>
        <SignUp trigger={display} setTrigger={setDisplay}/>
    </div>
)
}
export default SignUpbutton;