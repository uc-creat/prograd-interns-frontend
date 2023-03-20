import React,{useState,} from 'react'
// import './dropdown.css'

import Account from './account'
import ChangePass from './changePass'
import Logout from './logout'
function Dropdown() {

const [value, setValue] = useState('');

 const handleChange = (e) => {

   setValue(e.target.value);
 
   console.log(value)

 }

return (
    <div>
      <ul>
        <li className="dropdown">
          <div className="dropdown-content">
            <select value={value} onChange={(e)=>handleChange(e)}>
              <option value="account" >Account</option>
              <option value="changePassword">Change Password</option>
              <option value="logout">Logout</option>
            </select>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Dropdown
