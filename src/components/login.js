import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = (e) =>{
    console.log(e);
    setShow(false);
  } 
  const handleShow = () => setShow(true);
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
        <label className='mail'>E-mail:</label>
   <input type="email" name= "email" />
   <br/>
       <label className='password'>Password</label>
       <input type="password" name="password" />
   </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Login
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;