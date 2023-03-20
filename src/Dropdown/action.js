import React,{useState} from 'react'
import Account from './account'
import ChangePass from './changePass'
import Logout from './logout'
function Action(props) {
    
    if(props.value === "account"){
        <Account trigger="true"/>
       }
       else if(props.value === "changePassword"){
        <ChangePass trigger="true"/>
       }
       else{
        <Logout/>
       }
  return (
    <div>
      
    </div>
  )
}

export default Action
