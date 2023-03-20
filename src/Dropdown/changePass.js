import React,{useState} from 'react'

function ChangePass() {

  const [oldPass,setOldPass]=useState("");
  const [newPass,setNewPass] = useState("");

  return (
    <div>
      <form>
        <label>Old Password:</label>
        <input type="text" value={oldPass} />
        <label>New Password:</label>
        <input type="text" value={newPass} />
        <button>Set Password</button>
      </form>
    </div>
  )
}

export default ChangePass
